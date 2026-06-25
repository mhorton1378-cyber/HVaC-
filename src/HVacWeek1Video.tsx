import React from "react";
import { Series } from "remotion";
import { Week1IntroScene } from "./components/Week1IntroScene";
import { Week1ContentScene } from "./components/Week1ContentScene";
import { Week1OutroScene } from "./components/Week1OutroScene";
import { hvacWeek1Data } from "./hvacWeek1Data";

const INTRO_FRAMES = 420;   // 14 s
const SCENE_FRAMES = 1440;  // 48 s × 5 sections = 240 s
const OUTRO_FRAMES = 480;   // 16 s
// Total: 420 + 7200 + 480 = 8100 frames = 270 s = 4.5 min

export const HVacWeek1Video: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={INTRO_FRAMES}>
        <Week1IntroScene />
      </Series.Sequence>

      {hvacWeek1Data.sections.map((section, i) => (
        <Series.Sequence key={i} durationInFrames={SCENE_FRAMES}>
          <Week1ContentScene
            section={section}
            sectionIndex={i}
            totalSections={hvacWeek1Data.sections.length}
          />
        </Series.Sequence>
      ))}

      <Series.Sequence durationInFrames={OUTRO_FRAMES}>
        <Week1OutroScene />
      </Series.Sequence>
    </Series>
  );
};

export const WEEK1_TOTAL_DURATION =
  INTRO_FRAMES + hvacWeek1Data.sections.length * SCENE_FRAMES + OUTRO_FRAMES;
