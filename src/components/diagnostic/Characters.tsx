import React from "react";

const C = {
  hatBlue: "#1565c0",
  hatBrim: "#0d47a1",
  skin: "#ffcc80",
  skinDark: "#efb865",
  shirt: "#1a237e",
  shirtLight: "#283593",
  pants: "#37474f",
  pantsDark: "#263238",
  boots: "#212121",
  belt: "#795548",
  buckle: "#ffd54f",
  glasses: "rgba(255,152,0,0.48)",
  glassesFrame: "#e65100",
  eyeColor: "#4e342e",
  hairColor: "#4e342e",
  hoShirt: "#e65100",
  hoPants: "#4a6fa5",
  hoShoes: "#4e342e",
};

interface CharProps {
  x?: number;
  y?: number;
  scale?: number;
  flip?: boolean;
}

// Technician kneeling, left arm forward (holding probe/meter)
export const TechKneeling: React.FC<CharProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      {/* Ground shadow */}
      <ellipse cx="0" cy="4" rx="90" ry="14" fill="rgba(0,0,0,0.22)" />

      {/* === HARD HAT === */}
      <path
        d="M -58 -282 Q -64 -344 0 -354 Q 64 -344 58 -282 Z"
        fill={C.hatBlue}
      />
      <rect x="-76" y="-284" width="152" height="18" rx="5" fill={C.hatBrim} />
      <rect x="-14" y="-330" width="28" height="38" rx="4" fill="rgba(255,255,255,0.14)" />

      {/* === HEAD === */}
      <ellipse cx="0" cy="-225" rx="52" ry="58" fill={C.skin} />
      <ellipse cx="-53" cy="-225" rx="9" ry="13" fill={C.skin} />
      <ellipse cx="53" cy="-225" rx="9" ry="13" fill={C.skin} />

      {/* Safety glasses */}
      <rect
        x="-50"
        y="-240"
        width="100"
        height="28"
        rx="9"
        fill={C.glasses}
      />
      <rect
        x="-50"
        y="-240"
        width="100"
        height="28"
        rx="9"
        fill="none"
        stroke={C.glassesFrame}
        strokeWidth="3"
      />
      <line x1="-5" y1="-226" x2="5" y2="-226" stroke={C.glassesFrame} strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="-20" cy="-230" r="6" fill={C.eyeColor} />
      <circle cx="20" cy="-230" r="6" fill={C.eyeColor} />
      <circle cx="-18" cy="-232" r="2.5" fill="white" />
      <circle cx="22" cy="-232" r="2.5" fill="white" />
      {/* Smile */}
      <path d="M -15 -202 Q 0 -191 15 -202" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* === NECK === */}
      <rect x="-13" y="-170" width="26" height="30" rx="5" fill={C.skin} />

      {/* === TORSO === */}
      <path
        d="M -68 -142 Q -76 -94 -74 0 L 74 0 Q 76 -94 68 -142 Q 42 -160 0 -158 Q -42 -160 -68 -142 Z"
        fill={C.shirt}
      />
      {/* Collar */}
      <path d="M -16 -158 L 0 -124 L 16 -158" fill="#e8eaf6" />
      {/* Shirt pocket */}
      <rect x="-58" y="-125" width="38" height="30" rx="3" fill="rgba(255,255,255,0.11)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      {/* Name patch */}
      <rect x="18" y="-122" width="52" height="18" rx="3" fill="rgba(255,255,255,0.13)" />

      {/* === BELT === */}
      <rect x="-76" y="-4" width="152" height="24" rx="5" fill={C.belt} />
      <rect x="-11" y="-2" width="22" height="20" rx="3" fill={C.buckle} />
      {/* Tool pouch */}
      <rect x="-72" y="-4" width="42" height="30" rx="3" fill="#6d4c41" />
      <rect x="-68" y="2" width="14" height="20" rx="2" fill="#8d6e63" />

      {/* === LEFT ARM (forward, holding meter) === */}
      <path
        d="M -68 -138 Q -105 -78 -118 -14"
        stroke={C.shirt}
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M -118 -14 Q -134 42 -140 76"
        stroke={C.skin}
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="-142" cy="88" rx="24" ry="28" fill={C.skin} />

      {/* === RIGHT ARM (support / resting) === */}
      <path
        d="M 68 -138 Q 100 -82 108 -22"
        stroke={C.shirt}
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 108 -22 Q 116 34 112 70"
        stroke={C.skin}
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="112" cy="82" rx="24" ry="26" fill={C.skin} />

      {/* === LEGS (kneeling) === */}
      {/* Left leg (forward, bent) */}
      <path
        d="M -65 20 L -76 130 Q -74 172 -58 180 L -18 180 Q -8 168 -18 130 L -14 20 Z"
        fill={C.pants}
      />
      {/* Right leg (back / kneeling) */}
      <path
        d="M 15 20 L 20 90 Q 55 132 84 142 L 106 120 Q 85 86 76 20 Z"
        fill={C.pants}
      />

      {/* Left boot */}
      <path d="M -76 168 Q -88 198 -74 206 L -14 206 Q -4 198 -16 168 Z" fill={C.boots} />
      <rect x="-88" y="202" width="80" height="12" rx="3" fill="#2a2a2a" />

      {/* Right boot (kneeling) */}
      <path d="M 84 140 Q 112 154 122 162 L 132 150 Q 118 130 106 120 Z" fill={C.boots} />
    </g>
  );
};

