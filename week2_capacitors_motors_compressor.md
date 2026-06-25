# Week 2 – Capacitors, Motors & Compressor Diagnosis
### HVAC Micro-Series | Production Script & Visual Plan
**Target Length:** 10–12 minutes | **Audience:** Multifamily Maintenance Technicians (Entry–Mid Level)

---

## Production Overview

| Property | Detail |
|---|---|
| Series | 8-Week HVAC Micro-Series |
| Module | Week 2 of 8 |
| Runtime Target | 10–12 minutes |
| Prerequisite | Week 1 – Safe, Fast Split-System Diagnosis |
| Style | Live-action instructor + cinematic B-roll + UI/diagram overlays |
| Music | Light modern instrumental underscore throughout |

---

## Learning Objectives

By the end of this video, a technician will be able to:
1. Identify start and run capacitors and explain what each does in the circuit.
2. Test a capacitor with a digital multimeter capacitance function and interpret the reading.
3. Distinguish between a failed capacitor, a failed motor, and a failed compressor using field tests.

---

---

## SEGMENT 1 – Cold Open & Hook
**Time Range: 0:00 – 0:45**

---

### Voiceover / On-Camera Script:

*(Instructor standing next to an open condenser panel — a round silver capacitor visible in frame.)*

"Last week you walked out of a no-cool call with a confirmed diagnosis. You checked the contactor, it was pulled in, power was present on both sides — but the condenser fan wasn't spinning and you heard the compressor humming but not starting.

We told you that's a Week 2 problem. Well — welcome to Week 2.

This right here is a capacitor. It's a small component that causes more no-cool calls in multifamily than almost anything else. And by the end of this video, you'll know exactly how to test it, what to look for, and how to tell the difference between a dead cap, a dead motor, and a dead compressor.

Let's go."

---

### Visual / Camera Notes:

- **Opening shot:** ECU of a round run capacitor inside a condenser panel, then pull back to reveal instructor standing next to the open unit.
- **Overlay:** Series title card — *"Week 2: Capacitors, Motors & Compressor Diagnosis."*
- **B-roll montage:** Capacitor close-up with visible bulge (failed), tech pulling capacitor from bracket, multimeter in capacitance mode, condenser fan spinning up.
- **Transition:** Hard cut to instructor in a training-bench setting with capacitors laid out.

---

---

## SEGMENT 2 – What a Capacitor Does (and Why It Fails)
**Time Range: 0:45 – 2:15**

---

### Voiceover / On-Camera Script:

*(Instructor at training bench with two capacitors — one round single, one oval dual-run.)*

"Let's start with what a capacitor actually does, because once you understand the job, the failures make sense.

Electric motors — your compressor, your condenser fan motor, your indoor blower motor — they need an extra voltage kick to start spinning and to keep running efficiently. Capacitors store an electrical charge and deliver that kick at exactly the right moment.

You'll find two types in a split system.

This one — *(holds up oval dual-run capacitor)* — is a dual-run capacitor. It's the most common one you'll pull in the field. It has three terminals: one labeled HERM, one labeled FAN, and one labeled COM — for common. HERM goes to the compressor's run winding. FAN goes to the condenser fan motor. COM is shared between them.

This one — *(holds up round single capacitor)* — is a start capacitor. Some older or larger compressors use one to give an extra boost during startup only. It's typically in a relay circuit and drops out of the circuit once the compressor is running.

Now — why do they fail?

Heat and time. Capacitors are rated in microfarads — µF — and they wear out. High ambient temps, voltage spikes, short-cycling — all of it accelerates wear. A capacitor that's lost enough capacitance can no longer deliver the torque needed to spin the motor, and that's when you get that symptom from Week 1: motors humming but not starting.

Visually, a failed cap sometimes tells you right away." *(Holds up a cap with a bulged top.)* "See this dome on top? That's a sign the cap has vented. It's done. Replace it without even testing it. But don't count on the visual — a cap can fail with no bulge at all. Always test."

---

### Visual / Camera Notes:

