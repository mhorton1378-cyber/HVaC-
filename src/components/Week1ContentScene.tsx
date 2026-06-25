import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { AmberHudBackground } from "./AmberHudBackground";
import { Week1Section } from "../hvacWeek1Data";

const AMBER = "#F59E0B";
const WHITE = "#F5EDD3";
const NOTE_COLOR = "rgba(200, 165, 90, 0.65)";

interface Props {
  section: Week1Section;
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

export const Week1ContentScene: React.FC<Props> = ({
  section,
  sectionIndex,
  totalSections,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const num = String(sectionIndex + 1).padStart(2, "0");
  const total = String(totalSections).padStart(2, "0");

  const badgeOpacity = fade(frame, 8);

  const barHeight = interpolate(frame, [18, 52], [0, 370], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleSpring = spring({
    frame: frame - 22,
    fps,
    config: { damping: 200, stiffness: 90, mass: 1 },
  });
  const titleOpacity = fade(frame, 22, 20);

  const underlineWidth = interpolate(frame, [42, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const BULLET_START = 60;
  const BULLET_GAP = 38;

  const bulletFades = section.bullets.map((_, i) =>
    fade(frame, BULLET_START + i * BULLET_GAP, 20)
  );
  const bulletX = section.bullets.map((_, i) =>
    slideFromLeft(frame, BULLET_START + i * BULLET_GAP, 22)
  );

  const lastBulletDone = BULLET_START + (section.bullets.length - 1) * BULLET_GAP + 22;
  const noteOpacity = fade(frame, lastBulletDone + 14, 24);

  const dotsOpacity = fade(frame, 5);

  return (
    <AbsoluteFill>
      <AmberHudBackground />

      <AbsoluteFill style={{ padding: "80px 100px" }}>
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
            color: "rgba(245,158,11,0.62)",
            textTransform: "uppercase",
          }}
        >
          Section {num} / {total}
        </div>

        {/* Progress dots — top center */}
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
                background:
                  i === sectionIndex ? AMBER : "rgba(245,158,11,0.22)",
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
            background: `linear-gradient(180deg, ${AMBER} 0%, rgba(245,158,11,0.12) 100%)`,
            borderRadius: 2,
          }}
        />

        {/* Content */}
        <div style={{ paddingLeft: 36, paddingTop: 48 }}>
          {/* Section title */}
          <h2
            style={{
              opacity: titleOpacity,
              transform: `translateX(${interpolate(titleSpring, [0, 1], [-40, 0])}px)`,
              margin: 0,
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 58,
              fontWeight: 900,
              color: WHITE,
              letterSpacing: -0.5,
              lineHeight: 1.1,
            }}
          >
            {section.title}
          </h2>

          {/* Underline */}
          <div
            style={{
              marginTop: 14,
              marginBottom: 38,
              width: `${underlineWidth * 100}%`,
              maxWidth: 480,
              height: 2,
              background: `linear-gradient(90deg, ${AMBER}, rgba(245,158,11,0.08))`,
            }}
          />

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
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
                <div
                  style={{
                    flexShrink: 0,
                    marginTop: 7,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: AMBER,
                    boxShadow: `0 0 8px ${AMBER}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontSize: 25,
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
                marginTop: 42,
                paddingLeft: 20,
                borderLeft: "2px solid rgba(245,158,11,0.28)",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 17,
                color: NOTE_COLOR,
                lineHeight: 1.62,
                fontStyle: "italic",
                maxWidth: 860,
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