// Technician standing upright
export const TechStanding: React.FC<CharProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <ellipse cx="0" cy="4" rx="75" ry="12" fill="rgba(0,0,0,0.2)" />

      {/* Hard hat */}
      <path d="M -56 -398 Q -62 -460 0 -470 Q 62 -460 56 -398 Z" fill={C.hatBlue} />
      <rect x="-74" y="-400" width="148" height="18" rx="5" fill={C.hatBrim} />
      <rect x="-13" y="-448" width="26" height="36" rx="4" fill="rgba(255,255,255,0.14)" />

      {/* Head */}
      <ellipse cx="0" cy="-338" rx="50" ry="56" fill={C.skin} />
      <ellipse cx="-51" cy="-338" rx="8" ry="12" fill={C.skin} />
      <ellipse cx="51" cy="-338" rx="8" ry="12" fill={C.skin} />

      {/* Safety glasses */}
      <rect x="-48" y="-352" width="96" height="26" rx="8" fill={C.glasses} />
      <rect x="-48" y="-352" width="96" height="26" rx="8" fill="none" stroke={C.glassesFrame} strokeWidth="2.5" />
      <line x1="-4" y1="-339" x2="4" y2="-339" stroke={C.glassesFrame} strokeWidth="2" />
      <circle cx="-18" cy="-342" r="5.5" fill={C.eyeColor} />
      <circle cx="18" cy="-342" r="5.5" fill={C.eyeColor} />
      <circle cx="-16" cy="-344" r="2" fill="white" />
      <circle cx="20" cy="-344" r="2" fill="white" />
      <path d="M -14 -316 Q 0 -306 14 -316" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Neck */}
      <rect x="-13" y="-284" width="26" height="28" rx="5" fill={C.skin} />

      {/* Torso */}
      <path
        d="M -66 -258 Q -74 -196 -72 -80 L 72 -80 Q 74 -196 66 -258 Q 40 -274 0 -272 Q -40 -274 -66 -258 Z"
        fill={C.shirt}
      />
      <path d="M -15 -272 L 0 -240 L 15 -272" fill="#e8eaf6" />
      <rect x="-56" y="-238" width="36" height="28" rx="3" fill="rgba(255,255,255,0.11)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

      {/* Belt */}
      <rect x="-74" y="-82" width="148" height="22" rx="4" fill={C.belt} />
      <rect x="-10" y="-80" width="20" height="18" rx="3" fill={C.buckle} />

      {/* Left arm */}
      <path d="M -66 -254 Q -90 -194 -88 -124" stroke={C.shirt} strokeWidth="38" strokeLinecap="round" fill="none" />
      <path d="M -88 -124 Q -90 -66 -86 -32" stroke={C.skin} strokeWidth="30" strokeLinecap="round" fill="none" />

      {/* Right arm */}
      <path d="M 66 -254 Q 90 -194 88 -124" stroke={C.shirt} strokeWidth="38" strokeLinecap="round" fill="none" />
      <path d="M 88 -124 Q 90 -66 86 -32" stroke={C.skin} strokeWidth="30" strokeLinecap="round" fill="none" />

      {/* Legs */}
      <rect x="-68" y="-62" width="60" height="250" rx="14" fill={C.pants} />
      <rect x="8" y="-62" width="60" height="250" rx="14" fill={C.pantsDark} />

      {/* Left boot */}
      <path d="M -70 185 Q -82 212 -68 220 L -8 220 Q 2 212 -8 185 Z" fill={C.boots} />
      <rect x="-82" y="216" width="84" height="12" rx="3" fill="#2a2a2a" />

      {/* Right boot */}
      <path d="M 6 185 Q -6 212 8 220 L 68 220 Q 78 212 66 185 Z" fill={C.boots} />
      <rect x="-6" y="216" width="84" height="12" rx="3" fill="#2a2a2a" />
    </g>
  );
};

