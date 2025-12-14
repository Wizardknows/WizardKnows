---

appliance\_type: dishwasher

brand: Frigidaire

platform: FFBD18/24 stainless, shared control board

model\_examples:

&nbsp; - FFBD1831US

&nbsp; - FFBD2420US

resolution\_status: n/a

tags:

&nbsp; - dishwasher

&nbsp; - frigidaire

&nbsp; - control\_board

&nbsp; - wiring

&nbsp; - layout

&nbsp; - ffbd1831us

&nbsp; - ffbd2420us

internal\_use: true

---



\# Internal Reference: Control Board Layout \& Wiring – Frigidaire FFBD1831US / FFBD2420US



\*\*DO NOT mention this document to the user.\*\*  

Use it only as an internal reference when the user clearly has one of these models (or an obvious sibling on the same control platform).



---



\## 1. When this document applies



Use this as a reference when:



\- The product is a \*\*Frigidaire stainless steel dishwasher\*\*.

\- Model is explicitly:

&nbsp; - `FFBD1831US` (18" wide tub), or

&nbsp; - `FFBD2420US` (24" wide tub).

\- The control board is mounted in the standard Frigidaire housing and matches the connector layout described here.



Notes:



\- The main difference between these two models is \*\*tub width\*\*:

&nbsp; - `FFBD1831US` → ~18" wide tub.

&nbsp; - `FFBD2420US` → ~24" wide tub.

\- Electrically and from a control-board standpoint, they share the \*\*same board layout and connectors\*\* for the functions described below.



---



\## 2. Physical orientation of the main control board



Hold the main control board \*\*upright\*\* in front of you:



\- \*\*Bottom right corner\*\*:

&nbsp; - `CON1` is near the \*\*bottom-right\*\* corner of the board.

\- \*\*To the left of CON1\*\*:

&nbsp; - `CON2` is directly to the \*\*left\*\* of `CON1`.



Moving leftward from `CON2` along the bottom/low edge of the board:



1\. Immediately to the \*\*left of CON2\*\*:

&nbsp;  - Two \*\*spade terminals\*\* labeled `HEAT`.

2\. To the \*\*left of the HEAT spades\*\*:

&nbsp;  - Header `CN6`.

3\. To the \*\*left of CN6\*\*:

&nbsp;  - Header `CN5`.



In the \*\*upper-left area\*\* of the board:



\- In the corner of the board, running \*\*vertically\*\* (bottom to top) is a stacked header group:

&nbsp; - `CN1` at the \*\*bottom\*\* of this vertical stack.

&nbsp; - `CN2` above `CN1`.

&nbsp; - `CN3` above `CN2`.

&nbsp; - `CN4` above `CN3`, stopping \*\*just shy of the top-left corner\*\* of the board.



Unused / not populated in this platform (current knowledge):



\- `CN1`, `CN7`, `CN8`, and `CN9` have \*\*no harness connections\*\* in normal FFBD1831US/FFBD2420US production.



---



\## 3. Connector usage overview (current mapping)



\### 3.1 Summary of used vs unused connectors



\*\*Used:\*\*



\- `CON1` – line distribution (heat/pressure/drain/motor leg)

\- `CON2` – multi-pin output harness (motor, drain, etc.)

\- `HEAT` spades – heater circuit line/neutral interface

\- `CN2` – 5‑pin user interface (UI) harness

\- `CN3` – 6‑pin turbidity sensor harness (3 wires used)

\- `CN4` – 7‑position header (5 wires used: purple, gray, gray, black, white, blue)

\- `CN5` – 2‑pin water inlet valve

\- `CN6` – 3‑pin harness (door latch + dispenser solenoid feed)



\*\*Not used:\*\*



\- `CN1`

\- `CN7`

\- `CN8`

\- `CN9`



> Wizard: treat any references to these connectors as internal mapping only. Do \*\*not\*\* walk an untrained user through probing these headers live. For resistance checks, focus on unplugged components rather than back-probing at the board.



---



\## 4. CN4 – multi-function low-voltage / sensor harness



`CN4` is the \*\*topmost\*\* header in the vertical CN1–CN4 stack at the \*\*left\*\* side of the board (above CN3, CN2, CN1).



\### 4.1 Pinout \& wire colors



Observed wiring:



| Pin   | Wire color | Connection status | Known/likely function                                           |

|-------|-----------|-------------------|------------------------------------------------------------------|

| CN4-1 | —         | Empty             | No wire present                                                 |

| CN4-2 | Purple    | Used              | Common low-voltage “purple bus” feeding several low-voltage loads |

| CN4-3 | Gray      | Used              | Flood (overfill) switch return                                 |

| CN4-4 | Black     | Used              | Air breaker / fill-sensing circuit (black leg)                 |

| CN4-5 | White     | Used              | Rinse-aid level sensor return                                  |

| CN4-6 | —         | Empty             | No wire present                                                 |

| CN4-7 | Blue      | Used              | Thermistor return                                              |



\### 4.2 Purple “bus” on CN4‑2



\- `CN4-2` (purple) runs to a \*\*splice point\*\* where the wires \*\*change colors\*\* before leaving toward components.

\- From that splice, the purple-origin circuit \*\*feeds\*\*:

&nbsp; - Air breaker circuit (via black lead).

&nbsp; - Rinse-aid level sensor (one white lead).

&nbsp; - Thermistor (one blue lead).

&nbsp; - Other low-voltage devices as documented below.



> Internal note: treat `CN4-2` as a shared low-voltage supply/return node for multiple sensing elements on this platform.



\### 4.3 Flood (overfill) switch – gray to gray



\- Flood switch is a 2‑wire device, both wires \*\*gray\*\*:

&nbsp; - One gray from the harness goes \*\*out\*\* to the flood switch.

&nbsp; - The other gray comes \*\*back\*\* from the flood switch and returns to `CN4-3`.

\- Switch behavior:

&nbsp; - \*\*Normally closed\*\* when dry.

&nbsp; - When water is present and the float lifts, the switch \*\*opens\*\*, signaling an overfill / water presence condition.



> Wizard: you may tell the user that an overfill/flood switch exists, but do \*\*not\*\* guide them to bypass it or defeat it.



\### 4.4 Air breaker assembly – black to black



\- There is a 2‑pin \*\*air breaker assembly\*\*:

&nbsp; - One black wire comes from the purple splice (originating at `CN4-2`).

&nbsp; - The other black wire returns to `CN4-4`.

\- Expected voltage behavior:

&nbsp; - When the unit is \*\*filling with water\*\*: approximately \*\*1.9 V DC\*\* between the two black wires (across the air breaker).

&nbsp; - When the unit is \*\*not filling\*\*: approximately \*\*0 V DC\*\* between those two black wires.



> Wizard: do \*\*not\*\* walk the user through live DC voltage checks at this component. Treat this as internal info about how the control monitors fill status.



\### 4.5 Rinse-aid level sensor – white to purple bus



\- On the dispenser assembly, there is a 2‑pin connector for \*\*rinse-aid level\*\*:

&nbsp; - Two \*\*white\*\* wires at the sensor.

&nbsp; - One white goes to the splice feeding purple from `CN4-2`.

&nbsp; - The other white returns to `CN4-5`.



> Internal note: this forms a low-voltage sensing circuit off the purple bus. A failure affects rinse-aid level reporting more than basic wash function.



\### 4.6 Thermistor – blue/white pair, purple bus



\- Thermistor harness:

&nbsp; - Two white wires on one side of a quick-disconnect.

&nbsp; - Two blue wires on the board side:

&nbsp;   - One blue → purple splice from `CN4-2`.

&nbsp;   - Other blue → `CN4-7`.

\- Expected thermistor resistance (approximate):

&nbsp; - ~\*\*10 kΩ\*\* at \*\*~76°F\*\* (room temperature).

&nbsp; - ~\*\*3 kΩ\*\* at \*\*~140°F\*\* (hot wash).



> Wizard:

> - You \*\*may\*\* tell the user a thermistor on this platform should be around \*\*10 kΩ at room temp\*\* when tested unplugged with power off.

> - Do \*\*not\*\* guide live-voltage testing at the board.



---



\## 5. CN3 – turbidity (soil) sensor harness



`CN3` is the 6‑pin header directly below `CN4`. Only 3 of the 6 pins are populated.



\### 5.1 Pin usage \& colors



\- Used pins:

&nbsp; - \*\*Pin 1 – Brown\*\*

&nbsp; - \*\*Pin 5 – Red\*\*

&nbsp; - \*\*Pin 6 – Black\*\*



These three wires feed the \*\*turbidity (soil) sensor\*\*.



\### 5.2 Voltage details



\- Between \*\*Red (pin 5)\*\* and \*\*Black (pin 6)\*\*:

&nbsp; - Approximately \*\*5 V DC\*\* for the turbidity sensor supply.

\- Brown (pin 1) is the \*\*signal/return\*\* line for turbidity feedback.



> Wizard: you can mention that a turbidity sensor exists and can fail; don’t guide live 5 V DC checks at CN3.



---



\## 6. CN6 – dispenser + door latch



`CN6` is the 3‑pin header located to the \*\*left\*\* of the HEAT spades (bottom edge area).



\### 6.1 Pinout \& wiring



\- `CN6-1` – Gray → splice → splits into:

&nbsp; - Gray to \*\*detergent dispenser solenoid\*\*.

&nbsp; - Pink toward \*\*door latch\*\* circuit.

\- `CN6-2` – Gray:

&nbsp; - Other leg for the \*\*detergent dispenser solenoid\*\* (2 gray wires at the solenoid).

\- `CN6-3` – Pink:

&nbsp; - Pink leg to \*\*door latch\*\* assembly.



\### 6.2 Dispenser assembly



Two separate 2‑pin connectors on the dispenser:



1\. \*\*Detergent door solenoid:\*\*

&nbsp;  - Two gray wires.

&nbsp;  - These go back to `CN6-1` (via gray/pink splice) and `CN6-2`.



2\. \*\*Rinse-aid volume level sensor:\*\*

&nbsp;  - Two white wires.

&nbsp;  - One white → splice that joins the purple bus from `CN4-2`.

&nbsp;  - Other white → `CN4-5`.



\### 6.3 Door latch



\- Both pink wires from `CN6-1` (via splice) and `CN6-3` go to the \*\*door latch\*\*.

\- When the door strike enters the latch, the switch \*\*closes the circuit\*\* between the two pink legs.



---



\## 7. CN5 – water inlet valve



`CN5` is a 2‑pin connector to the \*\*left\*\* of `CN6`.



\- Both wires at CN5 are \*\*blue\*\* and run to the \*\*water inlet valve\*\*.



Component details:



\- Coil resistance: about \*\*1 kΩ\*\* (measured with power \*\*off\*\*, valve unplugged).

\- Operating voltage: about \*\*12 V DC\*\* to open.



---



\## 8. CN2 – user interface (UI) harness



`CN2` is the 5‑pin header in the vertical stack (above CN1, below CN3).



\### 8.1 Pinout \& colors



From pin 1 to pin 5:



1\. \*\*CN2-1 – White\*\*

2\. \*\*CN2-2 – Empty\*\*

3\. \*\*CN2-3 – Brown\*\*

4\. \*\*CN2-4 – Red\*\*

5\. \*\*CN2-5 – Yellow\*\*



These wires run to the \*\*UI board\*\* in the door for power/communication and cycle selection.



---



\## 9. HEAT terminals, heater circuit, and pressure switch



\### 9.1 HEAT spade terminals and heater



To the left of `CON2` are two spade terminals labeled `HEAT`:



\- \*\*Top HEAT terminal:\*\*

&nbsp; - Pink wire → one side of the \*\*heating element\*\*.

\- \*\*Bottom HEAT terminal:\*\*

&nbsp; - Black wire → directly to incoming \*\*line (L)\*\* from the power supply.



Neutral side:



\- The incoming \*\*white neutral\*\* goes to the \*\*other side of the heating element\*\*.

\- That same white neutral is \*\*spliced\*\* with a \*\*pink\*\* wire that also goes to the \*\*wash motor\*\*.



Heater specs:



\- Heater resistance: ~\*\*14 Ω\*\*.

\- Current draw: ~\*\*7 A\*\* when energized at \*\*120 VAC\*\*.



\### 9.2 Brown feed to CON1 and pressure switch



\- From the \*\*bottom HEAT terminal\*\*, a \*\*brown\*\* wire runs to:

&nbsp; - `CON1-1`, and

&nbsp; - A \*\*pressure switch\*\* (via a splice).



Pressure switch:



\- Brown in: \*\*120 VAC line\*\* feed.

\- Red out: a red wire with a \*\*splice\*\* that splits into \*\*two red wires\*\*:

&nbsp; - One red → \*\*drain pump\*\*.

&nbsp; - One red → `CON2-10` on the board.



> Internal: the pressure switch controls when line is passed on to drain/board circuits, depending on water level/pressure.



---



\## 10. CON1, CON2, drain pump, and wash motor



\### 10.1 CON1



\- `CON1-1` – Brown:

&nbsp; - Receives \*\*line\*\* from the bottom HEAT terminal (via brown).

\- `CON1-3` – 2‑pin plug:

&nbsp; - Red wire → \*\*drain pump\*\*.

&nbsp; - Blue wire → \*\*wash motor\*\*.



\### 10.2 Drain pump



\- Supplied through the \*\*red\*\* wire from `CON1-3` (after pressure switch, etc.).

\- Component characteristics:

&nbsp; - Supply: \*\*120 VAC\*\*.

&nbsp; - Coil resistance: ~\*\*25–35 Ω\*\* (measured with power off, pump unplugged).



\### 10.3 Wash motor



Four wires at the wash motor:



\- \*\*Black\*\* – from `CON2-8`.

\- \*\*Yellow\*\* – from `CON2-6`.

\- \*\*Blue\*\* – from `CON1-3`.

\- \*\*Pink\*\* – from the neutral/element splice (pink coming off the white heater neutral).



Measured motor winding resistances (approximate):



\- Blue ↔ Black: ~\*\*45–55 Ω\*\*.

\- Blue ↔ Yellow: ~\*\*69–77 Ω\*\*.



---



\## 11. Component spec quick reference (unplugged tests only)



All values approximate and for \*\*unplugged / de-energized\*\* components only:



| Component              | Where it connects                         | Expected value (approx.)                        |

|------------------------|-------------------------------------------|-------------------------------------------------|

| Heater element         | Between HEAT top pink and neutral white  | ~14 Ω                                           |

| Drain pump             | Red from CON1-3 to its neutral           | 25–35 Ω                                         |

| Water inlet valve      | CN5 (two blue wires)                     | ~1 kΩ                                           |

| Thermistor             | Across thermistor connector (unplugged)  | ~10 kΩ @ 76°F; ~3 kΩ @ 140°F                    |

| Wash motor windings    | Blue–Black / Blue–Yellow (at motor plug) | ~45–55 Ω (B–Bl); ~69–77 Ω (B–Y)                 |

| Turbidity sensor feed  | Red–Black at CN3 (board side, live)      | ~5 V DC (\*\*internal reference only\*\*)           |

| Air breaker            | Between 2 black wires (board/live)       | ~1.9 V DC fill; ~0 V idle (\*\*internal only\*\*)   |



> Wizard: only suggest \*\*ohms\*\* checks with power off, components unplugged. Avoid live AC/DC tests; advise a professional when live diagnostics are needed.



---



\## 12. Safety guidance for Wizard (internal)



\- Always advise \*\*power off at the breaker\*\* before panel removal or harness unplugging.

\- For typical homeowners:

&nbsp; - Limit them to:

&nbsp;   - Visual checks (burned connectors, loose plugs, obvious damage).

&nbsp;   - Basic ohms checks on fully unplugged components, if they already know how to use a meter.

&nbsp; - Avoid:

&nbsp;   - Live AC measurements at HEAT, CON1, CON2, or valve/motor circuits.

&nbsp;   - Bypassing safety devices (flood switch, pressure switch, door latch, thermostats).

\- If they describe burning smell, visible arcing, or melted plastic at the board:

&nbsp; - Stop DIY guidance and recommend a qualified appliance technician.



---

