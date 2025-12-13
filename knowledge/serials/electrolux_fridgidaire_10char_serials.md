\# Electrolux / Frigidaire 10‑Character Serial Numbers



This document describes how to interpret 10‑character serial numbers commonly used by Electrolux / Frigidaire for dishwashers and related appliances.



> NOTE FOR WIZARD:

> - Use this document to infer \*\*approximate manufacture date\*\*, \*\*plant\*\*, \*\*product type\*\*, and \*\*sequence\*\*.

> - Do \*\*not\*\* claim 100% certainty; give ranges (e.g., “likely 2016–2018”) if multiple years are possible.

> - You may explain the decoding to the user if they ask how you know the age of the unit.



---



\## 1. General format



Typical Electrolux / Frigidaire serial numbers in this family:



\- \*\*Length:\*\* 10 characters (letters and digits)

\- \*\*Pattern:\*\* `\[A-Z0-9]{10}` (no spaces or punctuation)

\- Often printed on the rating plate near the model number.



Example serials (fictional):



\- `TH70812345`

\- `AF31567890`

\- `KB20345678`



Always \*\*clean\*\* the serial by:



\- Trimming spaces.

\- Converting to uppercase.

\- Removing anything that is not a letter or digit.



If the result is \*\*not exactly 10 characters\*\*, treat it as “not this serial format”.



---



\## 2. Plant code (1st character)



The \*\*first character\*\* is the \*\*plant code\*\*:



Known plant codes (from internal mapping):



\- `A` → Memphis, TN (USA)

\- `B` → Anderson, SC (USA)

\- `K` → K‑code plant (Solaro, Italy for many dishwashers; also used for some laundry/AC/dehumidifiers built in China)

\- `L` → Greenville, MI (USA)

\- `N` → Quebec, Canada

\- `O` → Replacement model/serial tag (original label replaced)

\- `T` → Kinston, NC (USA)

\- `V` → Springfield, TN (USA)

\- `W` → St. Cloud, MN (USA)

\- `X` → Webster City, IA (USA)

\- `1` → Rayong, Thailand

\- `2` → Porcia, Italy (compact washer) or Siewierz, Poland (compact dryer)

\- `4` → Juarez, Mexico



Some letters/digits indicate \*\*outsourced / contract production\*\*, where the unit is built by a non‑core plant:



\- `C`, `D`, `E`, `G`, `H`, `I`, `J`, `P`, `Q`, `R`, `S`, `3`, `7`, `8`, `9` → Outsourced / contract production (non‑core Electrolux plant)



If the 1st character is none of the above, treat it as \*\*“Unknown plant code”\*\*.



When talking to the user, you can say things like:



\- “This serial points to production at the Kinston, NC plant.”

\- “This looks like it was built in an outsourced/contract facility rather than a main Electrolux plant.”



---



\## 3. Product code (2nd character)



The \*\*second character\*\* usually indicates the \*\*product type / family\*\*:



Known codes:



\- `A` → Refrigerator

\- `B` → Freezer

\- `C` → Washer

\- `D` → Dryer

\- `E` → Laundry center (stacked laundry combo)

\- `F` → Range

\- `G` → Microwave

\- `H` → Dishwasher

\- `K` → Room air conditioner or specialty refrigeration

\- `J` → Trash compactor

\- `L` → Outdoor grill

\- `N` → Dehumidifier

\- `R` → Ice machine / beverage center



If the 2nd character is not in this list, treat the product type as \*\*“Unknown product type”\*\*.



When assisting the user, you can cross‑check:



\- If they say “dishwasher” and the product code suggests “dishwasher” (`H`), that supports your interpretation.

\- If there’s a mismatch (user says dishwasher but product code is for a refrigerator), consider:

&nbsp; - Possible mis‑read serial.

&nbsp; - Wrong rating plate.

&nbsp; - Replacement tag labelled for another unit.



---



\## 4. Year digit and possible year range (3rd character)



The \*\*third character\*\* is treated as a \*\*single year digit\*\*, but it is usually ambiguous across decades.



\- If it is a digit (`0`‑`9`), interpret it as `yearDigit`.

\- From `yearDigit`, consider these possible years:

&nbsp; - `2000 + yearDigit`

&nbsp; - `2010 + yearDigit`

&nbsp; - `2020 + yearDigit`



Example:



\- Serial with 3rd char `7`:

&nbsp; - Possible years: 2007, 2017, 2027 (less likely in the near term, but still possible).



