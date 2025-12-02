// scripts/exportSessions.js
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// WARNING: this file is for local use only. Do NOT commit your password to GitHub.
// Use the same URL that worked in testDb.js:
const pool = new Pool({
  connectionString: 'postgresql://postgres:08-24RobynAnne@db.pxaafyrtkuxqtecjuvhe.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false },
});

async function exportSessions() {
  const client = await pool.connect();
  try {
    // Pull all turns, ordered by session and time
    const { rows } = await client.query(
      `SELECT session_id, ts, user_message, assistant_reply, history_length
       FROM chat_turns
       ORDER BY session_id, ts`
    );

    const sessions = {};

    for (const row of rows) {
      const sid = row.session_id || 'no-session';
      if (!sessions[sid]) {
        sessions[sid] = {
          sessionId: sid,
          turns: [],
        };
      }
      sessions[sid].turns.push({
        ts: row.ts,
        user_message: row.user_message,
        assistant_reply: row.assistant_reply,
        history_length: row.history_length,
      });
    }

    const outDir = path.join(__dirname, '..', 'data', 'sessions');
    fs.mkdirSync(outDir, { recursive: true });

    let count = 0;
    for (const [sid, session] of Object.entries(sessions)) {
      const safeId = sid.replace(/[^a-zA-Z0-9_-]/g, '_') || 'no-session';
      const outPath = path.join(outDir, `${safeId}.json`);
      fs.writeFileSync(outPath, JSON.stringify(session, null, 2), 'utf8');
      count++;
    }

    console.log(`Exported ${count} sessions to ${outDir}`);
  } finally {
    client.release();
    await pool.end();
  }
}

exportSessions().catch(err => {
  console.error('Failed to export sessions:', err);
  process.exit(1);
});