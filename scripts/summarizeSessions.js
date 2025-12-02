// scripts/summarizeSessions.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SESSIONS_DIR = path.join(__dirname, '..', 'data', 'sessions');
const OUT_DIR = path.join(__dirname, '..', 'data', 'session_cases');

async function summarizeSession(session) {
  const { sessionId, turns } = session;

  // Ignore trivial sessions (e.g., 1 short turn with no appliance content)
  if (!turns || turns.length === 0) {
    return { session_id: sessionId, resolution_status: 'no_data' };
  }

  const transcript = turns
    .map((t, i) =>
      `Turn ${i + 1}\nUSER: ${t.user_message}\nWIZARD: ${t.assistant_reply}`
    )
    .join('\n\n');

  const systemPrompt = `
You are extracting appliance repair session data from a chat between a user and Wizard.

Always return a single JSON object with these keys:

{
  "session_id": "string",
  "product_type": "dishwasher | refrigerator | washer | dryer | range | oven | cooktop | microwave | air_conditioner | water_heater | other_or_unknown",
  "brand": "string or null",
  "model": "string or null",
  "symptoms": ["..."],                  // what the user reports
  "error_codes": ["..."],               // like i20, F7E1, etc.
  "attempted_steps": ["..."],           // checks or fixes Wizard guided them through
  "suspected_causes": ["..."],          // what Wizard or user thought might be wrong
  "root_cause": "string or null",       // only if a likely / confirmed cause is clear
  "fix_steps": ["..."],                 // only if there is a likely / confirmed fix
  "warnings": ["..."],                  // safety notes if any
  "resolution_status": "confirmed_fix" | "likely_fix" | "no_clear_resolution",
  "tags": ["short_keywords"],
  "notes": "extra context"
}

Rules:
- Always fill in "resolution_status":
  - "confirmed_fix": user clearly confirms the problem is solved.
  - "likely_fix": strong indication of a likely fix, even if not 100% confirmed.
  - "no_clear_resolution": conversation ends without a clear outcome.
- Even when "no_clear_resolution", still fill in other fields (symptoms, attempted_steps, suspected_causes, etc.) based on the chat.
- If information is missing, use null or empty arrays. Do NOT invent details.
`;

  const userPrompt = `Here is the full chat transcript for one session (ID: ${sessionId}). Extract the session data:\n\n${transcript}`;

  const resp = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
  });

  const parsed = JSON.parse(resp.choices[0].message.content);
  parsed.session_id = sessionId; // ensure session_id is set
  return parsed;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs.readdirSync(SESSIONS_DIR).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} session files`);

  let resolvedCount = 0;
  let totalCount = 0;

  for (const file of files) {
    const fullPath = path.join(SESSIONS_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const session = JSON.parse(raw);

    totalCount++;

    try {
      const summary = await summarizeSession(session);

      const outPath = path.join(OUT_DIR, `${session.sessionId}.json`);
      fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), 'utf8');

      if (
        summary.resolution_status === 'confirmed_fix' ||
        summary.resolution_status === 'likely_fix'
      ) {
        resolvedCount++;
        console.log(`Session ${session.sessionId} -> resolved (${summary.resolution_status})`);
      } else {
        console.log(`Session ${session.sessionId} -> unresolved (${summary.resolution_status})`);
      }
    } catch (err) {
      console.error(`Failed to summarize session ${session.sessionId}:`, err.message);
    }
  }

  console.log(`Done. Processed ${totalCount} sessions, with ${resolvedCount} resolved.`);
}

main().catch(err => {
  console.error('summarizeSessions failed:', err);
  process.exit(1);
});