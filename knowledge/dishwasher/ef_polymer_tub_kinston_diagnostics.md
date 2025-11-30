title: Electrolux/Frigidaire Polymer-Tub Dishwashers – Kinston Diagnostics

product\_type: dishwasher

brands: \["Electrolux", "Frigidaire"]

platform: polymer\_tub\_kinston

topic\_type: diagnostics

last\_updated: 2025-11-30



---



\# Electrolux/Frigidaire Polymer-Tub Dishwashers – Kinston Diagnostics



Kinston, NC–built polymer (plastic) tub dishwashers support two diagnostic modes:



\- \*\*Relay Test Mode\*\* – component-level testing (manual control of loads).

\- \*\*Water/Service Test Mode\*\* – automated test cycle with defined timing and amp draw.



Both modes require first placing the unit into \*\*Power Failure\*\* mode.



Units exist with:



\- \*\*Front-facing UI\*\* (controls visible on the front of door).

\- \*\*Top-facing UI\*\* (controls on the top edge of door, hidden when door is closed).



This guide covers both UI types.



---



\## 2. Shared Concepts



\### 2.1 Power Failure Mode (general)



\- Required “entry point” to reach either:

&nbsp; - \*\*Relay Test Mode\*\*, or  

&nbsp; - \*\*Water/Service Test Mode\*\*.

\- Once active, \*\*all LEDs illuminate\*\*.

\- \*\*Auto time-out:\*\* Power Failure automatically cancels after ~15 seconds if no further key presses.



\### 2.2 Alternative Power Failure activation



\- You can also activate Power Failure by:

&nbsp; - Removing power from the unit for \*\*30 seconds\*\*, then restoring power.

\- After power returns:

&nbsp; - All LEDs will illuminate for ~15 seconds (Power Failure window).

&nbsp; - You must press the appropriate key sequence \*\*while LEDs are still lit\*\* to enter test modes.



---



\## 3. Front-Facing UI Models



These are models where the console is visible on the front of the door (Cycles, Temp, Options, Start/Cancel keys, etc.).



\### 3.1 Entering Power Failure (Front UI)



1\. Ensure power is on and door is closed.

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Cycles\*\* and \*\*Temp\*\* buttons together.

3\. Hold for ~10 seconds until \*\*all LEDs illuminate\*\*.

4\. Release the buttons.

5\. The unit is now in \*\*Power Failure\*\* and will remain so for ~15 seconds.



> If Power Failure times out, repeat the sequence or cycle power for 30 seconds.



---



\### 3.2 Relay Test Mode (Front UI)



\#### Enter Relay Test Mode



1\. Unit must already be in \*\*Power Failure\*\* (all LEDs lit).

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Cycles\*\* and \*\*Options\*\* for about 1 second.

3\. Release quickly.

4\. Unit is now in \*\*Relay Test Mode\*\* (no separate display code; mode is defined by how keys behave).



\#### Exit Relay Test Mode



\- \*\*Press and hold\*\* \*\*Cycles\*\* and \*\*Options\*\* again for ~1 second and release.

\- Unit returns to \*\*Power Failure\*\* state.

\- After ~15 seconds, Power Failure times out and normal consumer operation is restored.



\#### Component Activation – Front UI Relay Test



Each component is toggled ON/OFF by a specific key, with a confirming LED:



| Component        | How to Toggle                                               | Indicator LED              | Expected Behavior                                    | Notes                                 |

|------------------|-------------------------------------------------------------|----------------------------|-----------------------------------------------------|---------------------------------------|

| Drain pump       | Hold \*\*Options\*\* for ~3s (Control Lock); repeat to toggle   | \*\*“Lock”\*\* LED when ON     | Audible humming; any water in tub should drain.     | Use to clear standing water.          |

| Water valve      | Press \*\*Cycles\*\* key to toggle ON/OFF                       | \*\*“Heavy Wash”\*\* LED when ON | Valve energizes; water flows into tub.             | Monitor for proper fill.              |

| Wash motor       | Press \*\*Start/Cancel\*\* to toggle ON/OFF                     | \*\*“Start/Cancel”\*\* LED when ON | Wash motor runs audibly; with water, circulation visible. | Useful to test pump/wash pressure.    |

