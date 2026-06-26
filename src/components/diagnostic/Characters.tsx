import React from "react";

const C = {
  skinDark: "#e8a94a",
  glassesFrame: "#e65100",
  glasses: "rgba(255,152,0,0.48)",
  eyeColor: "#4e342e",
  hairColor: "#4e342e",
  buckle: "#ffd54f",
  hatBrim: "#0d47a1",
};

interface CharProps {
  x?: number;
  y?: number;
  scale?: number;
  flip?: boolean;
}

// Shared gradient + filter defs — rendered once per character instance
const GradDefs: React.FC = () => (
  <defs>
    <filter id="ch_drop" x="-18%" y="-8%" width="136%" height="130%">
      <feDropShadow dx="7" dy="12" stdDeviation="10" floodColor="rgba(0,0,0,0.52)" />
    </filter>
    {/* Skin: warm highlight top-left, shadow bottom-right */}
    <linearGradient id="ch_skin" x1="0.15" y1="0" x2="0.85" y2="1">
      <stop offset="0%" stopColor="#ffe0b2" />
      <stop offset="55%" stopColor="#ffcc80" />
      <stop offset="100%" stopColor="#e8a94a" />
    </linearGradient>
    <radialGradient id="ch_skinFace" cx="38%" cy="32%" r="62%">
      <stop offset="0%" stopColor="#ffe8c4" />
      <stop offset="65%" stopColor="#ffcc80" />
      <stop offset="100%" stopColor="#efb865" />
    </radialGradient>
    {/* Hard hat: sky-blue highlight to deep navy */}
    <linearGradient id="ch_hat" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stopColor="#64b5f6" />
      <stop offset="38%" stopColor="#1565c0" />
      <stop offset="100%" stopColor="#0a3580" />
    </linearGradient>
    {/* Tech shirt: lit left edge to dark right */}
    <linearGradient id="ch_shirt" x1="0.08" y1="0" x2="0.92" y2="1">
      <stop offset="0%" stopColor="#3f51b5" />
      <stop offset="45%" stopColor="#1a237e" />
      <stop offset="100%" stopColor="#060a2e" />
    </linearGradient>
    {/* Pants: steel-blue highlight */}
    <linearGradient id="ch_pants" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stopColor="#62818f" />
      <stop offset="48%" stopColor="#37474f" />
      <stop offset="100%" stopColor="#17252b" />
    </linearGradient>
    {/* Boots */}
    <linearGradient id="ch_boots" x1="0.1" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stopColor="#424242" />
      <stop offset="100%" stopColor="#0d0d0d" />
    </linearGradient>
    {/* Belt */}
    <linearGradient id="ch_belt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#a1887f" />
      <stop offset="100%" stopColor="#4e342e" />
    </linearGradient>
    {/* Homeowner shirt: warm orange */}
    <linearGradient id="ch_hoShirt" x1="0.08" y1="0" x2="0.92" y2="1">
      <stop offset="0%" stopColor="#ffb74d" />
      <stop offset="48%" stopColor="#e65100" />
      <stop offset="100%" stopColor="#a83800" />
    </linearGradient>
    {/* Homeowner jeans */}
    <linearGradient id="ch_hoPants" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stopColor="#7396c8" />
      <stop offset="50%" stopColor="#4a6fa5" />
      <stop offset="100%" stopColor="#283e6a" />
    </linearGradient>
    {/* Hair */}
    <linearGradient id="ch_hair" x1="0.15" y1="0" x2="0.85" y2="1">
      <stop offset="0%" stopColor="#795548" />
      <stop offset="100%" stopColor="#3e2723" />
    </linearGradient>
  </defs>
);