- **Camera framing:** MCU of instructor at bench; ECU of each capacitor as it's held up.
- **UI overlays:**
  - Labeled diagram of dual-run capacitor: terminals HERM, FAN, COM with color-coded wire arrows to compressor and fan motor.
  - Animated diagram: capacitor charging and discharging into motor winding — simplified voltage spike graphic.
  - Text callout: *"µF = Microfarads — the unit of capacitance."*
- **B-roll:** ECU of bulged capacitor top vs. flat (good) capacitor top. ECU of capacitor rating label (µF and VAC ratings visible).
- **Transition:** Dissolve to instructor with multimeter in hand.

---

---

## SEGMENT 3 – Testing a Capacitor with a Meter
**Time Range: 2:15 – 4:00**

---

### Voiceover / On-Camera Script:

*(Instructor at bench with multimeter set to capacitance mode — capacitor on a non-conductive mat.)*

"Testing a capacitor is straightforward, but there's one non-negotiable step first: **you must discharge the capacitor before you touch it.**

A capacitor holds a charge even with the power off. Not always, but often enough that you treat every one like it's live until proven otherwise. Here's how: use a resistor — a 20k-ohm, 5-watt resistor works — touch the leads across the capacitor terminals for a few seconds. That bleeds the charge safely. Some techs use an insulated screwdriver to short across the terminals — that works but it's harder on the cap. Use the resistor.

*(Demonstrates discharge with resistor leads.)*

Now set your meter to capacitance mode — the symbol looks like two parallel lines with a curve — and put your leads on the HERM and COM terminals.

*(Places leads, meter reading appears.)*

The rated capacitance is printed right on the cap — say this one reads 45 µF. Most manufacturers allow a tolerance of plus or minus six percent. So 45 µF is good anywhere from about 42 to 47.7 µF.

My meter reads 38.2. That's outside tolerance. This capacitor is weak and needs to be replaced.

Now test FAN to COM for the fan motor side.

*(Moves leads to FAN and COM — reads 5 µF rated, meter shows 4.1.)*

That's still in range — 5 µF with a 4.7 to 5.3 acceptable band. The fan side is OK. So on this dual-run cap, I might replace the whole capacitor, or I might check for a replacement that matches both ratings.

Always match the µF rating exactly. You can go up to 10% higher on the voltage rating — that's fine — but never substitute a different µF value. Wrong capacitance causes the motor to run hot and fail prematurely."

---

### Visual / Camera Notes:

- **Camera framing:** ECU of meter leads on capacitor terminals; ECU of meter display showing reading.
- **UI overlays:**
  - Safety callout banner (prominent, 4 seconds): *"DISCHARGE CAPACITOR BEFORE HANDLING — use a resistor or insulated tool."*
  - Meter mode icon: capacitance symbol highlighted.
  - Tolerance band graphic: slider showing acceptable range around rated µF value — pointer lands in red zone for failed reading.
  - Rule card: *"Match µF exactly. Voltage rating can be equal or higher."*
- **B-roll:** ECU of resistor leads touching capacitor terminals. ECU of capacitor rating label. Meter display reading in red zone.
- **Transition:** Cut to instructor at condenser unit outside.

---

---

## SEGMENT 4 – Testing at the Condenser (In-Field Procedure)
**Time Range: 4:00 – 5:30**

---

### Voiceover / On-Camera Script:

*(Instructor at outdoor condenser, disconnect pulled, panel open.)*

"In the field you're not going to have a clean bench. Here's how you run this test on a live call.

First — pull the disconnect and verify power is off. Then open the electrical panel.

Locate the capacitor — it's usually in a bracket on the panel side wall. Note the wiring before you touch anything. I like to take a quick photo with my phone so I know exactly which wire goes where when I reinstall.

*(Takes phone photo of wiring.)*

Discharge the capacitor with your resistor, then pull the wires off the terminals. Take note of which wire came from which terminal.

Test it exactly as we showed on the bench — HERM to COM, FAN to COM.

Out of tolerance? Pull the capacitor out of its bracket, bring it to your truck, match the ratings on a replacement, and swap it in. Reconnect wires exactly as they were per your photo. Reinstall the disconnect and test the system.

Here's something important: **replace the cap first, then re-run the system before assuming the motor or compressor is also bad.** A weak capacitor can make a motor fail to start, but once you give that motor a good capacitor, it may run perfectly. Don't replace parts you don't need."

