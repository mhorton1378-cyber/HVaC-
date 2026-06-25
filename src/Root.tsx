import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_DURATION } from "./MainVideo";
import { HVacWeek1Video, WEEK1_TOTAL_DURATION } from "./HVacWeek1Video";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="TrainingEpisode1"
        component={MainVideo}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HVACWeek1Fundamentals"
        component={HVacWeek1Video}
        durationInFrames={WEEK1_TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