// Technician kneeling
export const TechKneeling: React.FC<CharProps> = ({
  x = 0, y = 0, scale = 1, flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <GradDefs />

      {/* Ground shadow */}
      <ellipse cx="0" cy="4" rx="95" ry="16" fill="rgba(0,0,0,0.32)" />

      <g filter="url(#ch_drop)">
        {/* ── HARD HAT ── */}
        <path d="M -58 -282 Q -64 -344 0 -354 Q 64 -344 58 -282 Z" fill="url(#ch_hat)" />
        {/* Hat shine */}
        <path d="M -28 -352 Q 0 -360 28 -352 Q 8 -332 0 -330 Q -8 -332 -28 -352 Z" fill="rgba(255,255,255,0.22)" />
        <rect x="-76" y="-284" width="152" height="18" rx="5" fill={C.hatBrim} />
        {/* Brim highlight */}
        <rect x="-76" y="-284" width="152" height="5" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="-14" y="-330" width="28" height="38" rx="4" fill="rgba(255,255,255,0.20)" />

        {/* ── HEAD ── */}
        <ellipse cx="0" cy="-225" rx="52" ry="58" fill="url(#ch_skinFace)" />
        <ellipse cx="-53" cy="-225" rx="9" ry="13" fill="url(#ch_skin)" />
        <ellipse cx="53" cy="-225" rx="9" ry="13" fill="url(#ch_skin)" />

        {/* Safety glasses */}
        <rect x="-50" y="-240" width="100" height="28" rx="9" fill={C.glasses} />
        <rect x="-50" y="-240" width="100" height="28" rx="9" fill="none" stroke={C.glassesFrame} strokeWidth="3" />
        {/* Glasses lens shine */}
        <rect x="-46" y="-238" width="40" height="8" rx="4" fill="rgba(255,255,255,0.28)" />
        <line x1="-5" y1="-226" x2="5" y2="-226" stroke={C.glassesFrame} strokeWidth="2.5" />
        <circle cx="-20" cy="-230" r="6" fill={C.eyeColor} />
        <circle cx="20" cy="-230" r="6" fill={C.eyeColor} />
        <circle cx="-18" cy="-232" r="2.5" fill="white" />
        <circle cx="22" cy="-232" r="2.5" fill="white" />
        <path d="M -15 -202 Q 0 -191 15 -202" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* ── NECK ── */}
        <rect x="-13" y="-170" width="26" height="30" rx="5" fill="url(#ch_skin)" />

        {/* ── TORSO ── */}
        <path
          d="M -68 -142 Q -76 -94 -74 0 L 74 0 Q 76 -94 68 -142 Q 42 -160 0 -158 Q -42 -160 -68 -142 Z"
          fill="url(#ch_shirt)"
        />
        {/* Shirt rim-light on left edge */}
        <path d="M -68 -142 Q -76 -80 -74 -30" stroke="rgba(120,150,255,0.28)" strokeWidth="12" fill="none" strokeLinecap="round" />
        {/* Collar */}
        <path d="M -16 -158 L 0 -124 L 16 -158" fill="#e8eaf6" />
        {/* Pocket */}
        <rect x="-58" y="-125" width="38" height="30" rx="3" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <rect x="18" y="-122" width="52" height="18" rx="3" fill="rgba(255,255,255,0.12)" />

        {/* ── BELT ── */}
        <rect x="-76" y="-4" width="152" height="24" rx="5" fill="url(#ch_belt)" />
        <rect x="-11" y="-2" width="22" height="20" rx="3" fill={C.buckle} />
        <rect x="-72" y="-4" width="42" height="30" rx="3" fill="#6d4c41" />
        <rect x="-68" y="2" width="14" height="20" rx="2" fill="#8d6e63" />

        {/* ── LEFT ARM (forward) ── */}
        <path d="M -68 -138 Q -105 -78 -118 -14" stroke="#1a237e" strokeWidth="40" strokeLinecap="round" fill="none" />
        {/* Shirt sleeve highlight */}
        <path d="M -70 -134 Q -104 -76 -116 -16" stroke="rgba(120,150,255,0.22)" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M -118 -14 Q -134 42 -140 76" stroke="#ffcc80" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="-142" cy="88" rx="24" ry="28" fill="url(#ch_skin)" />

        {/* ── RIGHT ARM ── */}
        <path d="M 68 -138 Q 100 -82 108 -22" stroke="#1a237e" strokeWidth="40" strokeLinecap="round" fill="none" />
        <path d="M 108 -22 Q 116 34 112 70" stroke="#efb865" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="112" cy="82" rx="24" ry="26" fill="url(#ch_skin)" />

        {/* ── LEGS (kneeling) ── */}
        <path d="M -65 20 L -76 130 Q -74 172 -58 180 L -18 180 Q -8 168 -18 130 L -14 20 Z" fill="url(#ch_pants)" />
        <path d="M 15 20 L 20 90 Q 55 132 84 142 L 106 120 Q 85 86 76 20 Z" fill="url(#ch_pants)" />
        {/* Pants crease highlight */}
        <path d="M -67 25 L -74 120 Q -72 155 -60 162" stroke="rgba(255,255,255,0.13)" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* ── BOOTS ── */}
        <path d="M -76 168 Q -88 198 -74 206 L -14 206 Q -4 198 -16 168 Z" fill="url(#ch_boots)" />
        <rect x="-88" y="202" width="80" height="12" rx="3" fill="#1a1a1a" />
        {/* Boot shine */}
        <path d="M -82 174 Q -80 188 -70 196" stroke="rgba(255,255,255,0.15)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 84 140 Q 112 154 122 162 L 132 150 Q 118 130 106 120 Z" fill="url(#ch_boots)" />
      </g>
    </g>
  );
};