---

### Visual / Camera Notes:

- **Camera framing:** Wide shot of instructor at condenser. MCU of instructor photographing wiring. ECU of capacitor in bracket.
- **UI overlays:**
  - Step checklist overlay fades in:
    1. Pull disconnect
    2. Photo the wiring
    3. Discharge cap
    4. Remove wires, note terminals
    5. Test µF
    6. Replace if out of tolerance
  - Text callout: *"Always photo wiring before disconnecting."*
- **B-roll:** Phone screen showing capacitor wiring photo. ECU of capacitor in bracket. Tech pulling cap from bracket.
- **Transition:** Cut back to instructor at bench or training setup for motor testing segment.

---

---

## SEGMENT 5 – When the Cap Is Good: Testing the Motor
**Time Range: 5:30 – 7:00**

---

### Voiceover / On-Camera Script:

*(Instructor at bench with a condenser fan motor.)*

"So you tested the capacitor — it's in tolerance. But the motor still isn't running. Now what?

First thing: with power off and cap discharged, try spinning the fan blade by hand.

*(Demonstrates spinning fan blade.)*

It should spin freely with very little resistance — almost like it's floating. If it's stiff, grinding, or won't turn — the motor bearings are seized. That motor is done. Replace it.

If it spins freely, we go to the meter. Set it to resistance — ohms.

A single-phase PSC motor like this condenser fan has two windings that matter to us: a common terminal, a run terminal, and a start terminal. On most condenser fan motors these are three wires: typically brown or black for common, brown/white for run, and blue for the capacitor.

Check resistance across each combination:
- Common to Run: should read a moderate resistance — maybe 2 to 8 ohms depending on motor size.
- Common to Start: slightly higher resistance.
- Run to Start: the sum of the other two, approximately.

If any reading is zero — that's a shorted winding. Motor is done.
If any reading is OL — open line, infinite resistance — that winding is open. Motor is done.
Also check each winding terminal to ground — to the motor case or mounting frame. You should read OL — no connection to ground. A reading to ground means the motor is grounded out and is a shock hazard. Replace it immediately.

Good resistance readings, free-spinning shaft, and you put a good cap on it and it still won't run? Now we look harder at the supply voltage and whether the motor is getting its full voltage. But in most cases — it's the cap or the motor, and you've just ruled both of them out systematically."

---

### Visual / Camera Notes:

- **Camera framing:** MCU of instructor spinning fan blade by hand. ECU of meter leads on motor terminals.
- **UI overlays:**
  - Motor winding diagram: three terminals (C, R, S) with resistance readings labeled.
  - Color-coded resistance results table:
    - Green: "Moderate resistance ✓"
    - Red: "0 ohms = Short ✗"
    - Red: "OL/infinite = Open winding ✗"
    - Red: "Any reading to ground = Grounded winding ✗"
  - Safety callout: *"Grounded motor winding = shock hazard. Do not operate — replace."*
- **B-roll:** ECU of meter reading 0 ohms (shorted). ECU of meter reading OL. Tech spinning fan blade freely.
- **Transition:** Hard cut to instructor — more serious tone for compressor testing segment.

---

---

## SEGMENT 6 – Compressor Basics: What You Can Test in the Field
**Time Range: 7:00 – 9:00**

---

### Voiceover / On-Camera Script:

*(Instructor at outdoor unit, compressor visible or shown in diagram.)*

"Now — the compressor. This is the most expensive component in the system, and misdiagnosing it costs your property real money. So I want to be clear about what we can check in the field and what we cannot.

What we can check: the compressor's electrical windings, just like we tested the motor. On a single-phase compressor you'll find three terminals on a terminal block on the side of the shell — labeled C, S, and R. Common, Start, and Run.

*(Shows terminal block diagram.)*

Same test:
- R to C: moderate resistance.
- S to C: slightly higher.
- S to R: roughly the sum.
- Each terminal to ground — should read OL.

An open or shorted winding, or a terminal reading to ground — that's a definitive electrical failure. The compressor needs to be replaced. Document it, report it, and get your supervisor involved because this is a big-ticket repair.

