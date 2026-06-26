import React from "react";

interface CondenserProps {
  panelOpen?: boolean;
  fanDeg?: number;
  running?: boolean;
}

// 2.5D isometric condenser — front face + right side + top visible
// Perspective offset: 90px right = 28px up (matches scene background ratio)
export const CondenserUnit: React.FC<CondenserProps> = ({
  panelOpen = false,
  fanDeg = 0,
  running = false,
}) => (
  <svg
    viewBox="0 0 380 520"
    style={{ width: "100%", height: "100%", overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Front face: medium grey with subtle top-light */}
      <linearGradient id="eq_front" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b0bec5" />
        <stop offset="40%" stopColor="#90a4ae" />
        <stop offset="100%" stopColor="#607d8b" />
      </linearGradient>
      {/* Right side face: darker (in shadow) */}
      <linearGradient id="eq_side" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#78909c" />
        <stop offset="100%" stopColor="#4a6572" />
      </linearGradient>
      {/* Top face: sky-lit, lightest */}
      <linearGradient id="eq_top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#cfd8dc" />
        <stop offset="60%" stopColor="#b0bec5" />
        <stop offset="100%" stopColor="#90a4ae" />
      </linearGradient>
      {/* Grille: dark grid */}
      <linearGradient id="eq_grille" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#546e7a" />
        <stop offset="100%" stopColor="#37474f" />
      </linearGradient>
      {/* Fan hub */}
      <radialGradient id="eq_fanHub" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#607d8b" />
        <stop offset="100%" stopColor="#37474f" />
      </radialGradient>
      {/* Capacitor body */}
      <linearGradient id="eq_capBody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffe082" />
        <stop offset="45%" stopColor="#ffd54f" />
        <stop offset="100%" stopColor="#ffca28" />
      </linearGradient>
      {/* Drop shadow filter */}
      <filter id="eq_shadow" x="-10%" y="-5%" width="120%" height="130%">
        <feDropShadow dx="8" dy="14" stdDeviation="12" floodColor="rgba(0,0,0,0.48)" />
      </filter>
    </defs>

    {/* Ground shadow */}
    <ellipse cx="148" cy="500" rx="172" ry="16" fill="rgba(0,0,0,0.32)" />

    <g filter="url(#eq_shadow)">
      {/* ── TOP FACE (sky-lit) ── */}
      {/* Outline: front-left(20,118), front-right(250,118), back-right(340,90), back-left(110,90) */}
      <polygon points="20,118 250,118 340,90 110,90" fill="url(#eq_top)" />
      {/* Top face panel lines */}
      <line x1="110" y1="90" x2="20" y2="118" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="340" y1="90" x2="250" y2="118" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

      {/* ── FAN HOUSING on top face ── */}
      {/* Outer rim ellipse (isometric circle on top plane) */}
      <ellipse cx="166" cy="102" rx="96" ry="24" fill="#78909c" />
      <ellipse cx="166" cy="99" rx="86" ry="20" fill="#607d8b" />
      {/* Fan blade ring shadow */}
      <ellipse cx="166" cy="100" rx="78" ry="18" fill="#546e7a" />

      {/* Fan blades — foreshortened to match top plane */}
      <g transform={`rotate(${fanDeg}, 166, 100)`}>
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const rad2 = ((angle + 52) * Math.PI) / 180;
          const cx = 166, cy = 100;
          const scaleY = 0.22; // foreshorten Y axis for isometric top plane
          const bx1 = Math.cos(rad) * 24,   by1 = Math.sin(rad) * 24 * scaleY;
          const bx2 = Math.cos(rad2) * 72,  by2 = Math.sin(rad2) * 72 * scaleY;
          const bx3 = Math.cos((rad + rad2) / 2) * 76, by3 = Math.sin((rad + rad2) / 2) * 76 * scaleY;
          return (
            <path
              key={angle}
              d={`M ${cx} ${cy} C ${cx + bx1} ${cy + by1} ${cx + bx2} ${cy + by2} ${cx + bx3} ${cy + by3} Z`}
              fill={running ? "#37474f" : "#455a64"}
              opacity="0.9"
            />
          );
        })}
        <ellipse cx="166" cy="100" rx="14" ry="4" fill="url(#eq_fanHub)" />
        <ellipse cx="166" cy="100" rx="7" ry="2" fill="#78909c" />
      </g>

      {/* ── RIGHT SIDE FACE (shadow) ── */}
      <polygon points="250,118 340,90 340,450 250,478" fill="url(#eq_side)" />
      {/* Side siding lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1="250" y1={142 + i * 32}
          x2="340" y2={114 + i * 32}
          stroke="rgba(0,0,0,0.07)" strokeWidth="1.2"
        />
      ))}
      {/* Copper refrigerant lines on side */}
      <rect x="290" y="428" width="18" height="28" rx="4" fill="#b87333" />
      <rect x="314" y="428" width="13" height="28" rx="3" fill="#b87333" />
      <rect x="288" y="422" width="22" height="11" rx="4" fill="#333" />

      {/* ── FRONT FACE ── */}
      <rect x="20" y="118" width="230" height="360" fill="url(#eq_front)" />

      {/* Front face horizontal siding lines */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1="20" y1={140 + i * 24}
          x2="250" y2={140 + i * 24}
          stroke="rgba(0,0,0,0.06)" strokeWidth="1.5"
        />
      ))}

      {/* Corner trim (left edge — catches light) */}
      <rect x="20" y="118" width="16" height="360" fill="rgba(255,255,255,0.12)" />
      {/* Top edge highlight */}
      <rect x="20" y="118" width="230" height="8" fill="rgba(255,255,255,0.15)" />

      {/* Front grille (main air intake) */}
      <rect x="34" y="148" width="202" height="240" rx="4" fill="url(#eq_grille)" />
      {/* Grille horizontal slats */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`gh${i}`}
          x1="34" y1={161 + i * 17}
          x2="236" y2={161 + i * 17}
          stroke="#455a64" strokeWidth="3"
        />
      ))}
      {/* Grille vertical divisions */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`gv${i}`}
          x1={62 + i * 32} y1="148"
          x2={62 + i * 32} y2="388"
          stroke="#455a64" strokeWidth="1.5"
          opacity="0.45"
        />
      ))}
      {/* Grille inner shadow (depth effect) */}
      <rect x="34" y="148" width="202" height="10" fill="rgba(0,0,0,0.18)" />
      <rect x="34" y="378" width="202" height="10" fill="rgba(0,0,0,0.12)" />

      {/* Bottom service panels */}
      <rect x="20" y="392" width="110" height="46" rx="4" fill="#78909c" />
      <rect x="136" y="392" width="114" height="46" rx="4" fill="#78909c" />
      {/* Panel screws */}
      <circle cx="30" cy="415" r="5" fill="#546e7a" />
      <circle cx="120" cy="415" r="5" fill="#546e7a" />
      <circle cx="146" cy="415" r="5" fill="#546e7a" />
      <circle cx="240" cy="415" r="5" fill="#546e7a" />

      {/* Open panel (flap down) */}
      {panelOpen && (
        <g>
          <rect x="20" y="440" width="110" height="46" rx="4" fill="#90a4ae" />
          {/* Capacitor inside panel */}
          <rect x="60" y="392" width="30" height="56" rx="4" fill="url(#eq_capBody)" />
          <rect x="63" y="395" width="24" height="50" rx="3" fill="#ffd54f" />
          {/* Capacitor terminals */}
          <circle cx="70" cy="392" r="5" fill="#9e9e9e" />
          <circle cx="82" cy="392" r="5" fill="#9e9e9e" />
          {/* Label */}
          <rect x="65" y="412" width="18" height="18" rx="1" fill="rgba(0,0,0,0.35)" />
        </g>
      )}

      {/* Unit base/feet */}
      <rect x="20" y="442" width="230" height="16" rx="3" fill="#78909c" />
      <rect x="28" y="454" width="50" height="14" rx="3" fill="#607d8b" />
      <rect x="200" y="454" width="50" height="14" rx="3" fill="#607d8b" />
    </g>

    {/* Running LED */}
    {running ? (
      <circle cx="228" cy="134" r="9" fill="#00e676">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
    ) : (
      <circle cx="228" cy="134" r="9" fill="#ef5350" />
    )}
    <circle cx="228" cy="134" r="9" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
  </svg>
);

