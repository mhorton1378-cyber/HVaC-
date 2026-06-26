import React from "react";
import {
  AbsoluteFill,
  Series,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Audio,
  staticFile,
} from "remotion";

import { OutdoorDayBG, DarkTechBG, WarmIndoorBG } from "../components/diagnostic/Background";
import {
  TechKneeling,
  TechStanding,
  HomeownerFrustrated,
  HomeownerHappy,
} from "../components/diagnostic/Characters";
import {
  CondenserUnit,
  MultimeterDevice,
  CapacitorCloseup,
} from "../components/diagnostic/Equipment";
import {
  DialogueBubble,
  CinematicBars,
  SceneLabel,
  TempBadge,
} from "../components/diagnostic/Dialogue";
import {
  DiagnosticChecklist,
  ReadingCard,
} from "../components/diagnostic/ChecklistUI";

// ── Scene frame lengths ──────────────────────────────────────────────────────
const DUR = {
  openingCard: 90,
  establishing: 150,
  complaint: 240,
  techArrives: 180,
  diagnostic: 300,
  capacitorReveal: 240,
  dialogue1: 150,
  dialogue2: 120,
  dialogue3: 120,
  dialogue4: 120,
  dialogue5: 120,
  resolution: 240,
  outro: 120,
} as const;

export const TOTAL_FRAMES = Object.values(DUR).reduce((a, b) => a + b, 0);

