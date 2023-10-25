import React from "react";

export class Score extends React.Component {
  render() {
    return (
      <div id="score-board" className="grid-column">
        <p className="white large no-margin">
          ROCK<br></br>PAPER<br></br>SCISSORS
        </p>
        <div id="score" className="center-content align-center-right">
          <p className="blue no-margin">SCORE</p>
          <p className="center-item x-large no-margin">{this.props.score}</p>
        </div>
      </div>
    );
  }
}