// Technician standing upright
export const TechStanding: React.FC<CharProps> = ({
  x = 0, y = 0, scale = 1, flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <GradDefs />
      <ellipse cx="0" cy="4" rx="80" ry="14" fill="rgba(0,0,0,0.28)" />

      <g filter="url(#ch_drop)">
        {/* Hard hat */}
        <path d="M -56 -398 Q -62 -460 0 -470 Q 62 -460 56 -398 Z" fill="url(#ch_hat)" />
        <path d="M -26 -466 Q 0 -474 26 -466 Q 8 -446 0 -444 Q -8 -446 -26 -466 Z" fill="rgba(255,255,255,0.22)" />
        <rect x="-74" y="-400" width="148" height="18" rx="5" fill={C.hatBrim} />
        <rect x="-74" y="-400" width="148" height="5" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="-13" y="-448" width="26" height="36" rx="4" fill="rgba(255,255,255,0.20)" />

        {/* Head */}
        <ellipse cx="0" cy="-338" rx="50" ry="56" fill="url(#ch_skinFace)" />
        <ellipse cx="-51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />
        <ellipse cx="51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />

        {/* Safety glasses */}
        <rect x="-48" y="-352" width="96" height="26" rx="8" fill={C.glasses} />
        <rect x="-48" y="-352" width="96" height="26" rx="8" fill="none" stroke={C.glassesFrame} strokeWidth="2.5" />
        <rect x="-44" y="-350" width="38" height="8" rx="3" fill="rgba(255,255,255,0.28)" />
        <line x1="-4" y1="-339" x2="4" y2="-339" stroke={C.glassesFrame} strokeWidth="2" />
        <circle cx="-18" cy="-342" r="5.5" fill={C.eyeColor} />
        <circle cx="18" cy="-342" r="5.5" fill={C.eyeColor} />
        <circle cx="-16" cy="-344" r="2" fill="white" />
        <circle cx="20" cy="-344" r="2" fill="white" />
        <path d="M -14 -316 Q 0 -306 14 -316" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Neck */}
        <rect x="-13" y="-284" width="26" height="28" rx="5" fill="url(#ch_skin)" />

        {/* Torso */}
        <path
          d="M -66 -258 Q -74 -196 -72 -80 L 72 -80 Q 74 -196 66 -258 Q 40 -274 0 -272 Q -40 -274 -66 -258 Z"
          fill="url(#ch_shirt)"
        />
        <path d="M -66 -258 Q -74 -180 -72 -110" stroke="rgba(120,150,255,0.28)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M -15 -272 L 0 -240 L 15 -272" fill="#e8eaf6" />
        <rect x="-56" y="-238" width="36" height="28" rx="3" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

        {/* Belt */}
        <rect x="-74" y="-82" width="148" height="22" rx="4" fill="url(#ch_belt)" />
        <rect x="-10" y="-80" width="20" height="18" rx="3" fill={C.buckle} />

        {/* Left arm */}
        <path d="M -66 -254 Q -90 -194 -88 -124" stroke="#1a237e" strokeWidth="38" strokeLinecap="round" fill="none" />
        <path d="M -68 -250 Q -90 -190 -88 -126" stroke="rgba(120,150,255,0.22)" strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M -88 -124 Q -90 -66 -86 -32" stroke="#ffcc80" strokeWidth="30" strokeLinecap="round" fill="none" />

        {/* Right arm */}
        <path d="M 66 -254 Q 90 -194 88 -124" stroke="#1a237e" strokeWidth="38" strokeLinecap="round" fill="none" />
        <path d="M 88 -124 Q 90 -66 86 -32" stroke="#efb865" strokeWidth="30" strokeLinecap="round" fill="none" />

        {/* Legs */}
        <rect x="-68" y="-62" width="60" height="250" rx="14" fill="url(#ch_pants)" />
        <rect x="8" y="-62" width="60" height="250" rx="14" fill="url(#ch_pants)" />
        {/* Pants crease */}
        <path d="M -62 -55 L -62 175" stroke="rgba(255,255,255,0.12)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M 14 -55 L 14 175" stroke="rgba(255,255,255,0.12)" strokeWidth="7" fill="none" strokeLinecap="round" />

        {/* Boots */}
        <path d="M -70 185 Q -82 212 -68 220 L -8 220 Q 2 212 -8 185 Z" fill="url(#ch_boots)" />
        <rect x="-82" y="216" width="84" height="12" rx="3" fill="#1a1a1a" />
        <path d="M -76 190 Q -74 204 -64 212" stroke="rgba(255,255,255,0.15)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 6 185 Q -6 212 8 220 L 68 220 Q 78 212 66 185 Z" fill="url(#ch_boots)" />
        <rect x="-6" y="216" width="84" height="12" rx="3" fill="#1a1a1a" />
      </g>
    </g>
  );
};