// Digital multimeter — enhanced with 3D body depth
export const MultimeterDevice: React.FC<{
  reading: string;
  unit: string;
  mode?: string;
}> = ({ reading, unit, mode = "CAP" }) => (
  <svg
    viewBox="0 0 240 380"
    style={{ width: "100%", height: "100%", overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="eq_meterBody" x1="0.1" y1="0" x2="0.9" y2="1">
        <stop offset="0%" stopColor="#3a3a3a" />
        <stop offset="45%" stopColor="#2a2a2a" />
        <stop offset="100%" stopColor="#141414" />
      </linearGradient>
      <linearGradient id="eq_display" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c1e0c" />
        <stop offset="100%" stopColor="#041004" />
      </linearGradient>
      <filter id="eq_meterShadow" x="-15%" y="-5%" width="130%" height="125%">
        <feDropShadow dx="6" dy="10" stdDeviation="9" floodColor="rgba(0,0,0,0.55)" />
      </filter>
    </defs>

    <g filter="url(#eq_meterShadow)">
      {/* Body */}
      <rect x="5" y="5" width="230" height="370" rx="22" fill="url(#eq_meterBody)" />
      <rect x="5" y="5" width="230" height="370" rx="22" fill="none" stroke="#555" strokeWidth="3" />
      {/* Body highlight left edge */}
      <path d="M 5 27 Q 5 5 27 5 L 5 5 Z" fill="rgba(255,255,255,0.08)" />
      <rect x="5" y="5" width="8" height="370" rx="4" fill="rgba(255,255,255,0.06)" />

      {/* Yellow stripe */}
      <rect x="5" y="108" width="230" height="28" fill="#f9a825" />
      <rect x="5" y="124" width="230" height="12" fill="#f57f17" />
      <rect x="5" y="108" width="230" height="6" fill="rgba(255,255,255,0.2)" />

      {/* Display panel */}
      <rect x="22" y="22" width="196" height="100" rx="8" fill="#111" />
      <rect x="26" y="26" width="188" height="92" rx="6" fill="url(#eq_display)" />
      <rect x="26" y="26" width="188" height="92" rx="6" fill="none" stroke="#1a3a1a" strokeWidth="1.5" />
      {/* Display glass reflection */}
      <rect x="28" y="28" width="80" height="18" rx="4" fill="rgba(100,200,100,0.06)" />

      {/* Mode label */}
      <text x="118" y="48" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="14" fill="#39ff14" opacity="0.7" letterSpacing="2">{mode}</text>

      {/* Reading */}
      <text x="118" y="98" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="38" fontWeight="bold" fill="#39ff14" style={{ filter: "drop-shadow(0 0 10px #39ff1466)" }}>{reading}</text>

      {/* Unit */}
      <text x="195" y="110" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="16" fill="#39ff14" opacity="0.85">{unit}</text>

      {/* Rotary dial */}
      <circle cx="118" cy="195" r="52" fill="#2e2e2e" />
      <circle cx="118" cy="195" r="52" fill="none" stroke="#505050" strokeWidth="3" />
      <circle cx="118" cy="195" r="36" fill="#1e1e1e" />
      {/* Dial gloss */}
      <ellipse cx="104" cy="182" rx="16" ry="10" fill="rgba(255,255,255,0.06)" />
      {/* Dial markings */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line key={a}
            x1={118 + Math.cos(rad) * 40} y1={195 + Math.sin(rad) * 40}
            x2={118 + Math.cos(rad) * 48} y2={195 + Math.sin(rad) * 48}
            stroke="#666" strokeWidth="2"
          />
        );
      })}
      {/* Pointer at CAP position */}
      <line x1="118" y1="195" x2={118 + Math.cos((-45 * Math.PI) / 180) * 32} y2={195 + Math.sin((-45 * Math.PI) / 180) * 32} stroke="#f9a825" strokeWidth="4" strokeLinecap="round" />
      <circle cx="118" cy="195" r="6" fill="#f9a825" />

      {/* Dial labels */}
      <text x="155" y="162" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">CAP</text>
      <text x="168" y="195" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">V</text>
      <text x="155" y="232" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">A</text>

      {/* Input jacks */}
      <circle cx="72" cy="296" r="14" fill="#1c1c1c" stroke="#444" strokeWidth="2" />
      <circle cx="72" cy="296" r="7" fill="black" />
      <circle cx="118" cy="296" r="14" fill="#1c1c1c" stroke="#444" strokeWidth="2" />
      <circle cx="118" cy="296" r="7" fill="black" />
      <circle cx="168" cy="296" r="14" fill="#1c1c1c" stroke="#444" strokeWidth="2" />
      <circle cx="168" cy="296" r="7" fill="black" />

      {/* Jack labels */}
      <text x="72" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">COM</text>
      <text x="118" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">VΩ</text>
      <text x="168" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">mA</text>

      {/* Brand */}
      <text x="118" y="352" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#666" letterSpacing="2">FLUKE 117</text>

      {/* Probes */}
      <line x1="130" y1="375" x2="145" y2="440" stroke="#e53935" strokeWidth="4" />
      <circle cx="147" cy="444" r="5" fill="#e53935" />
      <line x1="106" y1="375" x2="90" y2="440" stroke="#212121" strokeWidth="4" />
      <circle cx="88" cy="444" r="5" fill="#212121" />
    </g>
  </svg>
);

