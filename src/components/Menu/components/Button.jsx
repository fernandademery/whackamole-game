import React, { Component } from "react";

// Styles
import "../../../App.css";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.node = React.createRef();
  }

  toggleList = () => {
    this.state.showMenu === false
      ? this.setState({ showMenu: true })
      : this.setState({ showMenu: false });
  };

  handleClick = (e) => {
    if (this.node.current.contains(e.target)) return;
    this.setState({ showMenu: false });
  };

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleClick, {
      capture: false,
    });
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClick, {
      capture: false,
    });
  };

  render() {
    const { label, onClick } = this.props.props;
    const levels = this.props.props.levels && this.props.props.levels;
    const { showMenu } = this.state;

    return (
      <div className="actions-container" ref={this.node}>
        <button
          onClick={() => {
            levels && this.toggleList();
            onClick && onClick();
          }}
        >
          {label}
        </button>
        {levels && (
          <div className={`playing-options ${showMenu ? "display-list" : ""}`}>
            {levels.map((level, i) => {
              return (
                <div
                  onClick={() => {
                    level.onClick(level.value);
                    this.toggleList();
                  }}
                >
                  <FontAwesomeIcon icon={level.icon} />
                  <p>{level.label}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
