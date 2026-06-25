import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_DURATION } from "./MainVideo";

export const Root: React.FC = () => {
  return (
    <Composition
      id="TrainingEpisode1"
      component={MainVideo}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
