import React from "react";

// Components
import Button from "./components/Button";
import {
  faLaughBeam,
  faSmileBeam,
  faDizzy,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu(props) {
  const { startGame, selectDifficulty, selectTime } = props;
  const menuItems = [
    {
      label: "Start game",
      onClick: startGame,
    },
    {
      label: "Select level",
      levels: [
        {
          label: "easy",
          value: "easy",
          icon: faLaughBeam,
          onClick: selectDifficulty,
        },
        {
          label: "medium",
          value: "medium",
          icon: faSmileBeam,
          onClick: selectDifficulty,
        },
        {
          label: "expert",
          value: "expert",
          icon: faDizzy,
          onClick: selectDifficulty,
        },
      ],
    },
    {
      label: "Select time",
      levels: [
        {
          label: "10 seconds",
          value: "10000",
          icon: faStopwatch,
          onClick: selectTime,
        },
        {
          label: "30 seconds",
          value: "30000",
          icon: faStopwatch,
          onClick: selectTime,
        },
        {
          label: "60 seconds",
          value: "60000",
          icon: faStopwatch,
          onClick: selectTime,
        },
      ],
    },
  ];

  return (
    <div className="buttons">
      {menuItems.map((item, index) => {
        return <Button props={item} key={index} />;
      })}
    </div>
  );
}
