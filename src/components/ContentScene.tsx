import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { HudBackground } from "./HudBackground";
import { Section } from "../episodeData";

const CYAN = "#00d4ff";
const WHITE = "#e8f4f8";
const MUTED = "rgba(140, 190, 215, 0.80)";
const NOTE_COLOR = "rgba(120, 170, 200, 0.65)";

interface Props {
  section: Section;
  sectionIndex: number;
  totalSections: number;
}

function fade(frame: number, start: number, dur = 18): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function slideFromLeft(frame: number, start: number, dur = 22): number {
  return interpolate(frame, [start, start + dur], [-70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export const ContentScene: React.FC<Props> = ({ section, sectionIndex, totalSections }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const num = String(sectionIndex + 1).padStart(2, "0");
  const total = String(totalSections).padStart(2, "0");

  // Section label badge
  const badgeOpacity = fade(frame, 8);

  // Vertical accent bar
  const barHeight = interpolate(frame, [18, 50], [0, 340], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title
  const titleSpring = spring({ frame: frame - 22, fps, config: { damping: 200, stiffness: 90, mass: 1 } });
  const titleOpacity = fade(frame, 22, 20);

  // Accent line under title
  const underlineWidth = interpolate(frame, [42, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Bullets — stagger every 35 frames starting at frame 60
  const BULLET_START = 60;
  const BULLET_GAP = 38;

  const bulletFades = section.bullets.map((_, i) =>
    fade(frame, BULLET_START + i * BULLET_GAP, 20)
  );
  const bulletX = section.bullets.map((_, i) =>
    slideFromLeft(frame, BULLET_START + i * BULLET_GAP, 22)
  );

  // Speaker note
  const lastBulletDone = BULLET_START + (section.bullets.length - 1) * BULLET_GAP + 22;
  const noteOpacity = fade(frame, lastBulletDone + 12, 24);

  // Progress dots
  const dotsOpacity = fade(frame, 5);

  return (
    <AbsoluteFill>
      <HudBackground />

      <AbsoluteFill style={{ padding: "80px 100px 80px 100px" }}>
        {/* Section number badge — top right */}
        <div
          style={{
            position: "absolute",
            top: 52,
            right: 100,
            opacity: badgeOpacity,
            fontFamily: "'Courier New', monospace",
            fontSize: 15,
            letterSpacing: 4,
            color: "rgba(0,212,255,0.6)",
            textTransform: "uppercase",
          }}
        >
          Section {num} / {total}
        </div>

        {/* Progress dots */}
        <div
          style={{
            position: "absolute",
            top: 52,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 10,
            opacity: dotsOpacity,
          }}
        >
          {Array.from({ length: totalSections }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i === sectionIndex ? 28 : 10,
                height: 10,
                borderRadius: 5,
                background: i === sectionIndex ? CYAN : "rgba(0,212,255,0.25)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        {/* Left vertical accent bar */}
        <div
          style={{
            position: "absolute",
            left: 68,
            top: 130,
            width: 4,
            height: barHeight,
            background: `linear-gradient(180deg, ${CYAN} 0%, rgba(0,212,255,0.2) 100%)`,
            borderRadius: 2,
          }}
        />

        {/* Main content area */}
        <div style={{ paddingLeft: 36, paddingTop: 48 }}>
          {/* Section title */}
          <h2
            style={{
              opacity: titleOpacity,
              transform: `translateX(${interpolate(titleSpring, [0, 1], [-40, 0])}px)`,
              margin: 0,
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 64,
              fontWeight: 900,
              color: WHITE,
              letterSpacing: -0.5,
              lineHeight: 1.05,
            }}
          >
            {section.title}
          </h2>

          {/* Animated underline */}
          <div
            style={{
              marginTop: 14,
              marginBottom: 40,
              width: `${underlineWidth * 100}%`,
              maxWidth: 480,
              height: 2,
              background: `linear-gradient(90deg, ${CYAN}, rgba(0,212,255,0.1))`,
            }}
          />

          {/* Bullet points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {section.bullets.map((bullet, i) => (
              <div
                key={i}
                style={{
                  opacity: bulletFades[i],
                  transform: `translateX(${bulletX[i]}px)`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                }}
              >
                {/* Bullet icon */}
                <div
                  style={{
                    flexShrink: 0,
                    marginTop: 4,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: CYAN,
                    boxShadow: `0 0 8px ${CYAN}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontSize: 26,
                    fontWeight: 400,
                    color: WHITE,
                    lineHeight: 1.45,
                  }}
                >
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Speaker note */}
          {section.speakerNote && (
            <div
              style={{
                opacity: noteOpacity,
                marginTop: 44,
                paddingLeft: 20,
                borderLeft: `2px solid rgba(0,212,255,0.25)`,
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 18,
                color: NOTE_COLOR,
                lineHeight: 1.6,
                fontStyle: "italic",
                maxWidth: 820,
              }}
            >
              {section.speakerNote}
            </div>
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
