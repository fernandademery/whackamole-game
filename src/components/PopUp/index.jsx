import React from "react";
import Popup from "reactjs-popup";

export default function PopUp(props) {
  const { showPopup, onClosePopup, score } = props;
  const bestScore = localStorage.getItem("bestScore");
  const message =
    !bestScore || score > bestScore ? (
      <div>
        <h6>Congrats! You got {score} points! </h6>
        <div>That's a personal best!</div>
      </div>
    ) : score <= 10 ? (
      <div>
        <h6>What a pitty! You got only {score} points...</h6>
        <siv>Keep trying, youll get better!</siv>
      </div>
    ) : (
      <div>
        <h6>Congrats! You got {score} points!!</h6>{" "}
        <div>Keep going and you'll become the best!</div>{" "}
      </div>
    );
  return (
    <Popup open={showPopup} onClose={onClosePopup}>
      <div className="modal">
        <button className="close" onClick={onClosePopup}>
          &times;
        </button>
        {message}
      </div>
    </Popup>
  );
}
