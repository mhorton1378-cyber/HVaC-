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
const MUTED = "rgba(210, 175, 110, 0.80)";
const ACCENT_BG = "rgba(245, 158, 11, 0.07)";

function fade(frame: number, start: number, dur = 18): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function slideUp(frame: number, start: number, dur = 22): number {
  return interpolate(frame, [start, start + dur], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export const Week1IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeOpacity = fade(frame, 10);
  const badgeY = slideUp(frame, 10);

  const titleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 180, stiffness: 80, mass: 1.2 },
  });
  const titleOpacity = fade(frame, 25, 20);

  const subtitleOpacity = fade(frame, 58);
  const subtitleY = slideUp(frame, 58);

  const taglineOpacity = fade(frame, 78);

  const dividerWidth = interpolate(frame, [90, 120], [0, 580], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outcomesLabelOpacity = fade(frame, 108);

  const outcomeFades = hvacWeek1Data.outcomes.map((_, i) =>
    fade(frame, 122 + i * 16, 16)
  );
  const outcomeSlides = hvacWeek1Data.outcomes.map((_, i) =>
    slideUp(frame, 122 + i * 16, 16)
  );

  const lowerThirdOpacity = fade(frame, 225, 22);

  return (
    <AbsoluteFill>
      <AmberHudBackground />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 90,
        }}
      >
        {/* Week badge */}
        <div
          style={{
            opacity: badgeOpacity,
            transform: `translateY(${badgeY}px)`,
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ width: 40, height: 1, background: AMBER }} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 15,
              letterSpacing: 5,
              color: AMBER,
              textTransform: "uppercase",
            }}
          >
            Week {String(hvacWeek1Data.weekNumber).padStart(2, "0")} · Episode 01
          </span>
          <div style={{ width: 40, height: 1, background: AMBER }} />
        </div>

        {/* Main title */}
        <h1
          style={{
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [60, 0])}px) scale(${interpolate(titleSpring, [0, 1], [0.92, 1])})`,
            margin: 0,
            fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 82,
            fontWeight: 900,
            color: WHITE,
            letterSpacing: -1,
            textAlign: "center",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(245,158,11,0.30)",
          }}
        >
          {hvacWeek1Data.weekTitle}
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            margin: "14px 0 0",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 36,
            fontWeight: 300,
            color: AMBER,
            letterSpacing: 1.5,
            textAlign: "center",
          }}
        >
          {hvacWeek1Data.subtitle}
        </h2>

        {/* Tagline */}
        <p
          style={{
            opacity: taglineOpacity,
            margin: "8px 0 0",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 19,
            fontWeight: 400,
            color: MUTED,
            letterSpacing: 0.5,
            textAlign: "center",
            maxWidth: 720,
          }}
        >
          {hvacWeek1Data.tagline}
        </p>

        {/* Animated divider */}
        <div
          style={{
            width: dividerWidth,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`,
            margin: "22px 0 18px",
          }}
        />

        {/* Outcomes label */}
        <div
          style={{
            opacity: outcomesLabelOpacity,
            marginBottom: 10,
            fontFamily: "'Courier New', monospace",
            fontSize: 12,
            letterSpacing: 4,
            color: "rgba(245,158,11,0.58)",
            textTransform: "uppercase",
          }}
        >
          Learning Outcomes
        </div>

        {/* Outcomes box */}
        <div
          style={{
            background: ACCENT_BG,
            border: "1px solid rgba(245,158,11,0.18)",
            borderRadius: 4,
            padding: "14px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minWidth: 640,
          }}
        >
          {hvacWeek1Data.outcomes.map((outcome, i) => (
            <div
              key={i}
              style={{
                opacity: outcomeFades[i],
                transform: `translateY(${outcomeSlides[i]}px)`,
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 17,
                color: WHITE,
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  color: AMBER,
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                →
              </span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* Lower-third: audience + instructor */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 68,
          right: 68,
          opacity: lowerThirdOpacity,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 11,
              letterSpacing: 4,
              color: "rgba(245,158,11,0.55)",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Audience
          </div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: 18,
              color: WHITE,
              lineHeight: 1.2,
            }}
          >
            {hvacWeek1Data.audience}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 11,
              letterSpacing: 4,
              color: "rgba(245,158,11,0.55)",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Training Series
          </div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: 18,
              color: MUTED,
              lineHeight: 1.2,
            }}
          >
            {hvacWeek1Data.instructor}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
