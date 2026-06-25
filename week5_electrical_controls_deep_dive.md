# Week 5 – Electrical Controls Deep Dive
### HVAC Micro-Series | Production Script & Visual Plan
**Target Length:** 10–12 minutes | **Audience:** Multifamily Maintenance Technicians (Entry–Mid Level)

---

## Production Overview

| Property | Detail |
|---|---|
| Series | 8-Week HVAC Micro-Series |
| Module | Week 5 of 8 |
| Runtime Target | 10–12 minutes |
| Prerequisite | Weeks 1–4 |
| Style | Live-action instructor + cinematic B-roll + UI/diagram overlays |
| Music | Light modern instrumental underscore throughout |

---

## Learning Objectives

By the end of this video, a technician will be able to:
1. Trace a control signal from thermostat to air handler to outdoor unit using a wiring diagram.
2. Test a control board fuse, transformer output, and individual relay outputs with a multimeter.
3. Identify the difference between a hardwired thermostat system and a communicating thermostat system, and know the diagnostic implications of each.

---

---

## SEGMENT 1 – Cold Open & Hook
**Time Range: 0:00 – 0:50**

---

### Voiceover / On-Camera Script:

*(Instructor standing beside an open air handler with a wiring diagram on the wall behind them.)*

"Week 1 taught you to check for 24 volts at R, C, Y, and G on the terminal strip. But what happens when those readings don't match what you expect? What if R is live but Y is dead even though the thermostat is calling? What if G is energized but the blower won't start?

That's where we go today — inside the control circuit. We're going to trace a signal from the thermostat all the way out to the condenser, understand every component it passes through, and give you the tools to find exactly where a signal dies.

Control problems are some of the most common call-backs in multifamily HVAC, and they're almost always solvable with a meter and a wiring diagram."

---

### Visual / Camera Notes:

- **Opening shot:** ECU of wiring diagram with voltage meter probes in frame. Pull back to instructor.
- **Overlay:** *"Week 5: Electrical Controls Deep Dive."*
- **B-roll montage:** Control board close-up, thermostat display, transformer, terminal strip.
- **Transition:** Dissolve to instructor at a control board laid on a training bench.

---

---

## SEGMENT 2 – The Control Circuit: An End-to-End Map
**Time Range: 0:50 – 2:30**

---

### Voiceover / On-Camera Script:

*(Instructor at a training bench with a simplified wiring diagram displayed on screen.)*

"Let's map the control circuit from start to finish so you know exactly what you're tracing.

The circuit starts at the **transformer** inside the air handler. The transformer steps down line voltage — 120V or 240V — to 24 volts AC. The hot side of that 24V output goes to the R terminal. The return path goes to the C terminal — common. This is the power supply for the entire low-voltage control circuit.

From R, the power is always available at the thermostat. When the thermostat calls for cooling, it closes an internal switch and puts 24 volts onto the Y wire. That Y signal travels back to the air handler's control board.

On the control board, the Y signal energizes a relay or triggers logic on the board. That same Y signal — or a board-generated output — gets sent out on the Y wire going to the outdoor unit. At the outdoor unit, those 24 volts energize the contactor coil, which we covered in Week 1.

Simultaneously, the thermostat's G signal energizes the indoor blower relay. If the board has a variable-speed blower, it may receive a 0–10V analog signal instead, but the concept is the same — a signal from the thermostat triggers the blower.

That's the entire circuit. Four wires — R, C, Y, G — and a signal that travels from thermostat to air handler to outdoor unit. Every control problem you'll encounter lives somewhere on this path."

---

### Visual / Camera Notes:

- **Camera framing:** MCU instructor; wiring diagram displayed behind or on screen.
- **UI overlays — Wiring Path Animation:**
  - Animated diagram traces the signal path: transformer → R terminal → thermostat → Y signal returns → control board → Y to outdoor contactor.
  - Color-coded wiring: red (R/power), yellow (Y/cooling call), green (G/fan), black/blue (C/common).
  - Path pulses/lights up as each segment is named.
  - Component labels appear: Transformer, Terminal Strip, Control Board, Contactor Coil.