Here's what you cannot determine in the field with a meter alone: whether the compressor is mechanically pumping. A compressor can pass all the winding tests and still have failed mechanically — worn valve reeds, broken discharge valve, worn pistons. That kind of failure shows up in your pressure and temperature readings, not your ohm readings. We cover that in Week 4 when we get to refrigerant and gauges.

One more test worth knowing: the **locked rotor check**. If you hear the compressor humming and it has a good capacitor, it might be trying to start but mechanically locked. Some compressors can be freed with a start-assist kit — a hard-start capacitor — that gives an extra voltage boost during startup. This is sometimes worth trying on an older compressor to get a resident through a hot night, but it is not a permanent fix. A compressor that needs a hard-start kit to run is a compressor that's on its way out. Document it and plan for replacement.

The rule: **never throw parts at a compressor without a systematic diagnosis.** Get the winding readings first. Then get your pressure readings. Then make a decision."

---

### Visual / Camera Notes:

- **Camera framing:** Instructor next to condenser — more measured, deliberate delivery for high-stakes content. ECU of compressor terminal block.
- **UI overlays:**
  - Compressor terminal diagram: C, S, R labeled with ohm ranges.
  - Decision tree:
    - "Open/shorted winding → Electrical failure → Replace"
    - "Terminal to ground → Replace"
    - "Good windings + motor not pumping → Mechanical failure → See Week 4"
  - Text callout: *"Mechanical pump failure requires pressure/temperature diagnosis (Week 4)."*
  - Bold rule card: *"Never replace a compressor on winding tests alone — always confirm with pressure data."*
- **B-roll:** ECU of compressor terminal block. Meter probes on C, S, R. ECU of hard-start kit.
- **Tone note:** Instructor slows pace slightly here — this content has real financial consequence.
- **Transition:** Cut to instructor at workbench for documentation segment.

---

---

## SEGMENT 7 – Documenting Component Failures
**Time Range: 9:00 – 10:15**

---

### Voiceover / On-Camera Script:

*(Instructor with clipboard, work order in hand.)*

"Let's talk about how you document what we found today, because the words you write determine whether this gets approved fast or sits in limbo.

Here are two examples.

Weak example: 'Capacitor failed, replaced. System running.'

That tells me nothing about how you know it failed, what you replaced it with, or what you confirmed afterward.

Strong example: 'Dual-run capacitor tested — HERM side read 32 µF against 45 µF rated, 29% below tolerance. Replaced with matching 45/5 µF, 440V dual-run cap. System restarted — compressor and condenser fan running. Verified 240V load side contactor. Supply air temp drop confirmed. Bucket: Power/Components.'

Now anyone reading that note knows exactly what you found, what you verified, and what condition the system is in.

For a compressor failure:

'Compressor found humming, not starting. Capacitor tested in tolerance — 44.8 µF against 45 µF rated. Replaced with hard-start kit — compressor started, ran 10 minutes, then locked again. Compressor windings tested: C-to-R 4.2Ω, C-to-S 6.1Ω — normal. No ground fault detected. Compressor mechanical failure suspected. Recommend replacement. Notified supervisor. Bucket: Refrigeration/Components.'

That note protects you, helps your manager approve the right repair, and tells the next person exactly where things stand."

---

### Visual / Camera Notes:

- **Camera framing:** MCU instructor at table, work order clipboard visible. OTS ECU of written work order.
- **UI overlays:**
  - Two work order text examples displayed on screen — weak version fades in first, then swipes to strong version. Key phrases highlighted in the strong version.
  - 4-Bucket graphic with "Power/Components" and "Refrigeration/Components" highlighted.
- **B-roll:** ECU of technician writing. ECU of capacitor rating label next to work order.
- **Transition:** Instructor sets clipboard down, looks to camera for closing.

---

---

## SEGMENT 8 – Field Assignment & Closing
**Time Range: 10:15 – 11:15**

---

### Voiceover / On-Camera Script:

*(Instructor faces camera directly.)*

"Your Week 2 field assignment:

On your next three outdoor unit service calls — whether it's a no-cool call or a PM — pull the dual-run capacitor, discharge it, and test it. Record the rated µF, your measured µF, and whether it's in tolerance.

Do this even if the system is running fine. You're going to find weak capacitors before they fail on a 95-degree day and make a resident's emergency. That's proactive maintenance, and it's how good techs get ahead of problems instead of chasing them.

