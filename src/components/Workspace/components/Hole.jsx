import React from "react";

import "../../../App.css";

export default function Hole(props) {
  const { hole, holeUp, bonk } = props;
  return (
    <div className={`hole ${hole === holeUp ? "up" : ""}`}>
      <div className={`mole`} onClick={(e) => bonk(e)}></div>
    </div>
  );
}
