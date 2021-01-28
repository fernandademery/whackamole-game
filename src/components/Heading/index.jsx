import React from "react";

export default function Heading(props) {
  const { score } = props;
  return (
    <div>
      <h1>
        Wack-a-mole! <span> {score}</span>
      </h1>
    </div>
  );
}