// Homeowner standing — frustrated arms crossed
export const HomeownerFrustrated: React.FC<CharProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <ellipse cx="0" cy="4" rx="70" ry="12" fill="rgba(0,0,0,0.2)" />

      {/* Hair */}
      <ellipse cx="0" cy="-378" rx="52" ry="38" fill={C.hairColor} />
      <ellipse cx="-46" cy="-356" rx="14" ry="26" fill={C.hairColor} />
      <ellipse cx="46" cy="-356" rx="14" ry="26" fill={C.hairColor} />

      {/* Head */}
      <ellipse cx="0" cy="-340" rx="50" ry="56" fill={C.skin} />
      <ellipse cx="-51" cy="-338" rx="8" ry="12" fill={C.skin} />
      <ellipse cx="51" cy="-338" rx="8" ry="12" fill={C.skin} />

      {/* Eyebrows (frustrated) */}
      <path d="M -22 -362 Q -14 -370 -6 -364" stroke={C.hairColor} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 6 -364 Q 14 -370 22 -362" stroke={C.hairColor} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="-15" cy="-348" rx="9" ry="8" fill="#fff" />
      <ellipse cx="15" cy="-348" rx="9" ry="8" fill="#fff" />
      <circle cx="-15" cy="-348" r="6" fill={C.eyeColor} />
      <circle cx="15" cy="-348" r="6" fill={C.eyeColor} />
      <circle cx="-13" cy="-350" r="2.5" fill="white" />
      <circle cx="17" cy="-350" r="2.5" fill="white" />

      {/* Nose */}
      <path d="M -4 -332 Q 0 -326 4 -332" stroke={C.skinDark} strokeWidth="2.5" fill="none" />

      {/* Frown mouth */}
      <path d="M -14 -316 Q 0 -322 14 -316" stroke={C.skinDark} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Neck */}
      <rect x="-12" y="-286" width="24" height="28" rx="5" fill={C.skin} />

      {/* T-shirt */}
      <path
        d="M -64 -260 Q -72 -190 -70 -80 L 70 -80 Q 72 -190 64 -260 Q 38 -276 0 -274 Q -38 -276 -64 -260 Z"
        fill={C.hoShirt}
      />
      {/* Neckline */}
      <path d="M -18 -274 Q 0 -255 18 -274" fill="none" stroke="#bf360c" strokeWidth="3" strokeLinecap="round" />

      {/* Arms crossed */}
      {/* Right arm over left */}
      <path d="M 64 -256 Q 88 -196 74 -148 Q 52 -132 -60 -140" stroke={C.hoShirt} strokeWidth="36" strokeLinecap="round" fill="none" />
      {/* Left arm under */}
      <path d="M -64 -256 Q -88 -196 -72 -148 Q -54 -132 62 -140" stroke={C.hoShirt} strokeWidth="36" strokeLinecap="round" fill="none" />
      {/* Hands */}
      <ellipse cx="-68" cy="-140" rx="26" ry="22" fill={C.skin} />
      <ellipse cx="68" cy="-140" rx="26" ry="22" fill={C.skin} />

      {/* Jeans */}
      <rect x="-67" y="-62" width="58" height="250" rx="13" fill={C.hoPants} />
      <rect x="9" y="-62" width="58" height="250" rx="13" fill="#3d5a8a" />
      {/* Jean pockets */}
      <path d="M -67 -50 Q -48 -20 -8 -50" fill="none" stroke="#5c7db5" strokeWidth="2" />
      <path d="M 9 -50 Q 30 -20 67 -50" fill="none" stroke="#5c7db5" strokeWidth="2" />

      {/* Shoes */}
      <path d="M -68 185 Q -80 210 -66 218 L -10 218 Q 0 210 -10 185 Z" fill={C.hoShoes} />
      <rect x="-80" y="214" width="80" height="11" rx="3" fill="#3e2723" />
      <path d="M 8 185 Q -4 210 10 218 L 66 218 Q 76 210 64 185 Z" fill={C.hoShoes} />
      <rect x="-4" y="214" width="80" height="11" rx="3" fill="#3e2723" />
    </g>
  );
};