// Homeowner standing — frustrated arms crossed
export const HomeownerFrustrated: React.FC<CharProps> = ({
  x = 0, y = 0, scale = 1, flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <GradDefs />
      <ellipse cx="0" cy="4" rx="74" ry="14" fill="rgba(0,0,0,0.28)" />

      <g filter="url(#ch_drop)">
        {/* Hair */}
        <ellipse cx="0" cy="-378" rx="52" ry="38" fill="url(#ch_hair)" />
        <ellipse cx="-46" cy="-356" rx="14" ry="26" fill="url(#ch_hair)" />
        <ellipse cx="46" cy="-356" rx="14" ry="26" fill="url(#ch_hair)" />
        {/* Hair shine */}
        <ellipse cx="-10" cy="-392" rx="20" ry="8" fill="rgba(255,255,255,0.14)" />

        {/* Head */}
        <ellipse cx="0" cy="-340" rx="50" ry="56" fill="url(#ch_skinFace)" />
        <ellipse cx="-51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />
        <ellipse cx="51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />

        {/* Frustrated eyebrows */}
        <path d="M -22 -362 Q -14 -370 -6 -364" stroke={C.hairColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 6 -364 Q 14 -370 22 -362" stroke={C.hairColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="-15" cy="-348" rx="9" ry="8" fill="#fff" />
        <ellipse cx="15" cy="-348" rx="9" ry="8" fill="#fff" />
        <circle cx="-15" cy="-348" r="6" fill={C.eyeColor} />
        <circle cx="15" cy="-348" r="6" fill={C.eyeColor} />
        <circle cx="-13" cy="-350" r="2.5" fill="white" />
        <circle cx="17" cy="-350" r="2.5" fill="white" />

        {/* Nose */}
        <path d="M -4 -332 Q 0 -326 4 -332" stroke={C.skinDark} strokeWidth="2.5" fill="none" />
        {/* Frown */}
        <path d="M -14 -316 Q 0 -322 14 -316" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Neck */}
        <rect x="-12" y="-286" width="24" height="28" rx="5" fill="url(#ch_skin)" />

        {/* Shirt */}
        <path
          d="M -64 -260 Q -72 -190 -70 -80 L 70 -80 Q 72 -190 64 -260 Q 38 -276 0 -274 Q -38 -276 -64 -260 Z"
          fill="url(#ch_hoShirt)"
        />
        <path d="M -64 -260 Q -72 -185 -70 -120" stroke="rgba(255,200,80,0.22)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M -18 -274 Q 0 -255 18 -274" fill="none" stroke="#a83800" strokeWidth="3" strokeLinecap="round" />

        {/* Arms crossed */}
        <path d="M 64 -256 Q 88 -196 74 -148 Q 52 -132 -60 -140" stroke="#e65100" strokeWidth="36" strokeLinecap="round" fill="none" />
        <path d="M -64 -256 Q -88 -196 -72 -148 Q -54 -132 62 -140" stroke="#e65100" strokeWidth="36" strokeLinecap="round" fill="none" />
        {/* Arm highlights */}
        <path d="M 62 -252 Q 86 -192 72 -150" stroke="rgba(255,200,80,0.22)" strokeWidth="12" strokeLinecap="round" fill="none" />
        <ellipse cx="-68" cy="-140" rx="26" ry="22" fill="url(#ch_skin)" />
        <ellipse cx="68" cy="-140" rx="26" ry="22" fill="url(#ch_skin)" />

        {/* Jeans */}
        <rect x="-67" y="-62" width="58" height="250" rx="13" fill="url(#ch_hoPants)" />
        <rect x="9" y="-62" width="58" height="250" rx="13" fill="url(#ch_hoPants)" />
        <path d="M -67 -50 Q -48 -20 -8 -50" fill="none" stroke="rgba(180,210,255,0.3)" strokeWidth="2" />
        <path d="M 9 -50 Q 30 -20 67 -50" fill="none" stroke="rgba(180,210,255,0.3)" strokeWidth="2" />
        {/* Jean crease */}
        <path d="M -60 -55 L -60 175" stroke="rgba(255,255,255,0.11)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Shoes */}
        <path d="M -68 185 Q -80 210 -66 218 L -10 218 Q 0 210 -10 185 Z" fill="url(#ch_boots)" />
        <rect x="-80" y="214" width="80" height="11" rx="3" fill="#1a1a1a" />
        <path d="M 8 185 Q -4 210 10 218 L 66 218 Q 76 210 64 185 Z" fill="url(#ch_boots)" />
        <rect x="-4" y="214" width="80" height="11" rx="3" fill="#1a1a1a" />
      </g>
    </g>
  );
};