// Capacitor close-up — cylindrical with metallic gradient shading
export const CapacitorCloseup: React.FC<{ failed?: boolean }> = ({
  failed = false,
}) => (
  <svg
    viewBox="0 0 180 300"
    style={{ width: "100%", height: "100%" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Cylinder body: bright left edge, dark right */}
      <linearGradient id="eq_capBody2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffe57f" />
        <stop offset="18%" stopColor="#ffd54f" />
        <stop offset="60%" stopColor="#ffca28" />
        <stop offset="88%" stopColor="#f0b800" />
        <stop offset="100%" stopColor="#d4a000" />
      </linearGradient>
      {/* Top cap */}
      <radialGradient id="eq_capTop" cx="38%" cy="35%" r="62%">
        <stop offset="0%" stopColor={failed ? "#ff8a80" : "#c8c8c8"} />
        <stop offset="70%" stopColor={failed ? "#ef5350" : "#9e9e9e"} />
        <stop offset="100%" stopColor={failed ? "#b71c1c" : "#757575"} />
      </radialGradient>
      <filter id="eq_capShadow" x="-15%" y="-5%" width="130%" height="120%">
        <feDropShadow dx="5" dy="8" stdDeviation="8" floodColor="rgba(0,0,0,0.5)" />
      </filter>
    </defs>

    <g filter="url(#eq_capShadow)">
      {/* Cylinder body */}
      <rect x="30" y="40" width="120" height="220" rx="4" fill="url(#eq_capBody2)" />
      <rect x="30" y="40" width="120" height="220" rx="4" fill="none" stroke="#e6a800" strokeWidth="2.5" />
      {/* Left edge highlight */}
      <rect x="30" y="44" width="12" height="212" rx="4" fill="rgba(255,255,255,0.28)" />
      {/* Right edge shadow */}
      <rect x="138" y="44" width="12" height="212" rx="4" fill="rgba(0,0,0,0.18)" />

      {/* Top ellipse (isometric cylinder cap look) */}
      <ellipse cx="90" cy="40" rx="60" ry="14" fill="url(#eq_capTop)" />
      {failed && (
        /* Bulged/domed top — failure sign */
        <path d="M 32 40 Q 90 22 148 40" fill="none" stroke="#b71c1c" strokeWidth="3" />
      )}

      {/* Terminals */}
      <rect x="66" y="8" width="14" height="26" rx="3" fill="#bdbdbd" />
      <rect x="66" y="8" width="14" height="26" rx="3" fill="none" stroke="#9e9e9e" strokeWidth="1.5" />
      <rect x="100" y="8" width="14" height="26" rx="3" fill="#bdbdbd" />
      <rect x="100" y="8" width="14" height="26" rx="3" fill="none" stroke="#9e9e9e" strokeWidth="1.5" />
      {/* Terminal top highlight */}
      <rect x="67" y="9" width="12" height="6" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="101" y="9" width="12" height="6" rx="2" fill="rgba(255,255,255,0.4)" />

      {/* Rating label panel */}
      <rect x="40" y="80" width="100" height="120" rx="4" fill="rgba(0,0,0,0.22)" />
      <text x="90" y="108" textAnchor="middle" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="white">DUAL RUN</text>
      <text x="90" y="132" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">45+5</text>
      <text x="90" y="154" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="white">µF  440V</text>
      <text x="90" y="178" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="rgba(255,255,255,0.7)">HVAC PRO</text>

      {/* Vent grooves at bottom */}
      {failed && (
        <>
          <line x1="40" y1="228" x2="140" y2="228" stroke="#e6a800" strokeWidth="2" opacity="0.6" />
          <line x1="40" y1="238" x2="140" y2="238" stroke="#e6a800" strokeWidth="2" opacity="0.6" />
          {/* Scorch mark */}
          <path d="M 52 252 Q 90 242 128 256" stroke="#5d2f00" strokeWidth="3.5" fill="none" opacity="0.65" />
          {/* Burn discoloration */}
          <ellipse cx="90" cy="252" rx="30" ry="10" fill="rgba(80,20,0,0.3)" />
        </>
      )}

      {/* Bottom */}
      <rect x="30" y="248" width="120" height="12" rx="4" fill="#c8930a" />
      <ellipse cx="90" cy="260" rx="60" ry="8" fill="#b07800" />
    </g>
  </svg>
);
