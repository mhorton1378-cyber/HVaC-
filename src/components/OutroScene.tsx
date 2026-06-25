import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { HudBackground } from "./HudBackground";
import { episodeData } from "../episodeData";

const CYAN = "#00d4ff";
const WHITE = "#e8f4f8";
const GREEN = "#00e676";
const MUTED = "rgba(140, 190, 215, 0.80)";

function fade(frame: number, start: number, dur = 18): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function slideUp(frame: number, start: number, dur = 20): number {
  return interpolate(frame, [start, start + dur], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Complete" badge at top
  const completeBadgeOpacity = fade(frame, 8);

  // Header
  const headerSpring = spring({ frame: frame - 20, fps, config: { damping: 200, stiffness: 80 } });
  const headerOpacity = fade(frame, 20);

  // Divider
  const dividerWidth = interpolate(frame, [38, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Takeaways stagger
  const TAKEAWAY_START = 70;
  const TAKEAWAY_GAP = 28;
  const takeawayFades = episodeData.takeaways.map((_, i) =>
    fade(frame, TAKEAWAY_START + i * TAKEAWAY_GAP, 20)
  );
  const takeawaySlides = episodeData.takeaways.map((_, i) =>
    slideUp(frame, TAKEAWAY_START + i * TAKEAWAY_GAP, 20)
  );

  // "What's Next" section
  const lastTakeaway = TAKEAWAY_START + (episodeData.takeaways.length - 1) * TAKEAWAY_GAP + 22;
  const nextLabelOpacity = fade(frame, lastTakeaway + 14);
  const nextTextOpacity = fade(frame, lastTakeaway + 26);

  // Footer
  const footerOpacity = fade(frame, lastTakeaway + 40);

  return (
    <AbsoluteFill>
      <HudBackground />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
        }}
      >
        {/* Episode complete badge */}
        <div
          style={{
            opacity: completeBadgeOpacity,
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 30, height: 1, background: GREEN }} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: 5,
              color: GREEN,
              textTransform: "uppercase",
            }}
          >
            Week 01 · Complete
          </span>
          <div style={{ width: 30, height: 1, background: GREEN }} />
        </div>

        {/* Key Takeaways header */}
        <h2
          style={{
            opacity: headerOpacity,
            transform: `translateY(${interpolate(headerSpring, [0, 1], [40, 0])}px)`,
            margin: 0,
            fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 52,
            fontWeight: 900,
            color: WHITE,
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Key Takeaways
        </h2>

        {/* Divider */}
        <div
          style={{
            width: `${dividerWidth * 100}%`,
            maxWidth: 400,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)`,
            margin: "20px 0 28px",
          }}
        />

        {/* Takeaway list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
            maxWidth: 720,
            marginBottom: 44,
          }}
        >
          {episodeData.takeaways.map((takeaway, i) => (
            <div
              key={i}
              style={{
                opacity: takeawayFades[i],
                transform: `translateY(${takeawaySlides[i]}px)`,
                display: "flex",
                alignItems: "center",
                gap: 18,
                background: "rgba(0, 230, 118, 0.06)",
                border: "1px solid rgba(0, 230, 118, 0.18)",
                borderRadius: 4,
                padding: "14px 22px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 22,
                  color: GREEN,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 24,
                  color: WHITE,
                  lineHeight: 1.3,
                }}
              >
                {takeaway}
              </span>
            </div>
          ))}
        </div>

        {/* What's Next */}
        <div
          style={{
            opacity: nextLabelOpacity,
            marginBottom: 12,
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            letterSpacing: 4,
            color: "rgba(0,212,255,0.65)",
            textTransform: "uppercase",
          }}
        >
          What's Next
        </div>

        <div
          style={{
            opacity: nextTextOpacity,
            background: "rgba(0, 212, 255, 0.07)",
            border: "1px solid rgba(0,212,255,0.18)",
            borderRadius: 4,
            padding: "16px 28px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 20,
            color: MUTED,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 760,
          }}
        >
          {episodeData.nextSteps}
        </div>

        {/* Footer */}
        <div
          style={{
            opacity: footerOpacity,
            marginTop: 36,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 16,
            color: "rgba(140, 190, 215, 0.45)",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          {episodeData.series}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
