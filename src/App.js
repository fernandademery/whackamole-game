import React, { Component } from "react";

// Styles
import "./App.css";

// Components
import Heading from "../src/components/Heading";
import Menu from "../src/components/Menu";
import Workspace from "../src/components/Workspace";
import PopUp from "../src/components/PopUp";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastHole: "",
      timeUp: false,
      Score: 0,
      holes: ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6"],
      holeUp: "",
      score: 0,
      difficulty: "medium",
      time: 10000,
      showPopup: false,
    };
  }

  randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  randomHole = (holes) => {
    const { lastHole } = this.state;
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return this.randomHole(holes);
    }
    this.setState({ lastHole: hole });
    return hole;
  };

  peep = () => {
    const { holes, timeUp, difficulty } = this.state;
    const min =
      difficulty === "easy"
        ? 400
        : difficulty === "medium"
        ? 300
        : difficulty === "expert"
        ? 200
        : 300;
    const max =
      difficulty === "easy"
        ? 1000
        : difficulty === "medium"
        ? 900
        : difficulty === "expert"
        ? 800
        : 900;
    const time = this.randomTime(min, max);
    const hole = this.randomHole(holes);
    this.setState({ holeUp: hole });
    setTimeout(() => {
      this.setState({ holeUp: "" });
      if (!timeUp) this.peep();
    }, time);
  };

  startGame = () => {
    const { time } = this.state;
    const endTime = Number(time) + 2000;
    this.setState({ score: 0, timeUp: false }, this.peep());
    setTimeout(() => {
      this.setState({ timeUp: true, showPopup: true });
    }, time);
    setTimeout(() => {
      this.setState({ showPopup: true });
    }, endTime);
  };

  bonk = (e) => {
    if (!e.isTrusted) return;
    // cheater
    else {
      const newScore = this.state.score + 1;
      this.setState({ score: newScore, holeUp: "" });
    }
  };

  selectDifficulty = (difficulty) => {
    this.setState({ difficulty: difficulty });
  };

  selectTime = (time) => {
    this.setState({ time: time });
  };

  onClosePopup = () => {
    const { score } = this.state;
    this.setState({ showPopup: false }, window.location.reload(false));
    const bestScore = localStorage.getItem("bestScore");
    if (!bestScore) localStorage.setItem("bestScore", score);
    if (bestScore < score) localStorage.setItem("bestScore", score);
  };

  render() {
    const { holes, holeUp, score, showPopup } = this.state;

    return (
      <div className="App">
        <Heading score={score} />
        <Menu
          startGame={this.startGame}
          selectDifficulty={this.selectDifficulty}
          selectTime={this.selectTime}
        />
        <Workspace holes={holes} holeUp={holeUp} bonk={this.bonk} />
        <PopUp
          showPopup={showPopup}
          onClosePopup={this.onClosePopup}
          score={score}
        />
      </div>
    );
  }
}
