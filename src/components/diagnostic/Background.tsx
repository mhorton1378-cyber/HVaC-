import React from "react";

export const OutdoorDayBG: React.FC = () => (
  <svg
    viewBox="0 0 1080 1920"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="bg_sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0288d1" />
        <stop offset="55%" stopColor="#4fc3f7" />
        <stop offset="100%" stopColor="#fff9c4" />
      </linearGradient>
      <linearGradient id="bg_wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5ede0" />
        <stop offset="100%" stopColor="#e0d0ba" />
      </linearGradient>
      <linearGradient id="bg_lawn" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6dbf67" />
        <stop offset="100%" stopColor="#43a047" />
      </linearGradient>
      <linearGradient id="bg_conc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d4c9b0" />
        <stop offset="100%" stopColor="#bdb09a" />
      </linearGradient>
      <radialGradient id="bg_sun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff176" />
        <stop offset="65%" stopColor="#fdd835" />
        <stop offset="100%" stopColor="#f9a825" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="bg_vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.38)" />
      </radialGradient>
    </defs>

    {/* Sky */}
    <rect x="0" y="0" width="1080" height="1060" fill="url(#bg_sky)" />

    {/* Sun glow */}
    <circle cx="870" cy="195" r="145" fill="url(#bg_sun)" />
    <circle cx="870" cy="195" r="72" fill="#FDD835" />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={870 + Math.cos(a) * 92}
          y1={195 + Math.sin(a) * 92}
          x2={870 + Math.cos(a) * 136}
          y2={195 + Math.sin(a) * 136}
          stroke="#FDD835"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.65"
        />
      );
    })}

    {/* Roof */}
    <polygon points="-10,768 540,326 1090,768" fill="#6d4c41" />
    <polygon points="20,768 540,356 1060,768" fill="#8d6e63" />
    <rect x="-10" y="756" width="1100" height="22" fill="#5d4037" />
    <rect x="0" y="768" width="1080" height="14" fill="#ede5d8" />

    {/* Chimney */}
    <rect x="650" y="340" width="85" height="210" fill="#795548" />
    <rect x="638" y="332" width="110" height="18" fill="#6d4c41" />

    {/* House wall */}
    <rect x="0" y="776" width="1080" height="950" fill="url(#bg_wall)" />
    {Array.from({ length: 24 }).map((_, i) => (
      <line
        key={i}
        x1="0"
        y1={794 + i * 38}
        x2="1080"
        y2={794 + i * 38}
        stroke="rgba(0,0,0,0.07)"
        strokeWidth="1.5"
      />
    ))}
    <rect x="0" y="776" width="22" height="950" fill="#ddd0bc" />
    <rect x="1058" y="776" width="22" height="950" fill="#ddd0bc" />

    {/* Left window */}
    <rect x="90" y="820" width="245" height="198" fill="none" stroke="#ccc0a8" strokeWidth="16" rx="6" />
    <rect x="98" y="828" width="229" height="182" fill="#b3e5fc" rx="4" />
    <line x1="213" y1="828" x2="213" y2="1010" stroke="#aaa" strokeWidth="6" />
    <line x1="98" y1="919" x2="327" y2="919" stroke="#aaa" strokeWidth="6" />
    <rect x="101" y="831" width="225" height="28" fill="#ffe082" opacity="0.55" />

    {/* Right window */}
    <rect x="745" y="820" width="245" height="198" fill="none" stroke="#ccc0a8" strokeWidth="16" rx="6" />
    <rect x="753" y="828" width="229" height="182" fill="#b3e5fc" rx="4" />
    <line x1="868" y1="828" x2="868" y2="1010" stroke="#aaa" strokeWidth="6" />
    <line x1="753" y1="919" x2="982" y2="919" stroke="#aaa" strokeWidth="6" />
    <rect x="756" y="831" width="225" height="28" fill="#ffe082" opacity="0.55" />

    {/* Front door */}
    <rect x="428" y="1006" width="224" height="420" fill="#5d4037" rx="8" />
    <rect x="438" y="1016" width="97" height="148" fill="#6d4c41" rx="4" />
    <rect x="545" y="1016" width="97" height="148" fill="#6d4c41" rx="4" />
    <rect x="438" y="1178" width="97" height="148" fill="#6d4c41" rx="4" />
    <rect x="545" y="1178" width="97" height="148" fill="#6d4c41" rx="4" />
    <circle cx="505" cy="1228" r="15" fill="#ffd54f" />
    <circle cx="505" cy="1228" r="8" fill="#ffb300" />
    <rect x="438" y="1009" width="214" height="44" fill="#b3e5fc" rx="3" opacity="0.75" />

    {/* Ground / lawn */}
    <rect x="0" y="1610" width="1080" height="310" fill="url(#bg_lawn)" />
    <rect x="0" y="1600" width="1080" height="18" fill="#a5d6a7" />

    {/* Concrete pad */}
    <path d="M 0 1600 L 440 1600 L 400 1920 L 0 1920 Z" fill="url(#bg_conc)" />
    <line x1="0" y1="1730" x2="400" y2="1730" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
    <line x1="190" y1="1600" x2="178" y2="1920" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />

    {/* Left shrubs */}
    <ellipse cx="110" cy="1608" rx="145" ry="82" fill="#2e7d32" />
    <ellipse cx="55" cy="1603" rx="100" ry="70" fill="#388e3c" />
    <ellipse cx="185" cy="1614" rx="115" ry="76" fill="#2e7d32" />
    <ellipse cx="130" cy="1596" rx="82" ry="56" fill="#43a047" />

    {/* Right shrubs */}
    <ellipse cx="980" cy="1608" rx="125" ry="76" fill="#2e7d32" />
    <ellipse cx="1040" cy="1603" rx="88" ry="65" fill="#388e3c" />

    {/* Vignette */}
    <rect x="0" y="0" width="1080" height="1920" fill="url(#bg_vignette)" />
  </svg>
);

export const DarkTechBG: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(ellipse at 50% 40%, #1a2744 0%, #0d1b2e 55%, #060d18 100%)",
    }}
  />
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
