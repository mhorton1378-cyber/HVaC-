import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface DialogueBubbleProps {
  speaker: "tech" | "homeowner";
  text: string;
  startFrame: number;
  endFrame: number;
}

export const DialogueBubble: React.FC<DialogueBubbleProps> = ({
  speaker,
  text,
  startFrame,
  endFrame,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 12, endFrame - 10, endFrame],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const slideY = interpolate(frame, [startFrame, startFrame + 14], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isTech = speaker === "tech";
  const accentColor = isTech ? "#64b5f6" : "#ffb74d";
  const borderColor = isTech ? "#1565c0" : "#e65100";
  const nameLabel = isTech ? "TECH" : "HOMEOWNER";

  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        left: 40,
        right: 40,
        opacity,
        transform: `translateY(${slideY}px)`,
      }}
    >
      <div
        style={{
          background: "rgba(8, 12, 28, 0.92)",
          border: `2px solid ${borderColor}`,
          borderRadius: 14,
          padding: "18px 26px 20px",
          backdropFilter: "blur(8px)",
          boxShadow: `0 0 30px ${borderColor}44, 0 6px 24px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Speaker label */}
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 16,
            fontWeight: 700,
            color: accentColor,
            letterSpacing: 3,
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          {nameLabel}
        </div>

        {/* Dialogue text */}
        <div
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 30,
            color: "#f0f4f8",
            lineHeight: 1.45,
            fontWeight: 400,
          }}
        >
          {text}
        </div>
      </div>

      {/* Tail indicator */}
      <div
        style={{
          position: "absolute",
          bottom: -10,
          left: isTech ? 80 : "auto",
          right: isTech ? "auto" : 80,
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop: `12px solid ${borderColor}`,
        }}
      />
    </div>
  );
};

// Cinematic black bars top & bottom
export const CinematicBars: React.FC<{ opacity?: number }> = ({
  opacity = 1,
}) => (
  <>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        background: "#000",
        opacity,
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        background: "#000",
        opacity,
        zIndex: 10,
      }}
    />
  </>
);

// Scene label overlay (top-left)
export const SceneLabel: React.FC<{
  label: string;
  startFrame: number;
  duration?: number;
}> = ({ label, startFrame, duration = 45 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 12, startFrame + duration - 10, startFrame + duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        left: 40,
        opacity,
        fontFamily: "'Courier New', monospace",
        fontSize: 14,
        letterSpacing: 4,
        color: "rgba(0, 212, 255, 0.75)",
        textTransform: "uppercase",
        borderLeft: "3px solid rgba(0,212,255,0.5)",
        paddingLeft: 12,
        zIndex: 5,
      }}
    >
      {label}
    </div>
  );
};

// Temperature / status HUD badge
export const TempBadge: React.FC<{
  temp: string;
  label: string;
  color?: string;
  startFrame: number;
}> = ({ temp, label, color = "#ff5722", startFrame }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        top: 108,
        right: 40,
        opacity,
        background: "rgba(8,12,28,0.88)",
        border: `2px solid ${color}`,
        borderRadius: 10,
        padding: "10px 18px",
        textAlign: "center",
        zIndex: 5,
      }}
    >
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 13,
          letterSpacing: 2,
          color: color,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Arial Black', Arial, sans-serif",
          fontSize: 36,
          fontWeight: 900,
          color: "#f0f4f8",
          lineHeight: 1,
        }}
      >
        {temp}
      </div>
    </div>
  );
};
