import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { HudBackground } from "./HudBackground";
import { episodeData } from "../episodeData";

const CYAN = "#00d4ff";
const WHITE = "#e8f4f8";
const MUTED = "rgba(140, 190, 215, 0.85)";
const ACCENT_BG = "rgba(0, 212, 255, 0.08)";

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

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Week badge
  const badgeOpacity = fade(frame, 10);
  const badgeY = slideUp(frame, 10);

  // Title spring
  const titleSpring = spring({ frame: frame - 25, fps, config: { damping: 180, stiffness: 80, mass: 1.2 } });
  const titleOpacity = fade(frame, 25, 20);

  // Subtitle
  const subtitleOpacity = fade(frame, 55);
  const subtitleY = slideUp(frame, 55);

  // Tagline
  const taglineOpacity = fade(frame, 75);

  // Divider
  const dividerWidth = interpolate(frame, [85, 115], [0, 560], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Outcomes label
  const outcomesLabelOpacity = fade(frame, 100);

  // Each outcome bullet
  const outcomeFades = episodeData.outcomes.map((_, i) =>
    fade(frame, 115 + i * 18, 18)
  );
  const outcomeSlides = episodeData.outcomes.map((_, i) =>
    slideUp(frame, 115 + i * 18, 18)
  );

  return (
    <AbsoluteFill>
      <HudBackground />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        {/* Week badge */}
        <div
          style={{
            opacity: badgeOpacity,
            transform: `translateY(${badgeY}px)`,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ width: 40, height: 1, background: CYAN }} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 16,
              letterSpacing: 5,
              color: CYAN,
              textTransform: "uppercase",
            }}
          >
            Week {String(episodeData.weekNumber).padStart(2, "0")} · Episode 01
          </span>
          <div style={{ width: 40, height: 1, background: CYAN }} />
        </div>

        {/* Main title */}
        <h1
          style={{
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [60, 0])}px) scale(${interpolate(titleSpring, [0, 1], [0.92, 1])})`,
            margin: 0,
            fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 88,
            fontWeight: 900,
            color: WHITE,
            letterSpacing: -1,
            textAlign: "center",
            lineHeight: 1,
            textShadow: `0 0 60px rgba(0,212,255,0.25)`,
          }}
        >
          {episodeData.title}
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            margin: "18px 0 0",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 42,
            fontWeight: 300,
            color: CYAN,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          {episodeData.subtitle}
        </h2>

        {/* Tagline */}
        <p
          style={{
            opacity: taglineOpacity,
            margin: "8px 0 0",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: MUTED,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          {episodeData.tagline}
        </p>

        {/* Animated divider */}
        <div
          style={{
            width: dividerWidth,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)`,
            margin: "32px 0 28px",
          }}
        />

        {/* Learning outcomes */}
        <div
          style={{
            opacity: outcomesLabelOpacity,
            marginBottom: 16,
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            letterSpacing: 4,
            color: "rgba(0,212,255,0.65)",
            textTransform: "uppercase",
          }}
        >
          Learning Outcomes
        </div>

        <div
          style={{
            background: ACCENT_BG,
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 4,
            padding: "20px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minWidth: 640,
          }}
        >
          {episodeData.outcomes.map((outcome, i) => (
            <div
              key={i}
              style={{
                opacity: outcomeFades[i],
                transform: `translateY(${outcomeSlides[i]}px)`,
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 19,
                color: WHITE,
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: CYAN, fontWeight: 700, flexShrink: 0 }}>→</span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