// Homeowner happy / gesturing (arms out)
export const HomeownerHappy: React.FC<CharProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  flip = false,
}) => {
  const sx = flip ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${scale * sx},${scale})`}>
      <ellipse cx="0" cy="4" rx="70" ry="12" fill="rgba(0,0,0,0.2)" />

      {/* Hair */}
      <ellipse cx="0" cy="-378" rx="52" ry="38" fill={C.hairColor} />
      <ellipse cx="-46" cy="-356" rx="14" ry="26" fill={C.hairColor} />
      <ellipse cx="46" cy="-356" rx="14" ry="26" fill={C.hairColor} />

      {/* Head */}
      <ellipse cx="0" cy="-340" rx="50" ry="56" fill={C.skin} />
      <ellipse cx="-51" cy="-338" rx="8" ry="12" fill={C.skin} />
      <ellipse cx="51" cy="-338" rx="8" ry="12" fill={C.skin} />

      {/* Eyebrows (raised/happy) */}
      <path d="M -22 -366 Q -14 -374 -6 -366" stroke={C.hairColor} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 6 -366 Q 14 -374 22 -366" stroke={C.hairColor} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Happy eyes */}
      <ellipse cx="-15" cy="-348" rx="9" ry="8" fill="#fff" />
      <ellipse cx="15" cy="-348" rx="9" ry="8" fill="#fff" />
      <circle cx="-15" cy="-348" r="6" fill={C.eyeColor} />
      <circle cx="15" cy="-348" r="6" fill={C.eyeColor} />
      <circle cx="-13" cy="-350" r="2.5" fill="white" />
      <circle cx="17" cy="-350" r="2.5" fill="white" />
      {/* Cheek blush */}
      <ellipse cx="-30" cy="-330" rx="12" ry="7" fill="rgba(255,120,100,0.3)" />
      <ellipse cx="30" cy="-330" rx="12" ry="7" fill="rgba(255,120,100,0.3)" />

      {/* Big smile */}
      <path d="M -18 -312 Q 0 -298 18 -312" stroke={C.skinDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Neck */}
      <rect x="-12" y="-286" width="24" height="28" rx="5" fill={C.skin} />

      {/* T-shirt */}
      <path
        d="M -64 -260 Q -72 -190 -70 -80 L 70 -80 Q 72 -190 64 -260 Q 38 -276 0 -274 Q -38 -276 -64 -260 Z"
        fill={C.hoShirt}
      />
      <path d="M -18 -274 Q 0 -255 18 -274" fill="none" stroke="#bf360c" strokeWidth="3" strokeLinecap="round" />

      {/* Arms out / gesturing */}
      <path d="M -64 -256 Q -110 -210 -130 -160" stroke={C.hoShirt} strokeWidth="36" strokeLinecap="round" fill="none" />
      <ellipse cx="-136" cy="-148" rx="26" ry="22" fill={C.skin} />

      <path d="M 64 -256 Q 110 -210 130 -160" stroke={C.hoShirt} strokeWidth="36" strokeLinecap="round" fill="none" />
      {/* Thumbs up hand */}
      <ellipse cx="138" cy="-148" rx="26" ry="22" fill={C.skin} />
      {/* Thumb up */}
      <rect x="125" y="-186" width="18" height="40" rx="9" fill={C.skin} />

      {/* Jeans */}
      <rect x="-67" y="-62" width="58" height="250" rx="13" fill={C.hoPants} />
      <rect x="9" y="-62" width="58" height="250" rx="13" fill="#3d5a8a" />

      {/* Shoes */}
      <path d="M -68 185 Q -80 210 -66 218 L -10 218 Q 0 210 -10 185 Z" fill={C.hoShoes} />
      <rect x="-80" y="214" width="80" height="11" rx="3" fill="#3e2723" />
      <path d="M 8 185 Q -4 210 10 218 L 66 218 Q 76 210 64 185 Z" fill={C.hoShoes} />
      <rect x="-4" y="214" width="80" height="11" rx="3" fill="#3e2723" />
    </g>
  );
};