// Homeowner happy / gesturing (arms out)
export const HomeownerHappy: React.FC<CharProps> = ({
  x = 0, y = 0, scale = 1, flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <GradDefs />
      <ellipse cx="0" cy="4" rx="74" ry="14" fill="rgba(0,0,0,0.28)" />

      <g filter="url(#ch_drop)">
        {/* Hair */}
        <ellipse cx="0" cy="-378" rx="52" ry="38" fill="url(#ch_hair)" />
        <ellipse cx="-46" cy="-356" rx="14" ry="26" fill="url(#ch_hair)" />
        <ellipse cx="46" cy="-356" rx="14" ry="26" fill="url(#ch_hair)" />
        <ellipse cx="-10" cy="-392" rx="20" ry="8" fill="rgba(255,255,255,0.14)" />

        {/* Head */}
        <ellipse cx="0" cy="-340" rx="50" ry="56" fill="url(#ch_skinFace)" />
        <ellipse cx="-51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />
        <ellipse cx="51" cy="-338" rx="8" ry="12" fill="url(#ch_skin)" />

        {/* Happy raised eyebrows */}
        <path d="M -22 -366 Q -14 -374 -6 -366" stroke={C.hairColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 6 -366 Q 14 -374 22 -366" stroke={C.hairColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="-15" cy="-348" rx="9" ry="8" fill="#fff" />
        <ellipse cx="15" cy="-348" rx="9" ry="8" fill="#fff" />
        <circle cx="-15" cy="-348" r="6" fill={C.eyeColor} />
        <circle cx="15" cy="-348" r="6" fill={C.eyeColor} />
        <circle cx="-13" cy="-350" r="2.5" fill="white" />
        <circle cx="17" cy="-350" r="2.5" fill="white" />
        {/* Cheek blush */}
        <ellipse cx="-30" cy="-330" rx="14" ry="8" fill="rgba(255,120,100,0.32)" />
        <ellipse cx="30" cy="-330" rx="14" ry="8" fill="rgba(255,120,100,0.32)" />

        {/* Nose */}
        <path d="M -4 -332 Q 0 -326 4 -332" stroke={C.skinDark} strokeWidth="2.5" fill="none" />
        {/* Big smile */}
        <path d="M -18 -312 Q 0 -298 18 -312" stroke={C.skinDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* Neck */}
        <rect x="-12" y="-286" width="24" height="28" rx="5" fill="url(#ch_skin)" />

        {/* Shirt */}
        <path
          d="M -64 -260 Q -72 -190 -70 -80 L 70 -80 Q 72 -190 64 -260 Q 38 -276 0 -274 Q -38 -276 -64 -260 Z"
          fill="url(#ch_hoShirt)"
        />
        <path d="M -64 -260 Q -72 -185 -70 -120" stroke="rgba(255,200,80,0.22)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M -18 -274 Q 0 -255 18 -274" fill="none" stroke="#a83800" strokeWidth="3" strokeLinecap="round" />

        {/* Arms out / gesturing */}
        <path d="M -64 -256 Q -110 -210 -130 -160" stroke="#e65100" strokeWidth="36" strokeLinecap="round" fill="none" />
        <path d="M -66 -252 Q -110 -208 -128 -162" stroke="rgba(255,200,80,0.22)" strokeWidth="12" strokeLinecap="round" fill="none" />
        <ellipse cx="-136" cy="-148" rx="26" ry="22" fill="url(#ch_skin)" />

        <path d="M 64 -256 Q 110 -210 130 -160" stroke="#e65100" strokeWidth="36" strokeLinecap="round" fill="none" />
        <path d="M 66 -252 Q 110 -208 128 -162" stroke="rgba(255,200,80,0.22)" strokeWidth="12" strokeLinecap="round" fill="none" />
        <ellipse cx="138" cy="-148" rx="26" ry="22" fill="url(#ch_skin)" />
        {/* Thumbs up */}
        <rect x="125" y="-186" width="18" height="40" rx="9" fill="url(#ch_skin)" />

        {/* Jeans */}
        <rect x="-67" y="-62" width="58" height="250" rx="13" fill="url(#ch_hoPants)" />
        <rect x="9" y="-62" width="58" height="250" rx="13" fill="url(#ch_hoPants)" />
        <path d="M -60 -55 L -60 175" stroke="rgba(255,255,255,0.11)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Shoes */}
        <path d="M -68 185 Q -80 210 -66 218 L -10 218 Q 0 210 -10 185 Z" fill="url(#ch_boots)" />
        <rect x="-80" y="214" width="80" height="11" rx="3" fill="#1a1a1a" />
        <path d="M 8 185 Q -4 210 10 218 L 66 218 Q 76 210 64 185 Z" fill="url(#ch_boots)" />
        <rect x="-4" y="214" width="80" height="11" rx="3" fill="#1a1a1a" />
      </g>
    </g>
  );
};