- **B-roll:** ECU of transformer on air handler. ECU of thermostat sending signal (wires at thermostat base). ECU of terminal strip inside air handler.
- **Transition:** Cut to instructor with multimeter — ready to test the transformer.

---

---

## SEGMENT 3 – Testing the Transformer and Fuses
**Time Range: 2:30 – 4:00**

---

### Voiceover / On-Camera Script:

*(Instructor at open air handler panel, multimeter in hand.)*

"When the whole control circuit is dead — no thermostat response, no 24V at R-to-C — the transformer or a fuse protecting it is almost always the cause.

Finding the transformer is step one. It's typically mounted on the control board or nearby — a small square or rectangular component with two sets of wires: primary and secondary.

Check line voltage at the primary first. You should see 120V or 240V depending on the system. If line voltage is missing, you have a power problem — breaker or disconnect, not a transformer issue.

If line voltage is present, check across the secondary output terminals. You should see 24 volts AC. No 24V on the secondary with line voltage on the primary — the transformer has failed. Replace it.

Now — most control circuits include a small fuse, usually a 3-amp or 5-amp automotive-style fuse, on the control board. It's there to protect the transformer from a short circuit in the low-voltage wiring. A field short — like a loose thermostat wire touching a ground — will blow this fuse.

*(Holds up control board and points to fuse holder.)*

Test it with your meter set to continuity or resistance. A good fuse reads near zero ohms. An open fuse reads OL. Replace the fuse with the exact same amperage rating.

Here's the critical follow-up: if you replace a fuse and it blows again immediately, there is a short in the low-voltage circuit. Do not keep replacing fuses. Find the short. Common causes: thermostat wire pinched in a door or wall, bare wire contacting a ground, or a failed component like a zone valve solenoid drawing too much current."

---

### Visual / Camera Notes:

- **Camera framing:** MCU and ECU of transformer and fuse holder. ECU of meter leads on transformer secondary.
- **UI overlays:**
  - Transformer test diagram: primary and secondary labeled; voltage callouts.
  - Fuse test result: "Good fuse = ~0Ω / Blown fuse = OL" graphic.
  - Warning banner: *"Fuse blows again immediately → short circuit in low-voltage wiring. Find the short before replacing."*
- **B-roll:** ECU of fuse being pulled from holder. ECU of blown fuse vs. good fuse held up to light. Meter reading OL on blown fuse.
- **Transition:** Cut to instructor at thermostat base wiring.

---

---

## SEGMENT 4 – Tracing the Y Signal: Board Inputs and Outputs
**Time Range: 4:00 – 5:45**

---

### Voiceover / On-Camera Script:

*(Instructor at air handler with control board visible, thermostat calling for cool.)*

"Let's say the transformer is good, R-to-C reads 24 volts, but the system isn't cooling. We need to trace the Y signal.

With the thermostat calling for cooling, measure Y-to-C at the terminal strip. Do you have 24 volts?

If yes — the thermostat is sending the call correctly. The signal is making it to the air handler.

Now check the board's output for Y — the Y wire heading to the outdoor unit. On most boards this is a separate terminal or a wire terminal labeled Y-out or EV. Measure that to C.

If Y input is 24V but Y output is 0V — the control board is not passing the cooling call to the outdoor unit. The board has failed to energize the output relay. The board may need replacement, or there may be a fault code locking out the cooling call.

Speaking of fault codes — always check the board's LED indicator. Most modern control boards have a diagnostic LED that blinks a pattern to indicate the fault. Count the blinks and look up the code on the wiring diagram pasted inside the air handler cabinet door. Fault codes save enormous diagnostic time.

*(Shows wiring diagram inside cabinet door.)*

Common fault codes you'll see in multifamily:
- High-pressure lockout: outdoor conditions, dirty condenser, or overcharge.
- Low-pressure lockout: low refrigerant or sensing issue.
- Limit switch open: overheating due to airflow restriction.
- Rollout switch open: heat exchanger or burner issue on a gas furnace (covered in Week 6).

Document the fault code in your work order — always."

---

### Visual / Camera Notes:

- **Camera framing:** OTS ECU of board terminal strip. ECU of LED blink pattern on control board.
- **UI overlays:**
  - Y-signal trace diagram: showing measurement point at terminal strip input, then at board output — two arrows with voltage callouts.
  - LED fault code graphic: animated blink pattern → lookup chart → fault name.
  - Common fault code list overlay.
- **B-roll:** ECU of control board LED blinking. ECU of wiring diagram pasted inside cabinet door. Instructor looking up blink count.
- **Transition:** Cut to instructor holding two different thermostats.

---

---

## SEGMENT 5 – Conventional vs. Communicating Thermostats
**Time Range: 5:45 – 7:30**

---

### Voiceover / On-Camera Script:

*(Instructor at a training display with two thermostats side by side.)*

"This brings us to an important distinction you'll encounter in modern multifamily properties: conventional wiring versus communicating systems.

In a conventional system, the four wires — R, C, Y, G, plus W for heat — each carry a specific voltage signal. 24 volts on Y means 'call for cool.' This is what we've been working with.

In a communicating system — common brands include Honeywell's TrueZONE, Carrier Infinity, Lennox iComfort, and similar — the thermostat and air handler exchange digital data on a communication bus. Typically two or four wires. The thermostat doesn't just send 24 volts; it sends digital commands, receives sensor data, and the system self-configures and self-diagnoses.

The diagnostic implication: **you cannot use a standard multimeter to trace a communicating signal.** If you probe the communication bus with a meter you'll see a low-voltage pulsing signal that tells you nothing useful.

For communicating systems, diagnosis starts with the thermostat's built-in diagnostics menu. Navigate to the service or installer mode — the steps vary by brand, and the manufacturer's documentation is your reference. The thermostat will display fault codes, system status, and component readings directly.

The second tool is the manufacturer's diagnostic app or service tool — often a Bluetooth or WiFi connected device that talks directly to the control board.

The good news: communicating systems are much better at telling you what's wrong. The catch: you need to know how to ask them.

For properties with communicating systems, get the brand-specific service manual and keep it accessible. Treat it like a wiring diagram — it's the map for that system."

---

### Visual / Camera Notes:

- **Camera framing:** MCU instructor at display with both thermostat types. ECU of conventional thermostat back (wires labeled). ECU of communicating thermostat display showing fault code menu.
- **UI overlays:**
  - Side-by-side comparison: Conventional (5-wire diagram) vs. Communicating (2–4-wire bus diagram).
  - Callout: *"Communicating system: use built-in diagnostics menu and manufacturer service tool."*
  - Brand examples listed (Carrier Infinity, Lennox iComfort, Honeywell Vision Pro, etc.).
- **B-roll:** Communicating thermostat displaying service screen. Technician scrolling through thermostat diagnostics menu.
- **Transition:** Dissolve to instructor at workbench for documentation.

---

---

## SEGMENT 6 – Documentation & Field Assignment
**Time Range: 7:30 – 9:00**

---

### Voiceover / On-Camera Script:

*(Instructor at workbench with wiring diagram and work order.)*

"On every electrical controls call, your work order needs to capture the diagnostic path you followed — not just the final part you replaced.

Example: 'Thermostat calling for cool. R–C = 24V. Y input at board = 24V. Y output at board = 0V. Board LED flashing 3 blinks — code 3 indicates low-pressure lockout. Low-side pressure verified at 45 PSI — abnormally low. Suspect refrigerant issue. Board responding correctly to low-pressure switch. Referred to gauges for refrigerant diagnosis. Bucket: Refrigeration/Components.'

Notice what that note does — it proves you traced the signal, confirmed the board is functioning, and correctly identified the fault code as a symptom of a refrigerant issue, not a board failure. That's the difference between replacing a control board that doesn't need replacing — a common and expensive mistake — and finding the actual root cause.

Your field assignment: on your next call involving a no-response system or unexpected behavior, trace the signal path step by step from transformer to outdoor unit. Document each measurement. Check for fault codes and look them up before replacing any component."

---

### Visual / Camera Notes:

- **Camera framing:** MCU at workbench. OTS of work order on clipboard.
- **UI overlays:** Work order example text on screen. Highlighted phrase: *"Board responding correctly — fault code is symptom of refrigerant issue."*
- **B-roll:** Technician writing measurements on work order. ECU of fault code lookup in documentation.
- **Transition:** Instructor sets clipboard down, looks to camera for closing.

