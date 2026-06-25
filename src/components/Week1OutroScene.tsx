import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { AmberHudBackground } from "./AmberHudBackground";
import { hvacWeek1Data } from "../hvacWeek1Data";

const AMBER = "#F59E0B";
const WHITE = "#F5EDD3";
const GREEN = "#00e676";
const MUTED = "rgba(210, 175, 110, 0.78)";

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

export const Week1OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const completeBadgeOpacity = fade(frame, 8);

  const headerSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200, stiffness: 80 },
  });
  const headerOpacity = fade(frame, 20);

  const dividerWidth = interpolate(frame, [38, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const TAKEAWAY_START = 68;
  const TAKEAWAY_GAP = 26;
  const takeawayFades = hvacWeek1Data.takeaways.map((_, i) =>
    fade(frame, TAKEAWAY_START + i * TAKEAWAY_GAP, 20)
  );
  const takeawaySlides = hvacWeek1Data.takeaways.map((_, i) =>
    slideUp(frame, TAKEAWAY_START + i * TAKEAWAY_GAP, 20)
  );

  const lastTakeaway =
    TAKEAWAY_START + (hvacWeek1Data.takeaways.length - 1) * TAKEAWAY_GAP + 22;

  const ctaLabelOpacity = fade(frame, lastTakeaway + 14);

  const ctaFades = hvacWeek1Data.callToAction.map((_, i) =>
    fade(frame, lastTakeaway + 30 + i * 22, 18)
  );
  const ctaSlides = hvacWeek1Data.callToAction.map((_, i) =>
    slideUp(frame, lastTakeaway + 30 + i * 22, 18)
  );

  const lastCTA =
    lastTakeaway + 30 + (hvacWeek1Data.callToAction.length - 1) * 22 + 20;
  const quoteOpacity = fade(frame, lastCTA + 16, 22);
  const footerOpacity = fade(frame, lastCTA + 34, 18);

  return (
    <AbsoluteFill>
      <AmberHudBackground />

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
            marginBottom: 22,
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
            fontSize: 48,
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
            background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`,
            margin: "16px 0 22px",
          }}
        />

        {/* Takeaways */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: "100%",
            maxWidth: 820,
            marginBottom: 32,
          }}
        >
          {hvacWeek1Data.takeaways.map((takeaway, i) => (
            <div
              key={i}
              style={{
                opacity: takeawayFades[i],
                transform: `translateY(${takeawaySlides[i]}px)`,
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(245, 158, 11, 0.07)",
                border: "1px solid rgba(245, 158, 11, 0.22)",
                borderRadius: 4,
                padding: "12px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 20,
                  color: AMBER,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 22,
                  color: WHITE,
                  lineHeight: 1.35,
                }}
              >
                {takeaway}
              </span>
            </div>
          ))}
        </div>

        {/* Call to action label */}
        <div
          style={{
            opacity: ctaLabelOpacity,
            marginBottom: 10,
            fontFamily: "'Courier New', monospace",
            fontSize: 12,
            letterSpacing: 4,
            color: "rgba(245,158,11,0.58)",
            textTransform: "uppercase",
          }}
        >
          Your Challenge This Week
        </div>

        {/* CTA items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          {hvacWeek1Data.callToAction.map((cta, i) => (
            <div
              key={i}
              style={{
                opacity: ctaFades[i],
                transform: `translateY(${ctaSlides[i]}px)`,
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(0, 230, 118, 0.05)",
                border: "1px solid rgba(0, 230, 118, 0.18)",
                borderRadius: 4,
                padding: "10px 18px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 16,
                  color: GREEN,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                →
              </span>
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 20,
                  color: WHITE,
                  lineHeight: 1.32,
                }}
              >
                {cta}
              </span>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div
          style={{
            opacity: quoteOpacity,
            maxWidth: 720,
            textAlign: "center",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 19,
            color: MUTED,
            lineHeight: 1.58,
            fontStyle: "italic",
            paddingTop: 20,
            borderTop: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          "{hvacWeek1Data.closingQuote}"
        </div>

        {/* Footer */}
        <div
          style={{
            opacity: footerOpacity,
            marginTop: 18,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 15,
            color: "rgba(210, 175, 110, 0.38)",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          {hvacWeek1Data.series}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
