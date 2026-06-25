export interface Section {
  title: string;
  bullets: string[];
  speakerNote: string;
}

export interface EpisodeData {
  title: string;
  subtitle: string;
  tagline: string;
  series: string;
  weekNumber: number;
  outcomes: string[];
  sections: Section[];
  takeaways: string[];
  nextSteps: string;
}

export const episodeData: EpisodeData = {
  title: "No-Cool Call",
  subtitle: "Safe, Fast Split-System Diagnosis",
  tagline: "HVAC Micro-Series · Week 1 of 8",
  series: "Multifamily Maintenance Training",
  weekNumber: 1,

  outcomes: [
    "Follow a consistent four-step diagnostic pattern on any no-cool call",
    "Safely verify 24V control signal and line voltage at the air handler and condenser",
    "Categorize root cause into one of four diagnostic buckets",
    "Produce a clear, complete work order note from every call",
  ],

  sections: [
    {
      title: "Step 1 — Thermostat & Initial Checks",
      bullets: [
        "Mode → Cool · setpoint at least 5°F below room temp · fan on Auto",
        "Listen for the relay click, then wait 30–60 seconds for blower response",
        "No airflow at supply = blower not running → power/control issue (Step 2)",
        "Warm airflow at supply = blower running but outdoor unit isn't → Step 3",
      ],
      speakerNote:
        "60 seconds at the thermostat rules out the most common dispatch errors before you touch any equipment. A setpoint 2°F below room temp will barely trigger the system — always verify setpoint first.",
    },
    {
      title: "Step 2 — Indoor Unit: Power & Airflow",
      bullets: [
        "Locate the service disconnect before opening any panel — know your off switch",
        "Measure R–C: 24V AC confirms transformer and control power are present",
        "Measure Y–C (cooling call) and G–C (fan call) with thermostat actively calling",
        "Pull the filter: severe restriction mimics a refrigerant problem — fix airflow first",
      ],
      speakerNote:
        "A clogged filter can drop suction pressure until the evaporator ices over — identical symptom to low refrigerant. Always replace the filter and defrost the coil before connecting gauges. Two minutes here saves a misdiagnosis.",
    },
    {
      title: "Step 3 — Outdoor Unit: Call & Components",
      bullets: [
        "Walk the unit: clear debris, inspect fin damage, verify 18\"+ clearance all sides",
        "Pull disconnect · check fuses · open electrical panel — respect high voltage",
        "24V at contactor coil + plunger NOT pulled in = failed contactor → replace",
        "Contactor in, load voltage OK, motors silent → capacitor/motor (Week 2)",
      ],
      speakerNote:
        "The outdoor disconnect fuses are a common find — a blown fuse kills the condenser while the indoor blower keeps running, producing warm air from a 'working' system. Check fuses before probing anything inside the panel.",
    },
    {
      title: "Step 4 — Bucket the Problem & Document",
      bullets: [
        "Bucket 1: Thermostat / Control · Bucket 2: Power · Bucket 3: Airflow · Bucket 4: Refrigeration / Components",
        "Name the specific cause, what you verified, and the system status at departure",
        "Example: 'Dual-run cap failed (32µF vs 45µF rated). Replaced. System running. Bucket: Power.'",
        "Clear notes protect you, guide management approvals, and help the next technician",
      ],
      speakerNote:
        "Documentation is a professional skill, not paperwork. A note that says 'checked, running OK' tells no one anything. Name the bucket, name the cause, confirm the repair — every time.",
    },
  ],

  takeaways: [
    "Start at the thermostat — never skip Step 1",
    "Fix airflow before chasing refrigerant",
    "Contactor + capacitor are the two most common outdoor failures",
    "Every call ends with a bucket name and a complete work order",
  ],

  nextSteps:
    "Complete the Week 1 Quiz in the LMS  ·  Run the 4-step pattern on your next 3 cooling calls  ·  Write a clear work order note for each",
};