// ─────────────────────────────────────────────────────────────────────────────
// Scene helpers
// ─────────────────────────────────────────────────────────────────────────────
function fade(frame: number, start: number, dur = 18): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function fadeOut(frame: number, endFrame: number, dur = 18): number {
  return interpolate(frame, [endFrame - dur, endFrame], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 1 · Opening Title Card
// ─────────────────────────────────────────────────────────────────────────────
const OpeningCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = fade(frame, 0, 20);
  const ep = fade(frame, 8, 16);

  const titleSpring = spring({ frame: frame - 22, fps, config: { damping: 160, stiffness: 70, mass: 1.4 } });
  const titleOpacity = fade(frame, 22, 20);

  const sub1 = fade(frame, 48, 18);
  const sub2 = fade(frame, 62, 18);
  const divider = interpolate(frame, [70, 88], [0, 900], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: bgOpacity,
          background:
            "radial-gradient(ellipse at 50% 40%, #1a0a00 0%, #0d0500 60%, #000 100%)",
        }}
      />
      {/* Hot orange glow */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,100,0,0.18) 0%, transparent 70%)",
          opacity: bgOpacity,
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        {/* Episode badge */}
        <div
          style={{
            opacity: ep,
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 60, height: 2, background: "#ff6f00" }} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 15,
              letterSpacing: 5,
              color: "#ff6f00",
              textTransform: "uppercase",
            }}
          >
            No Cool · Ep. 01
          </span>
          <div style={{ width: 60, height: 2, background: "#ff6f00" }} />
        </div>

        {/* Main title */}
        <h1
          style={{
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [80, 0])}px) scale(${interpolate(titleSpring, [0, 1], [0.88, 1])})`,
            margin: 0,
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: 96,
            fontWeight: 900,
            color: "#f0f4f8",
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(255,110,0,0.35)",
          }}
        >
          Failed
        </h1>
        <h1
          style={{
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [80, 0])}px) scale(${interpolate(titleSpring, [0, 1], [0.88, 1])})`,
            margin: "4px 0 0",
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: 96,
            fontWeight: 900,
            color: "#ff6f00",
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Capacitor
        </h1>

        {/* Divider */}
        <div
          style={{
            width: divider,
            maxWidth: 900,
            height: 2,
            background: "linear-gradient(90deg, transparent, #ff6f00 30%, #ff6f00 70%, transparent)",
            margin: "36px 0 28px",
          }}
        />

        {/* Subtitle pills */}
        <div
          style={{
            opacity: sub1,
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: "rgba(255,110,0,0.12)",
              border: "1px solid rgba(255,110,0,0.35)",
              borderRadius: 999,
              padding: "8px 22px",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              color: "#ffb74d",
            }}
          >
            AC Running All Day
          </div>
          <div
            style={{
              background: "rgba(255,110,0,0.12)",
              border: "1px solid rgba(255,110,0,0.35)",
              borderRadius: 999,
              padding: "8px 22px",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              color: "#ffb74d",
            }}
          >
            Still 82°F Inside
          </div>
        </div>

        <div
          style={{
            opacity: sub2,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 24,
            color: "rgba(180,200,220,0.65)",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Real HVAC Diagnostics · Step by Step
        </div>
      </AbsoluteFill>

      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 2 · Establishing Shot
// ─────────────────────────────────────────────────────────────────────────────
const EstablishingShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = fade(frame, 0, 20);
  const hoEntrance = spring({ frame: frame - 20, fps, config: { damping: 180, stiffness: 60, mass: 1.2 } });

  const condenserSlide = interpolate(frame, [30, 62], [-120, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const condenserOpacity = fade(frame, 30, 24);

  // Subtle camera pan (zoom in slightly over time)
  const scale = interpolate(frame, [0, 150], [1.06, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: "50% 60%", width: "100%", height: "100%" }}>
        <OutdoorDayBG />

        {/* Scene SVG layer */}
        <svg
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
        >
          {/* Condenser unit */}
          <g
            transform={`translate(${60 + condenserSlide}, 1250)`}
            style={{ opacity: condenserOpacity }}
          >
            <g transform="scale(0.9)">
              <CondenserUnit fanDeg={0} running={false} />
            </g>
          </g>

          {/* Homeowner - frustrated */}
          <HomeownerFrustrated
            x={720}
            y={1600}
            scale={0.82}
            flip={false}
          />
        </svg>
      </div>

      <SceneLabel label="Suburban Home · Midday" startFrame={18} duration={80} />
      <TempBadge temp="82°F" label="Indoors" color="#ff5722" startFrame={40} />
      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 3 · Homeowner Complaint
// ─────────────────────────────────────────────────────────────────────────────
const HomeownerComplaint: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = fade(frame, 0, 16);

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <OutdoorDayBG />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* Condenser */}
        <g transform="translate(60, 1250)">
          <g transform="scale(0.9)">
            <CondenserUnit fanDeg={0} running={false} />
          </g>
        </g>
        {/* Homeowner gesturing */}
        <HomeownerFrustrated x={720} y={1600} scale={0.82} />
      </svg>

      {/* Dialogue */}
      <Sequence from={20}>
        <Audio src={staticFile("voice/homeowner-complaint.mp3")} volume={1} />
      </Sequence>

      <DialogueBubble
        speaker="homeowner"
        text="My AC has been running all day and it's still 82 degrees in the house."
        startFrame={20}
        endFrame={DUR.complaint - 10}
      />

      <TempBadge temp="82°F" label="Indoors" color="#ff5722" startFrame={5} />
      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 4 · Tech Arrives
// ─────────────────────────────────────────────────────────────────────────────
const TechArrives: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = fade(frame, 0, 16);
  const techSpring = spring({ frame: frame - 12, fps, config: { damping: 200, stiffness: 55, mass: 1.1 } });
  const techX = interpolate(techSpring, [0, 1], [-250, 0]);

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <OutdoorDayBG />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        <g transform="translate(60, 1250)">
          <g transform="scale(0.9)">
            <CondenserUnit panelOpen={true} fanDeg={0} running={false} />
          </g>
        </g>

        {/* Tech entering from left */}
        <TechKneeling x={280 + techX} y={1600} scale={0.84} />

        {/* Homeowner staying right */}
        <HomeownerFrustrated x={760} y={1600} scale={0.78} />
      </svg>

      <SceneLabel label="HVAC Tech On Scene" startFrame={10} duration={100} />
      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 5 · Diagnostic Checklist
// ─────────────────────────────────────────────────────────────────────────────
const DiagnosticChecklistScene: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = fade(frame, 0, 16);

  const checkItems = [
    { label: "Thermostat Settings", value: "68°F", status: "ok" as const, frameIn: 20 },
    { label: "Outdoor Disconnect", value: "Closed", status: "ok" as const, frameIn: 50 },
    { label: "Line Voltage", value: "240V", status: "ok" as const, frameIn: 80 },
    { label: "Contactor", value: "Pulled In", status: "ok" as const, frameIn: 110 },
    { label: "Compressor Amps", value: "0.2A", status: "fail" as const, frameIn: 140 },
    { label: "Dual Run Capacitor", value: "0.3 µF", status: "fail" as const, frameIn: 178 },
  ];

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <DarkTechBG />

      {/* Tech kneeling at side, condenser open */}
      <svg
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        <g transform="translate(540, 1310)">
          <g transform="scale(0.7)">
            <CondenserUnit panelOpen={true} fanDeg={0} running={false} />
          </g>
        </g>
        <TechKneeling x={300} y={1600} scale={0.78} />
      </svg>

      {/* Gradient to see checklist clearly */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1100,
          background:
            "linear-gradient(180deg, rgba(13,18,40,0.96) 0%, rgba(13,18,40,0.92) 70%, transparent 100%)",
        }}
      />

      <DiagnosticChecklist items={checkItems} />

      <SceneLabel label="Running Diagnostics" startFrame={8} duration={240} />
      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 6 · Capacitor Reveal Close-Up
// ─────────────────────────────────────────────────────────────────────────────
const CapacitorReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = fade(frame, 0, 18);

  const capScale = spring({ frame: frame - 8, fps, config: { damping: 200, stiffness: 80, mass: 1 } });
  const meterScale = spring({ frame: frame - 40, fps, config: { damping: 180, stiffness: 70, mass: 1 } });

  // Digit animation: "---" → "45.0" → "0.3"
  const meterReading = frame < 90 ? "---" : frame < 130 ? "45.0" : "0.3";
  const meterColor = frame < 130 ? "#39ff14" : "#ff1744";

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <DarkTechBG />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,210,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Capacitor */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: `translate(-50%, 0) scale(${interpolate(capScale, [0, 1], [0.7, 1])})`,
          width: 260,
          opacity: interpolate(capScale, [0, 1], [0, 1]),
        }}
      >
        <CapacitorCloseup failed={frame > 100} />
      </div>

      {/* Label above cap */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "'Courier New', monospace",
          fontSize: 14,
          letterSpacing: 4,
          color: "rgba(0,212,255,0.65)",
          textTransform: "uppercase",
          opacity: fade(frame, 6, 16),
        }}
      >
        Dual Run Capacitor · Close-Up
      </div>

      {/* Multimeter */}
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: `translate(-50%, 0) scale(${interpolate(meterScale, [0, 1], [0.7, 1])})`,
          width: 280,
          opacity: interpolate(meterScale, [0, 1], [0, 1]),
        }}
      >
        <MultimeterDevice
          reading={meterReading}
          unit="µF"
          mode="CAP"
        />
      </div>

      {/* Reading card */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 40,
          right: 40,
          opacity: fade(frame, 140, 20),
        }}
      >
        <ReadingCard
          label="Capacitor Reading"
          expected="45/5"
          actual="0.3"
          unit="µF"
          startFrame={140}
        />
      </div>

      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Generic dialogue scene (shared for scenes 7–11)
