import React from "react";
import ReactCountdownClock from "react-countdown-clock";

export default function Clock(props) {
  const { time } = props;
  return (
    <div className="clock-container">
      <ReactCountdownClock
        seconds={time / 1000}
        color="lightyellow"
        alpha={0.9}
        size={100}
      />
    </div>
  );
}
