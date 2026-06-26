import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface CheckItem {
  label: string;
  value?: string;
  status: "pending" | "ok" | "fail";
  frameIn: number;
}

const CYAN = "#00d4ff";
const GREEN = "#00e676";
const RED = "#ff1744";
const PENDING = "rgba(180,200,220,0.5)";

export const DiagnosticChecklist: React.FC<{ items: CheckItem[] }> = ({
  items,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        top: 160,
        left: 40,
        right: 40,
        zIndex: 5,
      }}
    >
      {/* Header */}
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 14,
          letterSpacing: 4,
          color: CYAN,
          opacity: 0.8,
          textTransform: "uppercase",
          marginBottom: 18,
          borderBottom: "1px solid rgba(0,212,255,0.2)",
          paddingBottom: 10,
        }}
      >
        Diagnostic Checklist
      </div>

      {items.map((item, i) => {
        const opacity = interpolate(
          frame,
          [item.frameIn, item.frameIn + 16],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const slideX = interpolate(
          frame,
          [item.frameIn, item.frameIn + 18],
          [-40, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const statusColor =
          item.status === "ok"
            ? GREEN
            : item.status === "fail"
            ? RED
            : PENDING;
        const statusIcon =
          item.status === "ok" ? "✓" : item.status === "fail" ? "✗" : "·";

        // Pulse on fail
        const pulseOpacity =
          item.status === "fail"
            ? interpolate(
                (frame - item.frameIn) % 40,
                [0, 20, 40],
                [1, 0.4, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              )
            : 1;

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${slideX}px)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 18px",
              marginBottom: 10,
              background:
                item.status === "fail"
                  ? "rgba(255,23,68,0.1)"
                  : "rgba(0,212,255,0.04)",
              border: `1px solid ${
                item.status === "fail"
                  ? "rgba(255,23,68,0.35)"
                  : "rgba(0,212,255,0.12)"
              }`,
              borderRadius: 8,
            }}
          >
            {/* Label */}
            <div
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 22,
                color: "#e0eaf4",
                flex: 1,
              }}
            >
              {item.label}
            </div>

            {/* Value */}
            {item.value && (
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 18,
                  color:
                    item.status === "fail"
                      ? RED
                      : item.status === "ok"
                      ? GREEN
                      : PENDING,
                  marginRight: 16,
                }}
              >
                {item.value}
              </div>
            )}

            {/* Status icon */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background:
                  item.status === "ok"
                    ? "rgba(0,230,118,0.15)"
                    : item.status === "fail"
                    ? "rgba(255,23,68,0.15)"
                    : "rgba(180,200,220,0.1)",
                border: `2px solid ${statusColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Courier New', monospace",
                fontSize: 20,
                fontWeight: 700,
                color: statusColor,
                opacity: item.status === "fail" ? pulseOpacity : 1,
              }}
            >
              {statusIcon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Reading card for multimeter values
export const ReadingCard: React.FC<{
  label: string;
  expected: string;
  actual: string;
  unit: string;
  startFrame: number;
}> = ({ label, expected, actual, unit, startFrame }) => {
  const frame = useCurrentFrame();

  const cardOpacity = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const actualOpacity = interpolate(
    frame,
    [startFrame + 30, startFrame + 46],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity: cardOpacity,
        background: "rgba(8,12,28,0.92)",
        border: "2px solid rgba(0,212,255,0.25)",
        borderRadius: 16,
        padding: "28px 36px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 13,
          letterSpacing: 4,
          color: "rgba(0,212,255,0.65)",
          textTransform: "uppercase",
          marginBottom: 22,
        }}
      >
        {label}
      </div>

      {/* Expected */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            color: "rgba(160,200,220,0.6)",
            letterSpacing: 2,
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Expected
        </div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 42,
            color: "#00e676",
            fontWeight: 700,
          }}
        >
          {expected}
          <span style={{ fontSize: 22, marginLeft: 6, opacity: 0.8 }}>
            {unit}
          </span>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 1,
          background: "rgba(0,212,255,0.15)",
          marginBottom: 20,
        }}
      />

      {/* Actual */}
      <div style={{ opacity: actualOpacity }}>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            color: "rgba(255,23,68,0.7)",
            letterSpacing: 2,
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Measured
        </div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 60,
            color: "#ff1744",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(255,23,68,0.5)",
          }}
        >
          {actual}
          <span style={{ fontSize: 28, marginLeft: 8, opacity: 0.85 }}>
            {unit}
          </span>
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 16,
            color: "#ff1744",
            marginTop: 10,
            letterSpacing: 1,
          }}
        >
          CAPACITOR FAILED
        </div>
      </div>
    </div>
  );
};