Use \*\*context\*\* to choose a \*\*plausible range\*\*:



\- Typical dishwasher life: about \*\*8–15 years\*\*.

\- Styling clues (stainless vs bisque, control panel style, presence of Wi‑Fi, etc.).

\- Error code conventions that changed over time.



When talking to the user, prefer language like:



\- “Based on the serial, it was likely built sometime around the late 2010s.”

\- “The serial suggests a build year digit of 7, which typically lines up with around 2007 or 2017 depending on the model.”



If the 3rd character is \*\*not a digit\*\*, you \*\*cannot interpret a year\*\* from it.



---



\## 5. Week of year (4th and 5th characters)



Characters \*\*4–5\*\* (0‑based positions 3 and 4) are the \*\*week number\*\* within the year:



\- Expected format: two digits, `01` through `52` (or sometimes `53`).

\- Convert to a number:

&nbsp; - If the result is between 1 and 52 → treat as a valid week.

&nbsp; - Otherwise → treat as invalid/unknown week.



Example:



\- Serial: `TH70812345`

&nbsp; - 4th–5th characters: `08` → week 8 of the production year.



Communicate to the user in simple language:



\- “Built roughly in week 8 of that year.”

\- “Built early in the year” or “mid‑year” if you want to stay less precise.



---



\## 6. Sequence number (last 5 characters)



The \*\*last part\*\* of the serial (characters 6–10, positions 5–9) is best thought of as a \*\*sequence or batch number\*\*:



\- It often doesn’t help troubleshooting directly.

\- It can be used to distinguish between multiple units built in the same week.



Example:



\- `TH70812345` → last 5 characters: `12345` → sequence number 12345.



Typically, you \*\*do not need\*\* to mention the sequence number to the user unless they ask.



---



\## 7. Anomalous or special prefixes



Certain two‑letter prefixes have been observed as \*\*odd or anomalous\*\*:



Examples of leading 2‑character sequences:



\- `AA`

\- `AB`

\- `ID`

\- `IE`

\- `1P`

\- `1V`

\- `EA`

\- `ZA`



Treat these as \*\*“anomalous prefixes”\*\* that may represent:



\- Special runs,

\- Re‑tags,

\- Or atypical production tracking.



If you see one of these, be \*\*extra cautious\*\* about over‑confident decoding. You can say:



\- “This serial format looks somewhat atypical, so I’ll treat the date and plant as approximate.”



---



\## 8. Putting it all together



When you see a potential 10‑character Electrolux / Frigidaire serial:



1\. Clean it:

&nbsp;  - Uppercase.

&nbsp;  - Remove non‑alphanumeric characters.

&nbsp;  - Check that the result has \*\*exactly 10 characters\*\*.



2\. Interpret:

&nbsp;  - 1st char → plant code → plant location or “outsourced” vs “unknown”.

&nbsp;  - 2nd char → product code → product type (e.g., dishwasher).

&nbsp;  - 3rd char → year digit → possible years (e.g., 2007, 2017, 2027).

&nbsp;  - 4th–5th chars → week number (1–52).

&nbsp;  - 6th–10th chars → sequence/batch number.



3\. Communicate to the user in \*\*plain language\*\*, for example:



&nbsp;  - “This looks like a dishwasher built in the Kinston, NC plant, probably around the mid‑2010s, roughly week 8 of that year.”

&nbsp;  - “The serial suggests it’s around 10 or so years old, but there’s some ambiguity about the exact year.”



4\. Use the age estimate for:

&nbsp;  - Setting expectations about:

&nbsp;    - Part availability,

&nbsp;    - Likelihood of multiple age‑related failures,

&nbsp;    - Whether repair vs replacement is reasonable.

&nbsp;  - Emphasizing safety on older units (especially if there are leaks, overheating, or wiring issues).



---



\## 9. How Wizard should behave with this information



\- Use this decoding to:

&nbsp; - Confirm \*\*product type\*\* (e.g., dishwasher vs refrigerator).

&nbsp; - Estimate \*\*age\*\* and \*\*plant\*\*.

\- Be cautious with certainty:

&nbsp; - Prefer ranges and “likely” language over exact statements.

\- If the user \*\*asks how you know\*\*, you can briefly explain:

&nbsp; - “Electrolux encodes plant, product type, year‑digit, and week into the serial number. Based on that pattern, I can estimate the age and where it was built.”



