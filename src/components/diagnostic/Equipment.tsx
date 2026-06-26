import React from "react";

interface CondenserProps {
  panelOpen?: boolean;
  fanDeg?: number;
  running?: boolean;
}

export const CondenserUnit: React.FC<CondenserProps> = ({
  panelOpen = false,
  fanDeg = 0,
  running = false,
}) => (
  <svg
    viewBox="0 0 320 460"
    style={{ width: "100%", height: "100%", overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="eq_cabinetG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#90a4ae" />
        <stop offset="40%" stopColor="#b0bec5" />
        <stop offset="100%" stopColor="#78909c" />
      </linearGradient>
      <linearGradient id="eq_topG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#78909c" />
        <stop offset="100%" stopColor="#546e7a" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <ellipse cx="160" cy="452" rx="140" ry="14" fill="rgba(0,0,0,0.3)" />

    {/* Cabinet body */}
    <rect x="10" y="95" width="300" height="345" rx="8" fill="url(#eq_cabinetG)" />

    {/* Panel seam lines */}
    <line x1="10" y1="135" x2="310" y2="135" stroke="#78909c" strokeWidth="2" />
    <line x1="10" y1="388" x2="310" y2="388" stroke="#78909c" strokeWidth="2" />

    {/* Top cap */}
    <rect x="10" y="95" width="300" height="44" rx="8" fill="url(#eq_topG)" />

    {/* Front grille */}
    <rect x="22" y="146" width="276" height="234" rx="4" fill="#607d8b" />
    {Array.from({ length: 11 }).map((_, i) => (
      <line
        key={`h${i}`}
        x1="22"
        y1={163 + i * 20}
        x2="298"
        y2={163 + i * 20}
        stroke="#546e7a"
        strokeWidth="3"
      />
    ))}
    {Array.from({ length: 8 }).map((_, i) => (
      <line
        key={`v${i}`}
        x1={52 + i * 34}
        y1="146"
        x2={52 + i * 34}
        y2="380"
        stroke="#546e7a"
        strokeWidth="1.5"
        opacity="0.5"
      />
    ))}

    {/* Bottom service panel */}
    <rect x="22" y="390" width="125" height="44" rx="4" fill="#78909c" />
    <rect x="153" y="390" width="145" height="44" rx="4" fill="#78909c" />
    {/* Screws */}
    <circle cx="32" cy="412" r="5" fill="#546e7a" />
    <circle cx="137" cy="412" r="5" fill="#546e7a" />
    <circle cx="163" cy="412" r="5" fill="#546e7a" />
    <circle cx="288" cy="412" r="5" fill="#546e7a" />

    {/* Open panel (flap) */}
    {panelOpen && (
      <g>
        <rect x="22" y="435" width="125" height="44" rx="4" fill="#90a4ae" />
        {/* Capacitor inside */}
        <rect x="70" y="390" width="32" height="60" rx="4" fill="#ffd54f" />
        <rect x="73" y="393" width="26" height="54" rx="3" fill="#ffca28" />
        <rect x="76" y="396" width="20" height="48" rx="2" fill="#f9a825" />
        {/* Capacitor terminals */}
        <circle cx="84" cy="390" r="5" fill="#9e9e9e" />
        <circle cx="98" cy="390" r="5" fill="#9e9e9e" />
        {/* Capacitor label */}
        <rect x="76" y="410" width="20" height="16" rx="1" fill="rgba(0,0,0,0.35)" />
      </g>
    )}

    {/* Copper refrigerant lines */}
    <rect x="230" y="430" width="20" height="30" rx="4" fill="#b87333" />
    <rect x="256" y="430" width="14" height="30" rx="3" fill="#b87333" />
    {/* Line insulation */}
    <rect x="228" y="424" width="24" height="12" rx="4" fill="#424242" />

    {/* Unit feet/stand */}
    <rect x="20" y="434" width="280" height="16" rx="3" fill="#90a4ae" />
    <rect x="30" y="446" width="50" height="14" rx="3" fill="#78909c" />
    <rect x="240" y="446" width="50" height="14" rx="3" fill="#78909c" />

    {/* === FAN HOUSING (top) === */}
    <ellipse cx="160" cy="96" rx="138" ry="36" fill="#78909c" />
    <ellipse cx="160" cy="90" rx="128" ry="30" fill="#607d8b" />
    <ellipse cx="160" cy="86" rx="118" ry="25" fill="#546e7a" />

    {/* Fan blades */}
    <g transform={`rotate(${fanDeg}, 160, 88)`}>
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const rad2 = ((angle + 50) * Math.PI) / 180;
        const cx = 160;
        const cy = 88;
        return (
          <path
            key={angle}
            d={`M ${cx} ${cy}
               C ${cx + Math.cos(rad) * 28} ${cy + Math.sin(rad) * 28}
                 ${cx + Math.cos(rad2) * 108} ${cy + Math.sin(rad2) * 108}
                 ${cx + Math.cos((rad + rad2) / 2) * 116} ${cy + Math.sin((rad + rad2) / 2) * 116}
               Z`}
            fill={running ? "#37474f" : "#455a64"}
            opacity="0.88"
          />
        );
      })}
      <circle cx="160" cy="88" r="16" fill="#37474f" />
      <circle cx="160" cy="88" r="8" fill="#546e7a" />
    </g>

    {/* Running LED indicator */}
    {running && (
      <circle cx="282" cy="110" r="9" fill="#00e676">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
    )}
    {!running && (
      <circle cx="282" cy="110" r="9" fill="#ef5350" />
    )}
    <circle cx="282" cy="110" r="9" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
  </svg>
);