// ─────────────────────────────────────────────────────────────────────────────
interface DialogueSceneProps {
  speaker: "tech" | "homeowner";
  text: string;
  voiceFile: string;
  techSmiling?: boolean;
}

const DialogueScene: React.FC<DialogueSceneProps> = ({
  speaker,
  text,
  voiceFile,
  techSmiling = false,
}) => {
  const frame = useCurrentFrame();
  const dur = useVideoConfig().durationInFrames;
  const sceneOpacity = fade(frame, 0, 14);

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <OutdoorDayBG />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* Condenser */}
        <g transform="translate(60, 1260)">
          <g transform="scale(0.85)">
            <CondenserUnit panelOpen={true} fanDeg={0} running={false} />
          </g>
        </g>

        {/* Tech kneeling / smiling */}
        <TechKneeling x={310} y={1600} scale={0.82} />

        {/* Homeowner */}
        {techSmiling ? (
          <HomeownerHappy x={740} y={1600} scale={0.78} />
        ) : (
          <HomeownerFrustrated x={740} y={1600} scale={0.78} />
        )}
      </svg>

      <Sequence from={12}>
        <Audio src={staticFile(voiceFile)} volume={1} />
      </Sequence>

      <DialogueBubble
        speaker={speaker}
        text={text}
        startFrame={12}
        endFrame={dur - 8}
      />
      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 12 · Resolution
