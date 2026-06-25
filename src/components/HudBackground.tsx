import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const CYAN = "#00d4ff";
const DARK_BG = "#04080f";
const NAVY = "#0a1628";
const BORDER = `2px solid rgba(0, 212, 255, 0.55)`;
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

export const HudBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const scanY = interpolate(frame % 150, [0, 150], [-4, 1084]);

  return (
    <AbsoluteFill>
      {/* Base gradient */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 25%, ${NAVY} 0%, ${DARK_BG} 65%)`,
        }}
      />

      {/* Subtle grid */}
      <AbsoluteFill
        style={{
          backgroundImage: [
            "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "64px 64px",
        }}
      />

      {/* Moving scan line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scanY,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${CYAN}33 20%, ${CYAN}55 50%, ${CYAN}33 80%, transparent 100%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${CYAN} 15%, ${CYAN} 85%, transparent 100%)`,
        }}
      />

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${CYAN} 15%, ${CYAN} 85%, transparent 100%)`,
        }}
      />

      <CornerBrackets />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          right: 56,
          fontFamily: "'Courier New', monospace",
          fontSize: 13,
          color: "rgba(0,212,255,0.38)",
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