// Digital multimeter handheld unit
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
      <linearGradient id="eq_meterBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a2a2a" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <linearGradient id="eq_display" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1a0a" />
        <stop offset="100%" stopColor="#051005" />
      </linearGradient>
    </defs>

    {/* Body */}
    <rect x="5" y="5" width="230" height="370" rx="22" fill="url(#eq_meterBody)" />
    <rect x="5" y="5" width="230" height="370" rx="22" fill="none" stroke="#444" strokeWidth="3" />

    {/* Yellow stripe */}
    <rect x="5" y="108" width="230" height="28" fill="#f9a825" />
    <rect x="5" y="124" width="230" height="12" fill="#f57f17" />

    {/* Display panel */}
    <rect x="22" y="22" width="196" height="100" rx="8" fill="#111" />
    <rect x="26" y="26" width="188" height="92" rx="6" fill="url(#eq_display)" />
    <rect x="26" y="26" width="188" height="92" rx="6" fill="none" stroke="#2a4a2a" strokeWidth="1.5" />

    {/* Mode label on display */}
    <text
      x="118"
      y="48"
      textAnchor="middle"
      fontFamily="'Courier New', monospace"
      fontSize="14"
      fill="#39ff14"
      opacity="0.7"
      letterSpacing="2"
    >
      {mode}
    </text>

    {/* Reading */}
    <text
      x="118"
      y="98"
      textAnchor="middle"
      fontFamily="'Courier New', monospace"
      fontSize="38"
      fontWeight="bold"
      fill="#39ff14"
      style={{ filter: "drop-shadow(0 0 8px #39ff1466)" }}
    >
      {reading}
    </text>

    {/* Unit on display */}
    <text
      x="195"
      y="110"
      textAnchor="middle"
      fontFamily="'Courier New', monospace"
      fontSize="16"
      fill="#39ff14"
      opacity="0.85"
    >
      {unit}
    </text>

    {/* Rotary dial */}
    <circle cx="118" cy="195" r="52" fill="#333" />
    <circle cx="118" cy="195" r="52" fill="none" stroke="#555" strokeWidth="3" />
    <circle cx="118" cy="195" r="36" fill="#222" />
    {/* Dial markings */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const rad = (a * Math.PI) / 180;
      return (
        <line
          key={a}
          x1={118 + Math.cos(rad) * 40}
          y1={195 + Math.sin(rad) * 40}
          x2={118 + Math.cos(rad) * 48}
          y2={195 + Math.sin(rad) * 48}
          stroke="#666"
          strokeWidth="2"
        />
      );
    })}
    {/* Pointer at CAP position (approx -45 deg) */}
    <line
      x1="118"
      y1="195"
      x2={118 + Math.cos((-45 * Math.PI) / 180) * 32}
      y2={195 + Math.sin((-45 * Math.PI) / 180) * 32}
      stroke="#f9a825"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="118" cy="195" r="6" fill="#f9a825" />

    {/* Mode labels on dial */}
    <text x="155" y="162" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">CAP</text>
    <text x="168" y="195" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">V</text>
    <text x="155" y="232" fontFamily="Arial" fontSize="9" fill="#aaa" textAnchor="middle">A</text>

    {/* Input jacks */}
    <circle cx="72" cy="296" r="14" fill="#222" stroke="#444" strokeWidth="2" />
    <circle cx="72" cy="296" r="7" fill="black" />
    <circle cx="118" cy="296" r="14" fill="#222" stroke="#444" strokeWidth="2" />
    <circle cx="118" cy="296" r="7" fill="black" />
    <circle cx="168" cy="296" r="14" fill="#222" stroke="#444" strokeWidth="2" />
    <circle cx="168" cy="296" r="7" fill="black" />

    {/* Jack labels */}
    <text x="72" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">COM</text>
    <text x="118" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">VΩ</text>
    <text x="168" y="318" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="#888">mA</text>

    {/* Brand label */}
    <text x="118" y="352" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#666" letterSpacing="2">FLUKE 117</text>

    {/* Probes hanging below */}
    {/* Red probe */}
    <line x1="130" y1="375" x2="145" y2="440" stroke="#e53935" strokeWidth="4" />
    <circle cx="147" cy="444" r="5" fill="#e53935" />
    {/* Black probe */}
    <line x1="106" y1="375" x2="90" y2="440" stroke="#212121" strokeWidth="4" />
    <circle cx="88" cy="444" r="5" fill="#212121" />
  </svg>
);

