import React from "react";

// Components
import Hole from "./components/Hole";

export default function Workspace(props) {
  const { holes, holeUp, bonk } = props;
  return (
    <div className="game">
      {holes &&
        holes.map((hole, index) => {
          return <Hole key={hole} hole={hole} holeUp={holeUp} bonk={bonk} />;
        })}
    </div>
  );
}
