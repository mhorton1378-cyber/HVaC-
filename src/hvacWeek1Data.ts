export interface Week1Section {
  title: string;
  bullets: string[];
  speakerNote: string;
}

export interface Week1Data {
  weekTitle: string;
  subtitle: string;
  tagline: string;
  audience: string;
  instructor: string;
  series: string;
  weekNumber: number;
  outcomes: string[];
  sections: Week1Section[];
  takeaways: string[];
  callToAction: string[];
  closingQuote: string;
}

export const hvacWeek1Data: Week1Data = {
  weekTitle: "HVAC Week 1",
  subtitle: "Fundamentals & Safety",
  tagline: "Building safe habits and system awareness before touching the first unit.",
  audience: "New & Early-Career Multifamily Maintenance Technicians",
  instructor: "AION Property Services · Maintenance Training",
  series: "AION HVAC Training Series",
  weekNumber: 1,

  outcomes: [
    "Identify major HVAC system components used in multifamily properties",
    "Explain core safety principles: electrical, stored-energy awareness, and PPE",
    "Describe Lockout/Tagout (LOTO) steps to prevent accidental startup",
    "Perform a visual HVAC safety check before beginning any work",
    "Document HVAC findings clearly for service managers and vendors",
  ],

  sections: [
    {
      title: "Understanding Multifamily HVAC Systems",
      bullets: [
        "Three common configurations: split systems, rooftop/package units, and PTACs",
        "Key components: condenser, evaporator coil, air handler, thermostat, filters, condensate drain",
        "Connect components to resident complaints: no-cool, short cycling, water on floor, noisy operation",
        "Week 1 focus: recognition and safe observation — not advanced repair",
      ],
      speakerNote:
        "Walk technicians through the equipment they'll see on site: split systems outside units, package units on roofs or in mechanical rooms, and PTACs in individual apartments. Tie each component to real-world resident complaints. Reinforce that the goal this week is system awareness and safe inspection — not deep diagnostics or refrigerant handling.",
    },
    {
      title: "HVAC Safety Basics & PPE",
      bullets: [
        "Treat every HVAC unit as energized until you verify power is off",
        "Required PPE: safety glasses, work gloves, appropriate footwear, hearing protection",
        "Ladder safety: three-point contact when accessing rooftop or elevated equipment",
        "Never bypass safety interlocks, jump fuses, or defeat door switches to force equipment to run",
      ],
      speakerNote:
        "HVAC work blends electrical, mechanical, and thermal hazards. Use examples — fan blades, hot heat exchangers, pressurized refrigerant — to illustrate why rushing leads to injuries. Walk through PPE expectations and tie them to real scenarios: rooftops, tight mechanical rooms, wet equipment pads. Drive home that technicians should never defeat safety devices to 'get it running.'",
    },
    {
      title: "Lockout / Tagout (LOTO) Fundamentals",
      bullets: [
        "Notify residents, coworkers, and supervisors before shutting down equipment for service",
        "Identify all energy sources: electrical disconnects, breakers, stored mechanical or pressure energy",
        "Apply lockout/tagout devices at the disconnect or breaker following manufacturer shutdown steps",
        "Verify zero energy: test controls and confirm the system will not start before beginning work",
      ],
      speakerNote:
        "Introduce LOTO as 'making sure nothing can start while you're working on it.' Walk techs through the sequence: communicate, shut down, isolate, lock and tag, verify zero energy. Reference common multifamily situations — rooftop units with external disconnects or PTACs tied to specific breakers. Even basic tasks like changing a blower motor should follow these steps.",
    },
    {
      title: "Mechanical Room & Equipment Safety",
      bullets: [
        "Maintain 3-foot clearance in front of electrical panels; adequate space around gas-fired equipment",
        "Keep mechanical rooms clean, well-lit, and free of combustibles, trash, or trip hazards",
        "Verify proper ventilation; check for unusual odors before entering and staying in the space",
        "Ensure emergency contact info and equipment labels are posted and up to date",
      ],
      speakerNote:
        "Mechanical rooms are often neglected and become storage closets — increasing fire and injury risk. Walk technicians through what 'good' looks like: clear floor space, visible panels, labeled equipment, no combustibles near electrical gear. Encourage them to use sight, smell, and sound to detect gas leaks, overheating motors, or blocked ventilation. Link this to your property policies and inspection checklists.",
    },
    {
      title: "Safety Check & Documentation",
      bullets: [
        "Pre-work checklist: PPE on, work order reviewed, equipment identified, power status confirmed",
        "Document what you observe: equipment condition, safety issues, access problems, limitations",
        "Capture photos or short videos where allowed to support troubleshooting and vendor coordination",
        "Communicate findings clearly to residents, supervisors, and third-party contractors",
      ],
      speakerNote:
        "Show techs how to slow down before physical work begins. Model a quick verbal checklist they can repeat every time they approach a unit. Connect that checklist to documentation: writing clear notes, using consistent terminology, and attaching photos to work orders. Good documentation protects technicians, supports supervisors, and makes vendor visits more efficient.",
    },
  ],

  takeaways: [
    "Safe habits and situational awareness are the foundation of all future HVAC work",
    "Understanding system components helps you respond to resident complaints without rushing into unsafe repairs",
    "LOTO, PPE, and mechanical room housekeeping are non-negotiable standards — not optional nice-to-haves",
  ],

  callToAction: [
    "Complete a supervised HVAC safety walk at your property this week using the checklist from this episode",
    "Review your company's written LOTO and PPE policies and sign any required acknowledgements",
  ],

  closingQuote:
    "At our properties, we fix things and keep residents comfortable — but we never trade safety for speed.",
};