// Capacitor component up-close
export const CapacitorCloseup: React.FC<{ failed?: boolean }> = ({
  failed = false,
}) => (
  <svg
    viewBox="0 0 180 300"
    style={{ width: "100%", height: "100%" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="eq_capBody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffca28" />
        <stop offset="50%" stopColor="#ffd54f" />
        <stop offset="100%" stopColor="#ffca28" />
      </linearGradient>
    </defs>

    {/* Body */}
    <rect x="30" y="40" width="120" height="220" rx="12" fill="url(#eq_capBody)" />
    <rect x="30" y="40" width="120" height="220" rx="12" fill="none" stroke="#f57f17" strokeWidth="3" />

    {/* Top cap */}
    <rect x="30" y="30" width="120" height="22" rx="8" fill={failed ? "#ef5350" : "#9e9e9e"} />
    {/* Bulged top (failed) */}
    {failed && (
      <path
        d="M 30 36 Q 90 18 150 36"
        fill={failed ? "#e53935" : "none"}
        stroke={failed ? "#b71c1c" : "none"}
        strokeWidth="2"
      />
    )}

    {/* Terminals */}
    <rect x="66" y="8" width="14" height="26" rx="3" fill="#9e9e9e" />
    <rect x="100" y="8" width="14" height="26" rx="3" fill="#9e9e9e" />

    {/* Rating label */}
    <rect x="40" y="80" width="100" height="120" rx="4" fill="rgba(0,0,0,0.2)" />
    <text x="90" y="108" textAnchor="middle" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="white">DUAL RUN</text>
    <text x="90" y="130" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">45+5</text>
    <text x="90" y="152" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="white">µF  440V</text>
    {/* Brand */}
    <text x="90" y="178" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="rgba(255,255,255,0.7)">HVAC PRO</text>

    {/* Vent grooves at bottom */}
    {failed && (
      <>
        <line x1="40" y1="228" x2="140" y2="228" stroke="#f57f17" strokeWidth="2" opacity="0.6" />
        <line x1="40" y1="238" x2="140" y2="238" stroke="#f57f17" strokeWidth="2" opacity="0.6" />
        {/* Scorched mark (failed) */}
        <path
          d="M 55 250 Q 90 240 125 255"
          stroke="#5d2f00"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
      </>
    )}

    {/* Bottom */}
    <rect x="30" y="248" width="120" height="12" rx="4" fill="#f57f17" />
  </svg>
);
