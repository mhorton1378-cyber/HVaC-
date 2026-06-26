import React from "react";

// ─── 2.5D Isometric Outdoor Scene ────────────────────────────────────────────
// House shown with front face + right side + roof visible (parallel projection).
// Ground plane recedes in perspective. All elements have gradient shading.

export const OutdoorDayBG: React.FC = () => (
  <svg
    viewBox="0 0 1080 1920"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Sky */}
      <linearGradient id="bg2_sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1565c0" />
        <stop offset="45%" stopColor="#42a5f5" />
        <stop offset="100%" stopColor="#ffe57f" />
      </linearGradient>
      {/* Ground grass */}
      <linearGradient id="bg2_grass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#66bb6a" />
        <stop offset="100%" stopColor="#388e3c" />
      </linearGradient>
      {/* House front wall shading */}
      <linearGradient id="bg2_frontWall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f5ede0" />
        <stop offset="60%" stopColor="#ede0cc" />
        <stop offset="100%" stopColor="#d8cbb8" />
      </linearGradient>
      {/* House side wall (darker — in shadow) */}
      <linearGradient id="bg2_sideWall" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c9b89e" />
        <stop offset="100%" stopColor="#b0a088" />
      </linearGradient>
      {/* Roof front face */}
      <linearGradient id="bg2_roofFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8d6e63" />
        <stop offset="100%" stopColor="#6d4c41" />
      </linearGradient>
      {/* Roof side face (lit from above) */}
      <linearGradient id="bg2_roofSide" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a1887f" />
        <stop offset="100%" stopColor="#795548" />
      </linearGradient>
      {/* Concrete pad */}
      <linearGradient id="bg2_conc" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#d6ccb4" />
        <stop offset="100%" stopColor="#bfb49a" />
      </linearGradient>
      {/* Sun */}
      <radialGradient id="bg2_sun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="55%" stopColor="#fdd835" />
        <stop offset="100%" stopColor="#f57f17" stopOpacity="0" />
      </radialGradient>
      {/* Door */}
      <linearGradient id="bg2_door" x1="0" y1="0" x2="0.15" y2="1">
        <stop offset="0%" stopColor="#8d6e63" />
        <stop offset="100%" stopColor="#4e342e" />
      </linearGradient>
      {/* Window glass */}
      <linearGradient id="bg2_glass" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#90caf9" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#64b5f6" stopOpacity="0.7" />
      </linearGradient>
      {/* Vignette */}
      <radialGradient id="bg2_vig" cx="50%" cy="50%" r="72%">
        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.42)" />
      </radialGradient>
      {/* Ambient shadow at base of house */}
      <linearGradient id="bg2_baseShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(0,0,0,0.22)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
    </defs>

    {/* ── SKY ── */}
    <rect x="0" y="0" width="1080" height="1020" fill="url(#bg2_sky)" />

    {/* Cloud 1 */}
    <g opacity="0.82">
      <ellipse cx="200" cy="220" rx="110" ry="48" fill="white" />
      <ellipse cx="140" cy="234" rx="75" ry="40" fill="white" />
      <ellipse cx="268" cy="230" rx="80" ry="36" fill="white" />
    </g>
    {/* Cloud 2 (smaller) */}
    <g opacity="0.65">
      <ellipse cx="680" cy="160" rx="80" ry="32" fill="white" />
      <ellipse cx="628" cy="170" rx="52" ry="28" fill="white" />
      <ellipse cx="726" cy="167" rx="58" ry="26" fill="white" />
    </g>

    {/* Sun */}
    <circle cx="920" cy="168" r="130" fill="url(#bg2_sun)" />
    <circle cx="920" cy="168" r="66" fill="#FDD835" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={920 + Math.cos(a) * 85}
          y1={168 + Math.sin(a) * 85}
          x2={920 + Math.cos(a) * 128}
          y2={168 + Math.sin(a) * 128}
          stroke="#FDD835"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.6"
        />
      );
    })}

    {/* ── ROOF ── */}
    {/* Roof front left slope */}
    <polygon
      points="44,742 472,316 836,742"
      fill="url(#bg2_roofFront)"
    />
    {/* Roof side surface (right) — lit from above, lighter */}
    <polygon
      points="836,742 472,316 548,362 982,782"
      fill="url(#bg2_roofSide)"
    />
    {/* Roof fascia / overhang line */}
    <line x1="44" y1="742" x2="836" y2="742" stroke="#5d4037" strokeWidth="7" />
    <line x1="836" y1="742" x2="982" y2="782" stroke="#4e342e" strokeWidth="5" />
    {/* Roof ridge */}
    <line x1="472" y1="316" x2="548" y2="362" stroke="#4e342e" strokeWidth="5" />

    {/* Chimney — on side roof */}
    <polygon points="726,480 726,360 774,385 774,506" fill="#795548" />
    <polygon points="718,355 726,360 774,385 766,380" fill="#8d6e63" />
    <rect x="716" y="348" width="64" height="14" rx="3" fill="#6d4c41" />

    {/* ── HOUSE WALLS ── */}
    {/* Front wall */}
    <rect x="44" y="738" width="792" height="860" fill="url(#bg2_frontWall)" />
    {/* Horizontal siding lines on front */}
    {Array.from({ length: 22 }).map((_, i) => (
      <line
        key={i}
        x1="44"
        y1={758 + i * 38}
        x2="836"
        y2={758 + i * 38}
        stroke="rgba(0,0,0,0.055)"
        strokeWidth="1.5"
      />
    ))}
    {/* Corner trim left */}
    <rect x="44" y="738" width="22" height="860" fill="#e0d0b8" />
    {/* Right wall (side face) */}
    <polygon
      points="836,738 982,782 982,1598 836,1598"
      fill="url(#bg2_sideWall)"
    />
    {/* Siding lines on side */}
    {Array.from({ length: 22 }).map((_, i) => (
      <line
        key={i}
        x1="836"
        y1={758 + i * 38}
        x2="982"
        y2={800 + i * 38}
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="1.2"
      />
    ))}

    {/* ── WINDOWS (front) ── */}
    {/* Left window frame */}
    <rect x="112" y="810" width="226" height="188" rx="5" fill="#c8b89e" />
    <rect x="120" y="818" width="210" height="172" rx="4" fill="url(#bg2_glass)" />
    {/* Pane dividers */}
    <line x1="225" y1="818" x2="225" y2="990" stroke="#aaa" strokeWidth="5" />
    <line x1="120" y1="904" x2="330" y2="904" stroke="#aaa" strokeWidth="5" />
    {/* Blind peek */}
    <rect x="122" y="820" width="206" height="26" fill="#fff9c4" opacity="0.5" />
    {/* Window sill */}
    <rect x="106" y="986" width="238" height="14" rx="3" fill="#c8b89e" />

    {/* Right window */}
    <rect x="560" y="810" width="226" height="188" rx="5" fill="#c8b89e" />
    <rect x="568" y="818" width="210" height="172" rx="4" fill="url(#bg2_glass)" />
    <line x1="673" y1="818" x2="673" y2="990" stroke="#aaa" strokeWidth="5" />
    <line x1="568" y1="904" x2="778" y2="904" stroke="#aaa" strokeWidth="5" />
    <rect x="570" y="820" width="206" height="26" fill="#fff9c4" opacity="0.5" />
    <rect x="554" y="986" width="238" height="14" rx="3" fill="#c8b89e" />

    {/* Window on side face */}
    <polygon
      points="876,840 946,863 946,990 876,967"
      fill="url(#bg2_glass)"
      opacity="0.7"
    />
    <polygon
      points="873,836 950,860 950,994 873,970"
      fill="none"
      stroke="#c8b89e"
      strokeWidth="8"
    />

    {/* ── DOOR ── */}
    <rect x="424" y="1040" width="208" height="358" rx="6" fill="url(#bg2_door)" />
    {/* Door panels */}
    <rect x="436" y="1054" width="86" height="128" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
    <rect x="534" y="1054" width="86" height="128" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
    <rect x="436" y="1198" width="86" height="120" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
    <rect x="534" y="1198" width="86" height="120" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
    {/* Transom window */}
    <rect x="436" y="1046" width="184" height="40" rx="3" fill="url(#bg2_glass)" opacity="0.8" />
    {/* Knob */}
    <circle cx="502" cy="1230" r="14" fill="#ffd54f" />
    <circle cx="502" cy="1230" r="8" fill="#ffb300" />
    <rect x="412" y="1394" width="232" height="8" rx="3" fill="#4e342e" />

    {/* ── BASE SHADOW ── */}
    <rect x="0" y="1590" width="1080" height="28" fill="url(#bg2_baseShadow)" />

    {/* ── GROUND ── */}
    <rect x="0" y="1600" width="1080" height="320" fill="url(#bg2_grass)" />
    <rect x="0" y="1596" width="1080" height="14" fill="#81c784" />

    {/* Concrete / driveway — perspective trapezoid */}
    <polygon
      points="0,1596 440,1596 400,1920 0,1920"
      fill="url(#bg2_conc)"
    />
    {/* Concrete joints */}
    <line x1="0" y1="1720" x2="410" y2="1720" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
    <line x1="0" y1="1840" x2="390" y2="1840" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
    <line x1="195" y1="1596" x2="184" y2="1920" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />

    {/* Grass blades at concrete edge */}
    {Array.from({ length: 10 }).map((_, i) => (
      <rect
        key={i}
        x={450 + i * 62}
        y="1590"
        width="9"
        height="18"
        rx="4"
        fill="#66bb6a"
      />
    ))}

    {/* Left shrub cluster */}
    <ellipse cx="120" cy="1604" rx="148" ry="84" fill="#2e7d32" />
    <ellipse cx="58"  cy="1598" rx="98"  ry="70" fill="#388e3c" />
    <ellipse cx="195" cy="1611" rx="118" ry="76" fill="#2e7d32" />
    <ellipse cx="130" cy="1590" rx="86"  ry="54" fill="#43a047" />
    {/* Shrub shadow */}
    <ellipse cx="138" cy="1614" rx="148" ry="18" fill="rgba(0,0,0,0.2)" />

    {/* Right shrub */}
    <ellipse cx="990" cy="1604" rx="118" ry="74" fill="#2e7d32" />
    <ellipse cx="1055" cy="1598" rx="82"  ry="62" fill="#388e3c" />
    <ellipse cx="990"  cy="1616" rx="118" ry="16" fill="rgba(0,0,0,0.18)" />

    {/* ── VIGNETTE ── */}
    <rect x="0" y="0" width="1080" height="1920" fill="url(#bg2_vig)" />
  </svg>
);

// Dark close-up background for diagnostic scenes
export const DarkTechBG: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(ellipse at 50% 38%, #1a2744 0%, #0d1b2e 55%, #050c18 100%)",
    }}
  >
    {/* Subtle grid lines */}
    <svg
      viewBox="0 0 1080 1920"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
    >
      {Array.from({ length: 22 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 88} x2="1080" y2={i * 88} stroke="#00d4ff" strokeWidth="1" />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="1920" stroke="#00d4ff" strokeWidth="1" />
      ))}
    </svg>
  </div>
);

export const WarmIndoorBG: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(160deg, #2d1b0e 0%, #3e2210 40%, #1a0e05 100%)",
    }}
  />
);
