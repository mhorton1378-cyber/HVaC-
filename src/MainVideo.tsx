import React from "react";
import { Series } from "remotion";
import { IntroScene } from "./components/IntroScene";
import { ContentScene } from "./components/ContentScene";
import { OutroScene } from "./components/OutroScene";
import { episodeData } from "./episodeData";

const INTRO_FRAMES = 210;   // 7 s
const SCENE_FRAMES = 270;   // 9 s per content section
const OUTRO_FRAMES = 240;   // 8 s

export const MainVideo: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={INTRO_FRAMES}>
        <IntroScene />
      </Series.Sequence>

      {episodeData.sections.map((section, i) => (
        <Series.Sequence key={i} durationInFrames={SCENE_FRAMES}>
          <ContentScene
            section={section}
            sectionIndex={i}
            totalSections={episodeData.sections.length}
          />
        </Series.Sequence>
      ))}

      <Series.Sequence durationInFrames={OUTRO_FRAMES}>
        <OutroScene />
      </Series.Sequence>
    </Series>
  );
};

export const TOTAL_DURATION = INTRO_FRAMES + episodeData.sections.length * SCENE_FRAMES + OUTRO_FRAMES;