| Heater           | Press \*\*Options\*\* key to toggle heater ON/OFF               | \*\*“Heat Dry”\*\* LED when ON | Heater energizes; 6–8 A draw expected.              | \*\*Do NOT leave energized unattended.\*\* |

| Soap dispenser   | Ensure door is latched; press \*\*Temp\*\* to activate (one-shot) | \*\*“High”\*\* LED when active | Within ~60 s, detergent cup should click and open.  | Test with door closed and latched.    |



\*\*Heater safety:\*\*



\- Verify heater ONLY with:

&nbsp; - Amp clamp (expect approx. \*\*6–8 A\*\*), or  

&nbsp; - IR thermometer.

\- Do not leave heater ON for extended periods.



---



\### 3.3 Water/Service Test Mode (Front UI)



\#### Enter Water/Service Test Mode



1\. Unit must already be in \*\*Power Failure\*\*.

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Options\*\* and \*\*Start/Cancel\*\* together for ~1 second.

3\. Release quickly.

4\. The dishwasher now automatically runs through the \*\*Water/Service Test\*\*.



\- You can \*\*advance to the next step\*\* at any time by pressing \*\*Start/Cancel\*\* once.



\#### Monitoring Amp Draw



\- Use a multimeter with \*\*amp clamp\*\* attached.

\- Clamp around the \*\*incoming BLACK (hot) wire\*\*.

\- Monitor amps during each test step for expected ranges.



\#### Water/Service Test Steps – Front UI



| Step | Name / Action                     | Duration  | Expected Amps (approx)  | What Should Happen                                               |

|------|-----------------------------------|-----------|--------------------------|------------------------------------------------------------------|

| 1    | Fill \& Detergent Dispenser       | 60 s      | 0.1–0.05 A while filling | Unit fills; if dispenser was closed, door should open.          |

| 2    | Fill (continue)                   | 27 s      | 0.1–0.05 A while filling | Additional fill to proper level.                                |

| 3    | Wash \& Heat                       | 60 s      | 6–8 A                   | Wash motor + heater ON; washing with heat.                      |

| 4    | Quick Pause                       | 0.4 s     | 0                        | Brief pause in cycle.                                           |

| 5    | Wash \& Heat                       | 75 s      | 6–8 A                   | Washing resumes with heater ON.                                 |

| 6    | Wash \& Heat \& Detergent Dispenser| 60 s      | 6–8 A                   | Wash + heater + dispenser; rinse aid dispenser should activate. |

| 7    | Drain                             | 90 s      | 0.5–0.6 A               | Drain pump runs; water evacuates from tub.                      |

| 8    | Drain \& Drying                    | 90 s      | 6–7 A                   | Drain continues; heater energizes to simulate drying.           |

| 9    | End State                         | Done      | 0                        | Test complete.                                                   |



---



\### 3.4 Error Codes – Front UI



\- \*\*Clean, Heavy Wash, \& Normal Wash LEDs flashing\*\*  

&nbsp; - Likely \*\*switch or keypad issue\*\* (shorted or stuck button).



\- \*\*Clean \& High LEDs flashing\*\*  

&nbsp; - \*\*Open/shorted thermistor\*\*.



\- \*\*Start LED flashing\*\*  

&nbsp; - \*\*Door not sensed as closed\*\* (check door latch and door switch).



\- \*\*All LEDs ON\*\*  

&nbsp; - \*\*Power Failure\*\* state active.



---



\## 4. Top-Facing (Hidden) UI Models



These models have controls on the \*\*top edge\*\* of the door, hidden when the door is closed (Normal Wash, Wash Temp, Power Plus, Rinse Only, Energy Saver, etc.).



\### 4.1 Entering Power Failure (Top UI)



1\. Ensure power is on and door is closed.

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Normal Wash\*\* and \*\*Wash Temp\*\* together.

3\. Hold ~10 seconds until:

&nbsp;  - All LEDs illuminate, and  

&nbsp;  - \*\*“188”\*\* appears on the display.

4\. Release buttons.

