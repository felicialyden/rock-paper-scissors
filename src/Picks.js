import React from "react";
import { PaperBadge, ScissorsBadge, RockBadge } from "./Badges";
import { Outcome } from "./Outcome";

export class AvailablePicks extends React.Component {
  handleClick = (event) => {
    this.props.handlePickState(event.target.closest(".badge-small").id);
  };
  render() {
    return (
      <div className="badges center-content" onClick={this.handleClick}>
        <div className="top-row justify-center">
          <PaperBadge size={"small"} />
          <ScissorsBadge size={"small"} />
        </div>
        <div className="bottom-row justify-center">
          <RockBadge size={"small"} />
        </div>
      </div>
    );
  }
}

export class CompetingBadges extends React.Component {
  constructor(props) {
    super(props);
    this.state = { housePick: "none", outcome: "none" };
  }
  async componentDidMount() {
    const choices = ["rock", "paper", "scissors"];
    const housePick = choices[Math.floor(Math.random() * choices.length)];
    const outcome = getOutcome(this.props.pick, housePick);

    setTimeout(() => {
      this.setState({ housePick: housePick });
      this.setState({ outcome: outcome });
      if (outcome === "YOU WIN") this.props.handleGetScore(1);
      if (outcome === "YOU LOSE") this.props.handleGetScore(-1);
      if (outcome === "IT'S A TIE") this.props.handleGetScore(0);
    }, 3000);
  }
  handlePlayAgain = (progress) => {
    this.props.handlePlayAgain(progress);
  };
  render() {
    return (
      <div className="competing-badges grid-column">
        <div className="selected-badge center-content">
          <p className="center-item white">YOUR PICK</p>
          <SelectedBadge pick={this.props.pick} />
        </div>
        <Outcome
          outcome={this.state.outcome}
          handlePlayAgain={this.handlePlayAgain}
        />
        <div className="selected-badge center-content">
          <p className="center-item white">HOUSE PICK</p>
          <SelectedBadge pick={this.state.housePick} />
        </div>
      </div>
    );
  }
}

class SelectedBadge extends React.Component {
  render() {
    if (this.props.pick === "paper") return <PaperBadge size={"large"} />;
    if (this.props.pick === "scissors") return <ScissorsBadge size={"large"} />;
    if (this.props.pick === "rock") return <RockBadge size={"large"} />;
    return <div className="circle"></div>;
  }
}

function getOutcome(playerPick, housePick) {
  if (playerPick === "rock" && housePick === "paper") return "YOU LOSE";
  if (playerPick === "rock" && housePick === "scissors") return "YOU WIN";
  if (playerPick === "scissors" && housePick === "rock") return "YOU LOSE";
  if (playerPick === "scissors" && housePick === "paper") return "YOU WIN";
  if (playerPick === "paper" && housePick === "rock") return "YOU WIN";
  if (playerPick === "paper" && housePick === "scissors") return "YOU LOSE";
  if (playerPick === "rock" && housePick === "rock") return "IT'S A TIE";
  if (playerPick === "paper" && housePick === "paper") return "IT'S A TIE";
  if (playerPick === "scissors" && housePick === "scissors")
    return "IT'S A TIE";
}