---

---

## SEGMENT 7 – Closing
**Time Range: 9:00 – 10:00**

---

### Voiceover / On-Camera Script:

*(Instructor direct to camera.)*

"Control circuit diagnosis is methodical. Trace the signal, measure at each point, read the fault codes, and document what you find. Never replace a board without proving the board is the problem — they're expensive and the return process is a headache.

Next week we switch to heating — no-heat calls, gas furnaces, and the basics of heat pump operation. A lot of the diagnostic thinking carries over directly.

I'll see you in Week 6."

---

### Visual / Camera Notes:

- **Camera framing:** Tight MCU, direct address.
- **UI overlays:** End card — "Week 5 Complete" / "Week 6 Preview: No-Heat Calls & Heat Pump Basics."
- **Music:** Rise and fade.

---

---

## Full Time-Code Summary

| Segment | Title | Time Range | Approx. Duration |
|---|---|---|---|
| 1 | Cold Open & Hook | 0:00 – 0:50 | 50 sec |
| 2 | The Control Circuit: An End-to-End Map | 0:50 – 2:30 | 1 min 40 sec |
| 3 | Testing the Transformer and Fuses | 2:30 – 4:00 | 1 min 30 sec |
| 4 | Tracing the Y Signal: Board Inputs and Outputs | 4:00 – 5:45 | 1 min 45 sec |
| 5 | Conventional vs. Communicating Thermostats | 5:45 – 7:30 | 1 min 45 sec |
| 6 | Documentation & Field Assignment | 7:30 – 9:00 | 1 min 30 sec |
| 7 | Closing | 9:00 – 10:00 | 1 min |
| **Total** | | **0:00 – 10:00** | **~10 minutes** |

---

---

## LMS / Teams Deployment and Quiz Notes

### LMS Deployment

- **Title:** *Week 5 – Electrical Controls Deep Dive*
- **Prerequisites:** Weeks 1–4 completion.
- **Supplemental downloads:** Generic wiring diagram template; fault code reference guide for common brands; communicating thermostat diagnostic quick-reference by brand.
- **Field assignment submission:** Documented signal-trace worksheet from a live call — measurements at each point and fault code lookup if applicable.

### Quiz Questions

**Q1 — Multiple Choice**
*You measure Y-to-C at the air handler terminal strip and read 24V. You then measure the board's Y-output terminal to C and read 0V. What does this indicate?*
- A) The thermostat is not sending a cooling call.
- B) The control board is not passing the cooling signal to the outdoor unit — possible board relay failure or fault lockout. ✓
- C) The outdoor contactor has failed.
- D) The transformer has failed.

**Q2 — Multiple Choice**
*A control board's diagnostic LED is flashing in a repeating pattern. What should you do?*
- A) Replace the control board immediately.
- B) Count the blink pattern and look up the fault code on the wiring diagram inside the cabinet. ✓
- C) Ignore it — LED patterns are informational only.
- D) Reset the board by cutting power and reconnecting.

**Q3 — Multiple Choice**
*You replace a blown 5-amp control fuse. The system powers up momentarily, then the fuse blows again. What is the correct next step?*
- A) Replace the fuse with a higher amperage fuse.
- B) Replace the control board.
- C) Find and repair the short circuit in the low-voltage wiring before replacing the fuse again. ✓
- D) Replace the thermostat.

**Q4 — Multiple Choice**
*A property uses a Carrier Infinity communicating thermostat. The system is not cooling. What is the correct first diagnostic step?*
- A) Probe the communication bus with a standard multimeter.
- B) Check the thermostat's built-in diagnostics or service menu for fault codes. ✓
- C) Replace the thermostat first, then evaluate.
- D) Connect manifold gauges immediately.

**Q5 — Short Answer**
*Why is it important to document your full signal-trace path on a control circuit call, even if the repair is simple (like replacing a fuse)?*
*(Expected: Tracing and documenting eliminates guesswork, prevents unnecessary part replacements, provides a record of system behavior at the time of the call, and helps the next technician if the issue recurs.)*