We've covered capacitors, motors, and compressor electrical testing. Next week, we step back and build the foundation you need to understand what's happening inside the refrigerant circuit — pressure, temperature, and why those two things are always connected in an HVAC system.

I'll see you in Week 3."

---

### Visual / Camera Notes:

- **Camera framing:** MCU to tight medium shot. Direct address to camera.
- **UI overlays:**
  - Field assignment card:
    *"Week 2 Assignment: On your next 3 outdoor unit calls — (1) Test the dual-run capacitor. (2) Record rated vs. measured µF. (3) Note whether it's in tolerance — even if system is running."*
  - End card: "Week 2 Complete" / "Week 3 Preview: Refrigerant Fundamentals & Pressure-Temperature."
  - Objectives checklist — three items check off.
- **B-roll:** Tech writing µF readings on a notepad at a condenser unit. Wide exterior shot.
- **Music:** Rises and fades under final 15 seconds.

---

---

## Full Time-Code Summary

| Segment | Title | Time Range | Approx. Duration |
|---|---|---|---|
| 1 | Cold Open & Hook | 0:00 – 0:45 | 45 sec |
| 2 | What a Capacitor Does (and Why It Fails) | 0:45 – 2:15 | 1 min 30 sec |
| 3 | Testing a Capacitor with a Meter | 2:15 – 4:00 | 1 min 45 sec |
| 4 | Testing at the Condenser (In-Field Procedure) | 4:00 – 5:30 | 1 min 30 sec |
| 5 | When the Cap Is Good: Testing the Motor | 5:30 – 7:00 | 1 min 30 sec |
| 6 | Compressor Basics: What You Can Test in the Field | 7:00 – 9:00 | 2 min |
| 7 | Documenting Component Failures | 9:00 – 10:15 | 1 min 15 sec |
| 8 | Field Assignment & Closing | 10:15 – 11:15 | 1 min |
| **Total** | | **0:00 – 11:15** | **~11 minutes** |

---

---

## LMS / Teams Deployment and Quiz Notes

### LMS Deployment

- **Title:** *Week 2 – Capacitors, Motors & Compressor Diagnosis*
- **Prerequisites:** Week 1 completion required.
- **Supplemental download:** Capacitor tolerance reference card (µF ±6% band calculator).
- **Field assignment submission:** Technician submits log of three capacitor tests (rated vs. measured µF, in/out of tolerance, system status).

### Quiz Questions

**Q1 — Multiple Choice**
*A dual-run capacitor is rated 45/5 µF. You test the HERM side and read 41.2 µF. What should you do?*
- A) The cap is fine — it's close enough.
- B) Replace the capacitor — 41.2 µF is outside the ±6% tolerance for 45 µF. ✓
- C) Replace only the compressor.
- D) Add refrigerant to compensate.

**Q2 — Multiple Choice**
*Before removing wires from a capacitor in the field, what should you always do?*
- A) Turn the thermostat off.
- B) Discharge the capacitor using a resistor or insulated tool. ✓
- C) Check the refrigerant pressure.
- D) Replace the contactor first.

**Q3 — Multiple Choice**
*You test a condenser fan motor winding from the common terminal to the motor case (ground) and read 4 ohms. What does this mean?*
- A) Normal — this is the run winding resistance.
- B) The motor winding is grounded — replace the motor immediately. ✓
- C) The capacitor needs replacement.
- D) The motor is fine — 4 ohms is within spec.

**Q4 — Multiple Choice**
*A compressor passes all winding resistance tests (no opens, no shorts, no ground fault) but the system still has no cooling. What is the appropriate next step?*
- A) Replace the compressor — winding tests are the only diagnostic needed.
- B) Add refrigerant immediately.
- C) Proceed to pressure/temperature diagnosis to evaluate mechanical pumping (covered in Week 4). ✓
- D) Replace the capacitor again with a higher µF value.

**Q5 — Short Answer**
*Why is it important to photograph the capacitor wiring before removing the wires in the field?*
*(Expected answer: To ensure correct reconnection — wrong wiring can send the capacitor signal to the wrong motor, causing component failure or incorrect operation.)*
