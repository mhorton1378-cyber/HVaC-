import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const AMBER = "#F59E0B";
const DARK_BG = "#090805";
const WARM_DARK = "#130F07";
const BORDER = `2px solid rgba(245, 158, 11, 0.55)`;
const MARGIN = 28;
const BRACKET_SIZE = 28;

const CornerBrackets: React.FC = () => {
  const b: React.CSSProperties = {
    position: "absolute",
    width: BRACKET_SIZE,
    height: BRACKET_SIZE,
  };
  return (
    <>
      <div style={{ ...b, top: MARGIN, left: MARGIN, borderTop: BORDER, borderLeft: BORDER }} />
      <div style={{ ...b, top: MARGIN, right: MARGIN, borderTop: BORDER, borderRight: BORDER }} />
      <div style={{ ...b, bottom: MARGIN, left: MARGIN, borderBottom: BORDER, borderLeft: BORDER }} />
      <div style={{ ...b, bottom: MARGIN, right: MARGIN, borderBottom: BORDER, borderRight: BORDER }} />
    </>
  );
};

export const AmberHudBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const scanY = interpolate(frame % 150, [0, 150], [-4, 1084]);

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 20%, ${WARM_DARK} 0%, ${DARK_BG} 60%)`,
        }}
      />

      <AbsoluteFill
        style={{
          backgroundImage: [
            "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scanY,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.22) 20%, rgba(245,158,11,0.42) 50%, rgba(245,158,11,0.22) 80%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${AMBER} 15%, ${AMBER} 85%, transparent 100%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${AMBER} 15%, ${AMBER} 85%, transparent 100%)`,
        }}
      />

      <CornerBrackets />

      <div
        style={{
          position: "absolute",
          bottom: 14,
          right: 56,
          fontFamily: "'Courier New', monospace",
          fontSize: 13,
          color: "rgba(245,158,11,0.35)",
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        AION Training Series
      </div>

      {children}
    </AbsoluteFill>
  );
};
