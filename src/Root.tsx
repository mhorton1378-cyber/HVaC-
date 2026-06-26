import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_DURATION } from "./MainVideo";
import { NoCoolCapacitor, TOTAL_FRAMES as NC_FRAMES } from "./compositions/NoCoolCapacitor";

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
        id="NoCool-FailedCapacitor"
        component={NoCoolCapacitor}
        durationInFrames={NC_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
