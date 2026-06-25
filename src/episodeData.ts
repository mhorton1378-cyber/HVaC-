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
  title: "HVAC Week 1",
  subtitle: "Fundamentals & Safety",
  tagline: "For Multifamily Maintenance Teams",
  series: "AION Property Services Training",
  weekNumber: 1,

  outcomes: [
    "Identify major HVAC system components and configurations",
    "Apply Lockout/Tagout (LOTO) safety procedures correctly",
    "Diagnose common HVAC failure symptoms systematically",
    "Execute preventive maintenance to reduce emergency calls",
  ],

  sections: [
    {
      title: "HVAC System Basics",
      bullets: [
        "Split systems: separate indoor air handler + outdoor condenser unit",
        "Heat pumps vs. AC + furnace — know which system before opening the unit",
        "Key components: compressor, condenser coil, evaporator coil, TXV, air handler",
      ],
      speakerNote:
        "Most multifamily units use split systems or PTACs. Knowing the configuration saves time and ensures you order the right parts without guesswork.",
    },
    {
      title: "Safety & Lockout/Tagout",
      bullets: [
        "De-energize ALL power sources before ANY service work — no exceptions",
        "LOTO sequence: locate → isolate → lock → tag → verify zero energy state",
        "Required PPE: insulated gloves, safety glasses, and closed-toe shoes at minimum",
      ],
      speakerNote:
        "LOTO is mandated by OSHA 29 CFR 1910.147. Even a 'quick' filter check on a live unit can cause serious injury. Build this habit now — never skip it.",
    },
    {
      title: "Common Failure Symptoms",
      bullets: [
        "No cooling/heating → check thermostat settings, filter condition, and circuit breakers first",
        "Unusual noises (rattling, banging, grinding) → inspect blower wheel and fan blade clearance",
        "Ice on evaporator coil → restricted airflow (dirty filter) OR low refrigerant charge",
      ],
      speakerNote:
        "Systematic diagnosis wins every time. Check simple causes first — 60% of calls resolve with a filter change or reset. Document every symptom, finding, and action in the work order.",
    },
    {
      title: "Preventive Maintenance",
      bullets: [
        "Monthly: inspect/replace air filters, verify condensate drain line is clear",
        "Quarterly: clean condenser and evaporator coils, check refrigerant charge and connections",
        "Annually: lubricate motor bearings, inspect belts, calibrate thermostat, full system tune-up",
      ],
      speakerNote:
        "Consistent PM reduces emergency service calls by up to 40% and extends equipment life by years. Track visits per unit in your property management system and flag overdue schedules proactively.",
    },
  ],

  takeaways: [
    "Know your system type before you open the unit",
    "LOTO first — every time, no exceptions",
    "Diagnose systematically, document thoroughly",
    "PM prevents emergencies and extends equipment life",
  ],

  nextSteps:
    "Complete the Week 1 Quiz in the LMS  ·  Shadow a PM inspection this week  ·  Locate your property's LOTO station",
};