5\. Unit is now in \*\*Power Failure\*\* for ~15 seconds.



Alternative: remove power for 30 seconds; after power returns, you again have ~15 seconds (Power Failure window) to enter test modes.



---



\### 4.2 Relay Test Mode (Top UI)



\#### Enter Relay Test Mode



1\. Unit must be in \*\*Power Failure\*\* (LEDs lit, “188” in display).

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Normal Wash\*\* and \*\*Rinse Only\*\* for ~1 second.

3\. Release quickly.

4\. Display shows \*\*“rt”\*\* (Relay Test).



\#### Exit Relay Test Mode



\- \*\*Press and hold\*\* \*\*Normal Wash\*\* + \*\*Rinse Only\*\* again for ~1 second, then release.

\- Returns to \*\*Power Failure\*\* state (then auto-cancels in ~15 seconds).



\#### Component Activation – Top UI Relay Test



| Component        | How to Toggle                                                | Display when ON | Display when OFF | Expected Behavior                                                |

|------------------|--------------------------------------------------------------|-----------------|------------------|------------------------------------------------------------------|

| Drain pump       | Use \*\*Top Rack\*\* key to toggle                               | `dP`            | `rt`             | Audible humming; any water in tub should drain.                 |

| Water Valve      | Use \*\*Power Plus\*\* key to toggle                             | `FL`            | `rt`             | Valve energizes; water flows into tub.                          |

| Wash pump (speed)| Use \*\*Quick Wash\*\* repeatedly to cycle test speeds           | see below       | —                | Wash motor speed changes per stage (RPM displayed).             |

| Heater           | Use \*\*Dry\*\* key to toggle heater                             | `H0`            | `rt`             | Heater energizes; 6–8 A draw. \*\*Do NOT leave energized.\*\*       |

| Soap Dispenser   | Use \*\*Normal Wash\*\* to toggle                                | `Sd`            | `rt`             | Within ~60 s, detergent cup should click/open.                  |

| Turbidity sensor | Use \*\*Wash Pressure\*\* to toggle                              | numeric voltage | `rt`             | Display shows turbidity voltage (decimal) when active.          |

| Fan              | Use \*\*Energy Saver\*\* to toggle                               | `Fn`            | `rt`             | Fan runs; audible fan noise.                                    |

| Thermistor       | Use \*\*Wash Temp\*\* to toggle                                  | temp in °F      | `rt`             | Display shows thermistor temperature in °F.                     |



\##### Wash Pump Speed Stages (Top UI Relay Test)



Each press of \*\*Quick Wash\*\* advances the wash pump speed:



| Press Count | Stage | Approx RPM | Display     | Notes                      |

|-------------|--------|-----------|-------------|----------------------------|

| 1           | 1      | ~2800     | `28–29`     | Lowest test speed          |

| 2           | 2      | ~2950     | `29–30`     |                            |

| 3           | 3      | ~3100     | `31–32`     |                            |

| 4           | 4      | ~3400     | `33–34`     | Highest test speed         |

| 5           | 5      | —         | returns to `rt` | Exits wash pump speed test |



---



\### 4.3 Water/Service Test Mode (Top UI)



\#### Enter Water/Service Test (Top UI)



1\. Unit must be in \*\*Power Failure\*\*.

2\. \*\*Press and hold\*\*:

&nbsp;  - \*\*Start/Cancel\*\* and \*\*Dry\*\* together for ~1 second.

3\. Release quickly.

4\. The dishwasher begins the \*\*Water/Service Test\*\* steps.



\- \*\*Start/Cancel\*\* can \*\*advance\*\* to the next step at any time.



\#### Water/Service Test Steps – Top UI



| # | Name / Action               | Duration | Motor RPM | Monitoring / Code Checks                            | Expected Behavior                                      |

|---|-----------------------------|----------|-----------|------------------------------------------------------|-------------------------------------------------------|

| 1 | Fill \& Detergent Dispense  | 60 s     | 0         | Fan damper; if stuck open → code `u0`               | 0.1–0.05 A fill; detergent cup should open if closed. |

| 2 | Fill                        | 27 s     | 0         | Turbidity sensor; if fault → code `tu`              | 0.1–0.05 A continue fill.                             |

