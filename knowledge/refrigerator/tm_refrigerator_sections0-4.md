---
title: Top-Mount Refrigerator – Sections 0–4
product_type: refrigerator
cabinet_style: top-mount
last_updated: 2025-03-XX
---
### 4B – Content to paste under the front‑matter

```markdown
# Section 0 – Identifying Your Appliance Type (Cabinet Style)
Before using any troubleshooting flow, confirm what **type of appliance** you have. Many steps (panel locations, airflow paths, defrost routing) depend on the cabinet style.
This guide will eventually support:
- Top‑Mount (TM)
- Side‑by‑Side (SxS)
- French‑Door Bottom‑Mount (FDBM)
- Upright Freezer / Upright Refrigerator
## 0.1 Control Types (applies to all cabinet styles)
Separately from cabinet style, your unit may have one of these **control types**:
- **Mechanical thermostat dial**
- Simple knob inside labeled something like:
- OFF / 1–5 / 1–7 / “Cold–Colder”.
- **Electronic control with digital display panel or LED indicator for setpoint**
- Buttons plus a small screen or LED bar that shows:
- Temperature setting (°F/°C), or
- A level number (e.g., 1–7).
The cabinet style (TM / SxS / FDBM / Upright) and control type (mechanical vs digital display/LED) are independent. Later troubleshooting flows will specify both when needed.
---
## 0.2 Top‑Mount Refrigerator (TM)
Plain meaning:
The freezer is on top; the refrigerator (fresh‑food section) is below.
How to tell:
- You have two main doors, one above the other:
- Upper door → opens into the freezer.
- Lower door → opens into the refrigerator.
- There is no tall, side‑by‑side vertical split between freezer and fridge.
- There is no large freezer drawer at the very bottom.
If this matches, your unit is a:
**Top‑Mount (TM) Refrigerator**
(Most of the current troubleshooting content focuses on this type.)
---
## 0.3 Side‑by‑Side Refrigerator (SxS)
Plain meaning:
The freezer and refrigerator compartments are full‑height sections side‑by‑side.
How to tell:
- You have two tall doors next to each other, both from near the top to near the bottom:
- Left door usually opens into the freezer.
- Right door opens into the refrigerator.
- Often features:
- An ice/water dispenser in the freezer door.
- Narrower shelves compared to a top‑mount.
You do not have one door on top and another door on the bottom, and you do not have a big bottom freezer drawer.
If this matches, your unit is a:
**Side‑by‑Side (SxS) Refrigerator**
---
## 0.4 French‑Door Bottom‑Mount Refrigerator (FDBM)
Plain meaning:
Two doors at the top for the refrigerator; the freezer is a bottom drawer.
How to tell:
- At the top, you have two smaller doors that meet in the middle:
- When both are open, you see a wide refrigerator (fresh‑food) compartment.
- At the bottom, you have one or two large pull‑out freezer drawers.
- Often includes:
- Internal or in‑door water/ice dispenser.
- Wide fresh‑food shelves spanning both doors.
You do not have a tall left/right split (that’s SxS), and the freezer is not behind the upper door (that’s TM).
If this matches, your unit is a:
**French‑Door Bottom‑Mount (FDBM) Refrigerator**
---
## 0.5 Upright Freezer / Upright Refrigerator (Single‑Compartment Upright)
Plain meaning:
A tall unit that is all freezer or all refrigerator inside.
How to tell:
- The inside is one temperature zone:
- Either all frozen storage (upright freezer), or
- All fresh‑food storage (upright refrigerator).
- Usually has:
- One tall door, or
- Two doors but without a clearly separated top freezer + bottom fridge.
You do not have one compartment for freezer and a separate one for refrigerator in the same cabinet.
If this matches, your unit is an:
**Upright Freezer** or **Upright Refrigerator**
---
## 0.6 Quick “What Type Do I Have?” Decision Guide
1. When I open the **top door**, do I see the **freezer**, and when I open the **lower door**, do I see the **refrigerator**?
- YES → **Top‑Mount (TM)**.
- NO → go to 2.
2. Do I have two tall doors side‑by‑side (left freezer, right fridge)?
- YES → **Side‑by‑Side (SxS)**.
- NO → go to 3.
3. Do I have two smaller French doors at the top and a big pull‑out freezer drawer at the bottom?
- YES → **French‑Door Bottom‑Mount (FDBM)**.
- NO → go to 4.
4. Is my appliance all freezer or all refrigerator inside (a single temperature), usually with one tall door?
- YES → **Upright Freezer** or **Upright Refrigerator**.
If none of these fit, it may be a specialty or compact design that will need its own notes.
---
# Section 1 – Top‑Mount (TM) Refrigerator – Overview & Controls
This section describes the basic layout and controls of a **Top‑Mount (TM)** refrigerator to support later troubleshooting.
## 1.1 Cabinet Style – Top‑Mount (TM)
- Freezer compartment: behind the **upper door**.
- Fresh‑Food (refrigerator) compartment: behind the **lower door**.
- No full‑height side‑by‑side split; no large bottom freezer drawer.
See Section 0 – Identifying Your Appliance Type for more detail.
---
## 1.2 Main Components (TM, Single‑Evaporator)
Most traditional TM units share this layout:
- **Freezer (Top Compartment)**
- Evaporator coil (behind rear freezer panel).
- Evaporator fan motor and fan blade.
- Icemaker (if equipped) mounted on a side wall.
- Air ducts to/from the fresh‑food section.
- **Fresh‑Food (Lower Compartment)**
- Adjustable shelves.
- Crisper drawers and humidity controls.
- Air inlet vents (usually upper rear, coming from freezer).
- Air return vents (often lower rear/side areas).
- **Machine Compartment (Rear Bottom)**
- Compressor (black metal ball).
- Condenser:
- External finned coil with a fan, or
- Static condenser tubing inside cabinet walls (no fan).
- Condenser fan motor (if external coil type).
- Drain pan (for defrost water).
- Drain tube from cabinet into drain pan.
---
## 1.3 Control Types on TM Units
TM refrigerators can have either mechanical or electronic controls:
- **Mechanical Thermostat Dial (Cold Control)**
- Simple knob inside FF section or top control housing:
- Markings like OFF / 1–5 / 1–7 / Cold–Colder.
- Directly opens/closes electrical contacts based on cabinet temperature.
- **Electronic Control with Digital Display Panel or LED Indicator for Setpoint**
- Buttons or touch pads.
- A small digital display panel or LED indicator showing:
- Temperature setting (°F/°C), or
- A level number (e.g., 1–7).
- Internal sensor(s) and electronic board decide compressor/fan operation.
Important:
Much of the **mechanical** troubleshooting logic also applies conceptually to **electronic** controls, but the test procedures for the control itself will differ. Later, model‑specific flows will distinguish between:
- TM + mechanical thermostat + mechanical defrost timer
- TM + electronic control + electronic defrost
---
## 1.4 Shared Systems Affecting Most Symptoms
The following subsystems appear in many TM troubleshooting paths:
- **Refrigeration (sealed system)**
- Compressor, condenser, capillary tube, evaporator.
- Problems: low charge, restriction, weak compressor.
- **Defrost System**
- Defrost heater.
- Defrost thermostat / bi‑metal.
- Defrost timer (mechanical) or electronic defrost control.
- Defrost drain trough, drain hole, drain tube, and drain pan.
- **Airflow System**
- Evaporator fan in freezer.
- Air ducts between freezer and FF section.
- Damper/air door (if used).
- Condenser fan (for external condenser coils).
- **Cabinet & Seals**
- Freezer and FF door gaskets.
- Door alignment and closure.
- User loading (blocking vents, holding doors open).
The symptom‑based sections (2, 3, 4, and later 5+) reference these systems.
---
# Section 2 – Top‑Mount (TM) – Symptom A: NO COOL (Both Sections Warm)
## 2.1 Scope & Entry Conditions
This section applies to:
- **Cabinet:** Top‑Mount (TM).
- **Symptom A – NO COOL:**
- Freezer: warm or only slightly cool, not freezing anything solid.
- Fresh‑Food: warm, not keeping food safe.
- **Controls:**
- Primarily written for mechanical thermostat + mechanical defrost timer, but many checks (power, compressor, fan, condenser, frost pattern) also apply to electronic TM units.
---
## 2.2 Safety Reminder
- **Unplug the refrigerator** before:
- Removing rear lower machine compartment cover.
- Removing freezer rear (evaporator) panel.
- Touching internal wiring or components.
- **Plug in only** when:
- All internal panels are in place, and
- You are only listening/observing (compressor, fans, airflow).
---
## 2.3 Step 1 – Basic Power & Settings
1. **Check interior light**
- Open FF door:
- If light **does not** turn on → suspect power/outlet/circuit issue.
- If light **does** turn on → power is reaching the fridge.
2. **Check outlet power (if light off)**
- Confirm fridge is plugged in fully.
- If safe and equipped, measure outlet:
- Expected ~120 VAC.
- If outlet is dead or low voltage, reset breaker or call an electrician.
3. **Check cold control / temperature setting**
- If mechanical:
- Make sure dial is **not at OFF**.
- Set to a mid‑high or **Coldest** setting.
- If electronic:
- Confirm the **digital display panel or LED indicator** is on and set to a cold setting (not “off” or a very warm setpoint).
4. **Listen for operation**
- After a few minutes:
- Do you hear **compressor** and/or **fans** start?
If **no sign of life** even with good outlet power and proper settings, internal power/control troubleshooting is required (wiring, door switch, thermostat/electronic board).
---
## 2.4 Step 2 – Breaker & Internal Power (If Unit is “Dead”)
If **no lights, no fans, no sounds**:
1. Check **circuit breaker** feeding the outlet:
- Reset if tripped; if it trips repeatedly, call an electrician.
2. If outlet is good but fridge is dead:
- Possible:
- Open power cord.
- Faulty door switch (light and controls never powered).
- Failed cold control (mechanical) or failed electronic board.
- Technician should:
- Verify voltage at the internal terminal block.
- Check continuity of cord, door switch, and control.
If interior light works, skip to **Step 3**.
---
## 2.5 Step 3 – Compressor & Condenser Fan Status
With fridge **plugged in** and control set to a cold setting:
1. Wait a few minutes.
2. Feel and listen near the **compressor (black metal ball)** at the rear bottom:
- Humming/vibration?
- Compressor getting warm?
3. Check for:
- **Condenser fan** running (if external condenser type).
- **Warm air** from condenser area (rear or front kickplate).
**Branch A – Compressor NOT running**
- If no hum, no vibration, compressor cool:
- Check:
- Cold control setting.
- Start relay/overload.
- Voltage at compressor terminals.
- Possible outcomes:
- Bad **start relay/overload** → replace.
- **Locked or failed compressor** (correct voltage but no start) → sealed‑system service (often not economical on older basic units).
**Branch B – Compressor running, but no cooling**
- If compressor runs but both sections remain warm:
- Check:
- Condenser fan (if present) is running.
- Condenser coils not heavily clogged with dust.
- Then check evaporator frost pattern (see **Section 3.4 – Frost Pattern Cases**).
- Possible outcomes:
- Defrost failure (coil buried in ice).
- Sealed‑system issue (very weak frost, small area only).
- Severe condenser airflow problem.
---
## 2.6 Step 4 – Thermostat & Defrost Timer (Mechanical Control Models)
For **mechanical thermostat + mechanical defrost timer**:
### 2.6.1 Cold Control (Thermostat) Check
- Turn dial from **warm → cold**:
- Listen/feel for a faint **click** when it turns “on.”
- Then from **cold → warm/OFF**:
- Listen/feel for a click when it turns “off.”
If **no click** anywhere:
- Likely **failed cold control** (contacts stuck open or mechanism broken).
- Tech tests:
- Check continuity at thermostat terminals.
- Temporarily jumper (bypass) thermostat to see if compressor starts.
### 2.6.2 Defrost Timer Check
- Locate **mechanical defrost timer**:
- Often accessible via a small hole in the FF control housing.
- Sometimes behind the front kickplate or in rear machine compartment.
- With fridge running and thermostat calling for cooling:
- Insert flat screwdriver into timer dial.
- Turn **clockwise slowly** until you hear a distinct **clack/snap**.
- Observe:
- Does compressor and fan **start or stop** when it clacks?
- If timer was stuck in defrost and now returns to “run,” cooling may resume.
- If timer never switches or does not affect compressor/fan, further diagnosis is needed (timer, wiring, or control board on electronic models).
---
## 2.7 Step 5 – When to Suspect Defrost or Sealed System
If:
- Power is good,
- Controls appear to call for cooling,
- Compressor runs,
- Fans run, but:
There is still **no cooling** in both compartments, the key discriminator is the **evaporator frost pattern** (see **Section 3.4 – Frost Pattern Cases**):
- **Heavy, solid ice block (snowball)** on evaporator → defrost failure.
- **Thin, even frost** → normal refrigerant flow; look at airflow and door/gasket issues.
- **Small patch of frost only near inlet, rest bare** → sealed‑system problem.
---
# Section 3 – Top‑Mount (TM) – Symptom B & C: Freezer Cold or Slightly Cool, Fresh Food Warm
This section combines:
- **Symptom B – Freezer clearly cold/OK, FF warm.**
- **Symptom C – Freezer only slightly cool (20–32°F), FF warm.**
---
## 3.1 Scope
Applies to Top‑Mount refrigerators when:
- **Freezer** is:
- Either **properly freezing** (about 0–10°F), or
- **Slightly cool / partially freezing** (20–32°F; ice soft, ice cream soft).
- **Fresh‑Food section** is **too warm** (>45°F).
Controls may be mechanical or electronic; airflow and defrost logic are largely the same.
---
## 3.2 Step 1 – Confirm Freezer Temperature & Branch
Use a simple fridge/freezer thermometer:
1. Place in **freezer center**, not against walls.
2. Close door for **20–30 minutes**, then read.
Based on reading:
- **Branch B (Freezer COLD/OK):**
- Freezer around **0–10°F (–18 to –12°C)**.
- Food remains solidly frozen.
- → Symptom B: “Freezer OK, FF warm.”
- **Branch C (Freezer SLIGHTLY COOL):**
- Freezer around **20–32°F (–6 to 0°C)**.
- Food only partly frozen; ice cubes soft or slow to form.
- → Symptom C: “Freezer weak, FF warm.”
The diagnostic steps below apply to **both**, with special attention to sealed‑system vs airflow issues when freezer is only slightly cool.
---
## 3.3 Step 2 – Evaporator Fan & Airflow Checks
### 3.3.1 Evaporator Fan Operation
With unit running (compressor on):
1. Open freezer door.
2. Locate the **freezer door switch** and press it in (simulating closed door).
3. Listen and feel:
- Do you hear a **fan** running?
- Do you feel **air movement** from the rear/top?
If **NO fan sound or airflow**:
- Likely **failed evaporator fan**, no power to fan, or fan blocked by ice/debris.
- Freezer may get somewhat cool near coil but:
- Poor circulation,
- Fresh‑food section warms.
- Action:
- Tech to test/replace fan motor and check for ice/jamming and wiring/door switch issues.
If **YES, fan runs and air moves**:
- Proceed to check airflow into FF.
---
### 3.3.2 Airflow into Fresh‑Food Section
1. With compressor and evap fan running:
- Open FF door.
- Feel at **upper rear FF vents**, directly under freezer floor.
2. Do you feel **cool airflow** entering FF?
If **NO or very weak airflow**:
- Possible:
- Air supply duct **blocked** (ice or food).
- Mechanical **damper stuck closed** (on models that have one).
- Proceed to frost‑pattern and duct checks (**3.4**).
If **YES, good airflow but FF still warm**:
- If freezer is **normal cold (0–10°F)**:
- Suspect:
- Long door openings / usage,
- FF door gasket leaks,
- Thermostat/control setting or sensor placement.
- If freezer is only **slightly cool (20–32°F)**:
- Airflow alone is not enough; system may be weak:
- See sealed‑system indications below (**3.4**).
---
## 3.4 Step 3 – Evaporator Frost Pattern & Defrost vs Sealed System
This is a **shared diagnostic module** used by multiple symptom branches.
> **Safety:** Unplug the refrigerator before removing any internal panels.
### 3.4.1 Access Evaporator & Observe Frost Pattern
1. **Unplug** refrigerator.
2. Remove food and shelves from freezer as needed.
3. Remove the **rear freezer panel (evaporator cover)**:
- Remove all screws.
- Carefully pull panel forward (watch for any attached wires).
4. Inspect evaporator coil:
- If heavily iced and you can’t see the coil, note this.
5. If necessary:
- Temporarily reinstall panel loosely, plug in, and run 15–30 minutes, then unplug and recheck frost pattern.
---
### 3.4.2 Frost Pattern Cases
**Case A – Normal, Even Frost**
- Thin, **even frost** covering most or all of the evaporator coil.
- Indication:
- Refrigerant flow is normal.
- System is producing capacity.
If FF is warm:
- Focus on **airflow paths**, **door gaskets**, **usage habits**, or **control calibration**.
- If condensation appears only in FF (ceiling/top and under crispers) with **no freezer ice**, also see **Section 5 – FF Condensation & Light Stuck ON** (future section).
---
**Case B – Heavy Ice / Snow Block (Air Passages Blocked)**
- Evaporator coil is buried in **thick frost/ice (“snowball”)**.
- Air passages around coil are blocked.
Indication:
- **Defrost system failure** (heater, defrost thermostat/bi‑metal, or defrost timer/control).
Next:
- Perform manual defrost and drain clearing (**Section 4** for drain; another defrost‑system section for heater/bi‑metal/timer if present).
- Test defrost heater and bi‑metal for continuity.
- Test/advance defrost timer or electronic defrost control.
- Replace failed components.
---
**Case C – Partial Frost Only at Inlet**
- Only a **small patch of frost** where the capillary enters the coil.
- Most of coil is bare and room‑temperature.
Indication:
- **Sealed‑system issue**:
- Low charge,
- Partial restriction,
- Weak/inefficient compressor.
Next:
- Requires **EPA‑certified sealed‑system technician**.
- On older/basic units, repair may not be cost‑effective.
---
## 3.5 Step 4 – Condenser & Environment
### 3.5.1 Condenser Type & Fan (External Coil Models)
1. With rear lower cover removed:
- If you see **finned condenser coils and a fan** → external condenser.
- If no coils/fan, condenser is embedded in cabinet walls.
2. For external condenser:
- With unit running:
- Check if **condenser fan** is running.
- Inspect coils for **heavy lint/dust**.
- If **fan not running**:
- Replace **condenser fan motor**.
- If coils **very dirty**:
- Unplug and clean thoroughly (brush + vacuum).
---
### 3.5.2 Cabinet Ventilation & Ambient (Static Condenser Models)
- Ensure:
- Adequate clearance at **back and sides**.
- Not installed next to **ovens/ranges** or in **very hot rooms**.
- Poor ventilation + high ambient can cause:
- Freezer only slightly cool,
- FF warm.
---
## 3.6 Step 5 – Door Gaskets, Loading & Usage
- Inspect **FF and freezer door gaskets**:
- Rips, tears, cracks, hardened sections, pulled‑away corners.
- Run your hand all the way around, gently pulling gasket outward to look for:
- Sections pulled out of their channel,
- Warped or twisted areas.
- Use **paper test** around whole perimeter for weak spots.
- Check **door closure**:
- Overfilled door bins or shelves pushing against interior.
- Doors bouncing open or not sealing.
- Misaligned crispers/shelves that can rub and prevent full closure.
- Check **loading**:
- Freezer packed full with items pressed against the **back wall or vents** can cause local frost/ice and poor airflow.
- FF top shelf overloaded right under the **ceiling vent** can disrupt air distribution and promote condensation.
- Consider **usage**:
- Frequent or prolonged door opening.
- Very hot food placed in FF or freezer.
- Many uncovered liquids or open containers on the top shelf.
If gasket, loading, or usage issues are found:
- Repair/replace gaskets as needed.
- Clear vents and keep 1–2 inches of clearance at back and around vents.
- Correct loading and habits.
- Recheck temps and frost behavior after 24 hours of normal use.
---
## 3.7 Summary: B vs C Interpretation
**Symptom B – Freezer cold/OK (0–10°F), FF warm:**
- Evap frost **normal**, fan runs:
- Focus on **air duct/damper**, **vent blockages**, **door gaskets**, **loading**, **usage**.
- Evap **buried in ice**:
- **Defrost failure** → use defrost diagnostics and **Section 4** for drain issues.
- If FF has **ceiling condensation + puddle under crispers** but **no freezer ice**, see **Section 5 – FF Condensation & Light Stuck ON** (future).
**Symptom C – Freezer slightly cool (20–32°F), FF warm:**
- Evap frost **normal** and all fans/vents OK, condenser clean:
- Likely **marginal sealed‑system** or **control calibration** issue → technician.
- Evap **partial frost only**:
- **Definite sealed‑system issue**.
- Evap **buried in ice**:
- **Defrost failure**; after manual defrost and defrost repair, temperatures may return to normal.
---
# Section 4 – Top‑Mount (TM) – Defrost Drain Blockage & Leak Repair (with Icemaker)
## 4.1 Scope
This procedure applies to:
- **Cabinet style:** Top‑Mount (TM) refrigerator
- Freezer compartment behind the upper door,
- Fresh‑food (refrigerator) compartment behind the lower door.
- **Water system:**
- Icemaker in the freezer.
- Water line connected and turned ON at the rear of the unit.
- **Controls:**
- Can be mechanical thermostat dial or
- Electronic control with digital display panel or LED indicator for setpoint.
(Control type does not change the drain layout.)
### Typical Symptoms (Defrost Drain Blockage)
**At least one** of the following should be present before suspecting a defrost drain issue:
- Ice or water on the **freezer floor**, especially toward the **back center**.
- Ice/water at the **base of the evaporator cover** inside the freezer.
- Repeated puddles or a floating sheet of ice **under the crisper drawers** in the FF section, **combined with** evidence of ice/water in the freezer as above.
If you have **only FF condensation** on the ceiling/top shelf and a puddle under crispers, **with no ice/water in the freezer**, first see the **FF condensation / light‑stuck‑on branch (Section 5)** when available.
---
## 4.2 Safety
- **Unplug the refrigerator** from the wall outlet before:
- Removing the freezer rear (evaporator) panel.
- Removing the rear lower machine‑compartment cover.
- Disconnecting or handling the drain tube.
- Keep towels or a shallow pan handy:
- When the drain tube is released, **trapped water from inside the cabinet may suddenly dump** into the base.
- If using a **hair dryer**:
- Use **LOW or warm** setting only.
- Keep the airflow **moving**; never hold it on one spot.
- Avoid prolonged direct heat on **plastic liners, shelves, or gaskets**.
- Never use **open flame** or **sharp tools** to chip ice.
---
## 4.3 Overview of the Defrost Drain System
During defrost:
1. Frost on the **evaporator coil** in the freezer is melted by the defrost heater.
2. Melted water runs into a **drain trough** under the evaporator.
3. Water flows through a small **drain hole** into a **drain tube** that goes down through the cabinet.
4. The drain tube empties into a **drain pan** located in the rear machine compartment, near or above the **compressor (black metal ball)**.
5. Water in the pan evaporates with heat from the compressor and condenser.
If the **drain hole or tube is blocked** (ice, debris, slime):
- Water backs up, spills onto the **freezer floor**, then into the **fresh‑food section**, often ending under the crispers.
---
## 4.4 Step 1 – Initial Confirmation (Symptom Check)
1. **Freezer Section:**
- Look at the **freezer floor**, especially toward the **back center**:
- Do you see a **sheet of ice** or obvious water/ice buildup there?
2. **Fresh‑Food Section:**
- Remove the **crisper drawers**.
- Look at the **very bottom** of the FF compartment:
- Is there a **puddle of water** and/or a **sheet of ice** under the crispers?
If you see **ice on the freezer floor** and **water/ice under the crispers**, a blocked defrost drain is very likely. Continue below.
> If there is **no ice/water in the freezer**, and only moisture on the FF ceiling/top shelf plus a puddle under the crispers, consider **FF light‑on condensation** (future Section 5) before doing drain work.
---
## 4.5 Step 2 – Remove Icemaker (If It Blocks the Freezer Back Panel)
On many top‑mounts, the icemaker partially covers the freezer back panel or its screws and must be removed first.
1. **Unplug the refrigerator** from the wall outlet.
2. Empty the freezer area around the icemaker:
- Remove the ice bin and any food directly below/around the icemaker.
3. Locate icemaker mounting screws:
- Typically:
- Two screws at the top/front or top/side of the icemaker.
- Sometimes a lower screw or hooked tab.
4. Loosen/remove mounting screws:
- Support the icemaker with one hand.
- Loosen (or remove) the upper screws; many models use keyhole slots so you can lift the icemaker off.
5. Disconnect icemaker harness:
- Gently pull the icemaker forward to reach the wiring connector on the side/back wall.
- Unplug the white plastic wiring harness connector from the wall.
6. Remove the icemaker:
- Lift it off the mounting screws/brackets.
- Set it aside safely.
---
## 4.6 Step 3 – Remove Freezer Rear (Evaporator) Panel
1. With the freezer compartment empty and the unit still **unplugged**:
- Locate screws around the **perimeter of the rear freezer panel** and near any vent openings.
2. Remove all panel screws.
3. Carefully pull the **rear panel** forward and out:
- Watch for any wiring to lights or sensors attached to the panel (if present).
4. You should now see:
- The **evaporator coil** (aluminum fins/tubing).
- The **drain trough** at the bottom of that coil.
---
## 4.7 Step 4 – Clear Ice at the Drain Trough and Drain Hole (From Above)
1. Identify the **drain trough**:
- A shallow channel directly under the evaporator coil.
- There will be a small **drain hole** in the trough, usually in the center.
2. Common condition:
- This entire area is **packed with ice**, and the drain hole is **not visible**.
3. Melt the ice:
- Use **warm water** (cup, squeeze bottle, or turkey baster) poured over the ice in the **trough**.
- Optionally, use a **hair dryer on LOW**, kept moving, aimed at:
- The **metal evaporator tubing and fins**, and
- The **drain trough and immediate area**.
- Avoid concentrating heat on plastic walls.
4. Continue until:
- The **trough is clear** of solid ice, and
- The **drain hole is fully visible and open** from above.
> Note: At this stage, the tube farther down may still be blocked. The next steps address that.
---
## 4.8 Step 5 – Access the Drain Tube and Pan from the Rear
1. Confirm the refrigerator is still **unplugged**.
2. Carefully pull the refrigerator **away from the wall** far enough to work behind it.
3. At the **bottom rear**, remove the **rear lower cover**:
- This may be a cardboard/fiberboard or metal panel.
- Remove all screws (typically 3–14) and take off the cover.
4. You should now see:
- The **compressor (black metal ball)**.
- A **shallow drain pan** made of plastic or metal near/above the compressor.
- A **drain tube** coming down from the cabinet and connecting to or hanging over the pan.
---
## 4.9 Step 6 – Release and Clean the Drain Tube
1. Identify the **drain tube**:
- A separate plastic or rubber tube exiting the cabinet and connecting to the drain pan.
- Often held in place by a **locking tab** or friction fit.
2. Place towels or a shallow container under the connection:
- **Important:** When the tube is released, **trapped water from inside the cabinet may suddenly dump into the base**.
3. Release the tube from the pan:
- Press the locking tab (if present) and gently **pull the tube upward/out** of the pan connection.
- Do not force at odd angles; keep the pull in line with the tube.
4. Expect:
- A **rush of water** from the tube and cabinet into the base.
- Allow this water to drain onto towels or a catch pan.
5. Clean the tube:
- Take the tube to a sink or use a bucket.
- Flush **warm (not boiling) water** through the tube.
- If available, gently run a **soft, flexible tool** (e.g., long zip tie, pipe cleaner) through it to clear debris/slime.
- Do **not** use sharp objects that could puncture the tube.
- Confirm the tube is clear by **blowing through it**:
- You should feel very little resistance.
---
## 4.10 Step 7 – Reinstall Tube and Verify Full Drain Path
1. Reinstall the **drain tube** into the **drain pan**:
- Insert the tube end back into its hole/seat in the pan.
- Press firmly until any locking tab **clicks/engages**.
- Ensure the tube is fully seated and not kinked.
2. Go back to the **freezer drain trough**:
- Ensure the trough and drain hole are **completely free** of solid ice.
3. Test the entire drain path:
- With the refrigerator still **unplugged**:
- Pour a **small amount of warm water** (a cup or less) into the **drain trough** in the freezer, directly around the drain hole.
- Observe the **drain pan at the back**:
- You should see water **dripping or flowing from the tube into the pan**.
4. If water flows from freezer trough → tube → pan:
- The **defrost drain system is now cleared and restored**.
---
## 4.11 Step 8 – Reassembly and Restart
1. **Inside Freezer:**
- Remove any remaining loose ice.
- Reinstall the **rear freezer (evaporator) panel**:
- Align and screw it back into place.
2. **Reinstall Icemaker:**
- Plug the **icemaker harness connector** back into the wall connector.
- Hang the icemaker on its mounting brackets/keyholes and **tighten mounting screws**.
- Ensure the **fill cup** aligns properly under the **fill tube** coming from the back wall.
- Reinstall the **ice bin** and any shelves/baskets.
3. **Rear of Refrigerator:**
- Confirm the **drain tube** is fully seated and locked in the **drain pan**.
- Reinstall the **rear lower cover** and secure all screws.
4. **Move and Plug In:**
- Gently slide the refrigerator back into its normal position, maintaining recommended wall clearance.
- Plug the refrigerator back into the wall outlet.
- Confirm:
- Interior lights turn on.
- After a few minutes, the **compressor and fans** start.
5. **Monitor:**
- Over the next **24–48 hours**:
- Check the **freezer floor** for new ice or water.
- Check under the **crispers** in the fresh‑food section for puddles.
- If the drain repair was successful, **no new water** should accumulate, and any previous ice/water will gradually disappear as the system runs normally.
---
## 4.12 Notes and Common Follow‑Ups
- If the **same drain repeatedly ices up**:
- Check for:
- **Door gasket leaks** (warm air intrusion creating extra frost).
- **Doors not closing fully** (items blocking closure).
- Very **humid environment** or heavy door usage.
- If the **drain pan cracks** or the **drain tube fitting is damaged**, replacement of the pan or tube assembly may be required.
- If you also have **heavy frost** or more complex cooling issues, use the separate **Top‑Mount Cooling / Defrost Troubleshooting** sections (**2 and 3**) for further diagnosis.
- If there is **no ice/water in the freezer** and moisture is limited to FF ceiling/top shelf plus puddle under crispers, suspect **FF light staying on / door sensor issue** (planned **Section 5**), not a defrost drain blockage.
---
**End of updated Sections 0–4.**
```
