import React from "react";

export class Outcome extends React.Component {
  handlePlayAgain = () => {
    this.props.handlePlayAgain("start");
  };

  render() {
    if (this.props.outcome === "none") {
      return (
        <div className="center-content">
          <p className="white center-item center-text">
            WAITING FOR HOUSE<br></br>TO PICK...
          </p>
        </div>
      );
    } else {
      return (
        <div className="center-content">
          <p className="white center-item">{this.props.outcome}</p>
          <button
            className="play-again-btn grey clickable"
            onClick={this.handlePlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      );
    }
  }
}