| 3 | Wash / Heat / Det. Dispense| 45 s     | 3400      | Hall sensor; if fault → code `hS`                   | 6–8 A; washing with heater; dispenser may activate.   |

| 4 | Pause                       | 0.4 s    | 0         | —                                                    | Brief pause.                                          |

| 5 | Wash / Heat                | 75 s     | 2800      | —                                                    | 6–8 A; washing with heater.                           |

| 6 | Wash / Heat / Det. Dispense| 60 s     | 3400      | Thermistor; if fault → code `th`                    | 6–8 A; washing with heater; rinse aid should dispense.|

| 7 | Drain                       | 90 s     | 0         | Fan speed; if fault → code `uF`                     | 0.5–0.6 A; drain pump runs.                           |

| 8 | Dry                         | 90 s     | 0         | Fan damper closing; if fault → code `uC`            | 6–7 A; still draining, heater energized.              |

| 9 | End State                   | Done     | 0         | —                                                    | End state holds until door opened.                    |



---



\### 4.4 Error Codes – Top UI



Displayed codes (often with washing/drying/clean indicators lit):



\- \*\*ER\*\*  

&nbsp; - Stuck or shorted keypad button.  

&nbsp; - Typical fix: replace switch assembly; if assembly already replaced and issue persists, replace console assembly.



\- \*\*Th\*\*  

&nbsp; - \*\*Open/shorted thermistor\*\*.  

&nbsp; - Action: test wiring; if good, replace thermistor.



\- \*\*Tu\*\*  

&nbsp; - \*\*Open/shorted turbidity sensor\*\*.  

&nbsp; - Action: inspect for shorted/pinched wires; if good, replace turbidity sensor.



\- \*\*hS\*\*  

&nbsp; - \*\*Hall sensor / wash motor RPM error\*\*.  

&nbsp; - Control is not receiving proper RPM feedback from hall sensor.

&nbsp; - Action:

&nbsp;   1. Test wiring/harness between motor and control.

&nbsp;   2. If bad → replace harness.

&nbsp;   3. If harness good → replace wash motor.

&nbsp;   4. If error persists → replace main control board.



\- \*\*Uo / uO\*\*  

&nbsp; - \*\*Damper sensed as stuck open\*\*.

&nbsp; - Action: test wiring between vent fan and main control; if good, replace vent fan. If still fails, replace main control board.



\- \*\*uC\*\*  

&nbsp; - \*\*Damper sensed as stuck closed\*\*.

&nbsp; - Same wiring and vent/main control checks as Uo/uO.



\- \*\*uF\*\*  

&nbsp; - \*\*Fan not rotating correctly (speed error)\*\*.

&nbsp; - Same wiring and vent/main control checks as Uo/uO.



\- \*\*All LEDs on + “188” in display\*\*  

&nbsp; - \*\*Power Failure\*\* active.



\- \*\*“CLOSE DOOR” / “CD” message\*\*  

&nbsp; - Door not latched. Close and latch door to continue.



---



\### 4.5 Component Electrical Tests (Top UI Platform)



> All tests below assume \*\*door closed and latched\*\* and appropriate safety precautions.



| Component         | Check / Reading                           | Notes                          |

|-------------------|--------------------------------------------|--------------------------------|

| Vent Fan wiring   | RED to neutral (BLACK): ~12 VDC           | Fan supply                     |

|                   | BLACK to WHITE (optical sensor): ~5 VDC   | Sensor supply                  |

|                   | RED–WHITE / YELLOW–BLACK: logic/tach lines (no Ohms test) | Sensor \& tach lines          |

| Detergent dispenser | ~2.38 kΩ                             | Coil resistance                |

| Water valve       | ~1.126 kΩ, ~0.04 A at 120 VAC             | Solenoid valve                 |

| Drain pump        | 22–30 Ω; ~0.5 A at 120 VAC                | Drain motor                    |

| Heater            | 12–16 Ω; ~7 A at 120 VAC                  | Tank/heating element           |

| Wash pump         | ~0.75 A at 120 VAC                        | Main circulation pump          |

