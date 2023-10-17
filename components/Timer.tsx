"use client";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import Margin from "./Margin";

export default function Timer() {
  const TOTAL_SECONDS = 30;
  const LAST_TEN_SECONDS = 10;
  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Interval Time</h3>
      <Margin className="h-5" />
      <CountdownCircleTimer
        isPlaying
        duration={TOTAL_SECONDS}
        colors={["#004777", "#004777", "#F80830", "#F80830"]}
        colorsTime={[
          TOTAL_SECONDS,
          TOTAL_SECONDS - LAST_TEN_SECONDS,
          LAST_TEN_SECONDS,
          0,
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