// ─────────────────────────────────────────────────────────────────────────────
const ResolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = fade(frame, 0, 20);

  const systemStartFrame = 80;
  const fanDeg = frame > systemStartFrame
    ? interpolate(frame - systemStartFrame, [0, 160], [0, 360 * 4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  const running = frame > systemStartFrame + 10;

  // Cool air animation
  const airOpacity = interpolate(frame, [systemStartFrame + 20, systemStartFrame + 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <OutdoorDayBG />

      {/* Cool air overlay (blue tint as system starts) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 40%, rgba(0,150,255,0.08) 100%)",
          opacity: running ? airOpacity : 0,
        }}
      />

      <svg
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* Condenser with spinning fan */}
        <g transform="translate(60, 1220)">
          <CondenserUnit fanDeg={fanDeg} running={running} />
        </g>

        {/* New capacitor installation indicator */}
        {frame > 20 && (
          <g>
            <rect x="62" y="1450" width="190" height="28" rx="6" fill="rgba(0,230,118,0.15)" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" />
            <text x="157" y="1469" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#00e676" letterSpacing="1">NEW CAPACITOR ✓</text>
          </g>
        )}

        {/* Tech standing (job done) */}
        <TechStanding x={340} y={1600} scale={0.78} />

        {/* Homeowner happy / thumbs up */}
        <HomeownerHappy x={740} y={1600} scale={0.78} />
      </svg>

      {/* System status overlay */}
      {running && (
        <div
          style={{
            position: "absolute",
            top: 108,
            left: 40,
            opacity: airOpacity,
            background: "rgba(0,20,10,0.88)",
            border: "2px solid rgba(0,230,118,0.5)",
            borderRadius: 12,
            padding: "12px 22px",
          }}
        >
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: 3,
              color: "#00e676",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            System Status
          </div>
          <div
            style={{
              fontFamily: "Arial Black, Arial, sans-serif",
              fontSize: 22,
              fontWeight: 900,
              color: "#00e676",
            }}
          >
            COOLING ✓
          </div>
        </div>
      )}

      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// 13 · Outro
// ─────────────────────────────────────────────────────────────────────────────
const OutroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = fade(frame, 0, 20);
  const logoSpring = spring({ frame: frame - 14, fps, config: { damping: 180, stiffness: 70, mass: 1.2 } });
  const logoOpacity = fade(frame, 14, 18);
  const item1 = fade(frame, 45, 16);
  const item2 = fade(frame, 58, 16);
  const item3 = fade(frame, 71, 16);
  const item4 = fade(frame, 84, 16);

  const nextEps = [
    "No Cool – Bad Contactor",
    "No Cool – Open Float Switch",
    "No Cool – Low Refrigerant",
    "No Cool – Dirty Condenser Coil",
  ];
  const nextOpacities = [item1, item2, item3, item4];

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: bgOpacity,
          background:
            "radial-gradient(ellipse at 50% 35%, #0a1a24 0%, #060d14 60%, #000 100%)",
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        {/* Checkmark */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${interpolate(logoSpring, [0, 1], [0.6, 1])})`,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(0,230,118,0.12)",
            border: "3px solid rgba(0,230,118,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 52,
            color: "#00e676",
            marginBottom: 28,
            boxShadow: "0 0 40px rgba(0,230,118,0.2)",
          }}
        >
          ✓
        </div>

        <h2
          style={{
            opacity: logoOpacity,
            margin: 0,
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: 52,
            fontWeight: 900,
            color: "#f0f4f8",
            letterSpacing: -1,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Problem Solved
        </h2>
        <div
          style={{
            opacity: logoOpacity,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 22,
            color: "rgba(0,230,118,0.8)",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Replace the capacitor · verify amperage · check pressures
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,255,0.3) 30%, rgba(0,212,255,0.3) 70%, transparent)",
            marginBottom: 32,
            opacity: logoOpacity,
          }}
        />

        {/* Coming up next */}
        <div
          style={{
            opacity: item1,
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            letterSpacing: 4,
            color: "rgba(0,212,255,0.65)",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Coming Up Next
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: "100%",
          }}
        >
          {nextEps.map((ep, i) => (
            <div
              key={i}
              style={{
                opacity: nextOpacities[i],
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: 8,
                padding: "12px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 13,
                  color: "rgba(0,212,255,0.5)",
                  width: 28,
                  flexShrink: 0,
                }}
              >
                {String(i + 2).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 20,
                  color: "#c8dce8",
                }}
              >
                {ep}
              </span>
            </div>
          ))}
        </div>
      </AbsoluteFill>

      <CinematicBars />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT COMPOSITION
// ─────────────────────────────────────────────────────────────────────────────
export const NoCoolCapacitor: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      <Series>
        <Series.Sequence durationInFrames={DUR.openingCard}>
          <OpeningCard />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.establishing}>
          <EstablishingShot />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.complaint}>
          <HomeownerComplaint />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.techArrives}>
          <TechArrives />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.diagnostic}>
          <DiagnosticChecklistScene />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.capacitorReveal}>
          <CapacitorReveal />
        </Series.Sequence>

        {/* Dialogue exchange – each line is its own sequence */}
        <Series.Sequence durationInFrames={DUR.dialogue1}>
          <DialogueScene
            speaker="tech"
            text="Good news. Your compressor isn't bad."
            voiceFile="voice/tech-good-news.mp3"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.dialogue2}>
          <DialogueScene
            speaker="homeowner"
            text="Really?"
            voiceFile="voice/homeowner-really.mp3"
            techSmiling
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.dialogue3}>
          <DialogueScene
            speaker="tech"
            text="Your capacitor has completely failed. The compressor can't start."
            voiceFile="voice/tech-capacitor.mp3"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.dialogue4}>
          <DialogueScene
            speaker="homeowner"
            text="So I don't need a whole new system?"
            voiceFile="voice/homeowner-no-system.mp3"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.dialogue5}>
          <DialogueScene
            speaker="tech"
            text="Nope. Replace the capacitor, verify amperage, check refrigerant pressures—and you're back in business."
            voiceFile="voice/tech-nope.mp3"
            techSmiling
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.resolution}>
          <ResolutionScene />
        </Series.Sequence>

        <Series.Sequence durationInFrames={DUR.outro}>
          <OutroCard />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
