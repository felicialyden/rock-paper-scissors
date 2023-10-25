import "./index.css";
import React from "react";
import { Score } from "./Score";
import { AvailablePicks, CompetingBadges } from "./Picks";
import { RulesButton, ModalContent } from "./Rules";
import Modal from "react-overlays/Modal";

class App extends React.Component {
  constructor() {
    super();
    this.state = { progress: "start", pick: "", score: 0, showModal: false };
  }
  handlePickState = (pickedValue) => {
    this.setState({ pick: pickedValue, progress: "compete" });
  };
  handlePlayAgain = (progress) => {
    this.setState({ progress: progress });
  };
  handleGetScore = (score) => {
    this.setState((prevState) => ({
      score: prevState.score + score < 0 ? 0 : prevState.score + score,
    }));
  };

  showModal = (show) => {
    this.setState({ showModal: show });
  };

  render() {
    return (
      <div className="app">
        <Score score={this.state.score} />
        <div id="game">
          {this.state.progress === "start" ? (
            <AvailablePicks handlePickState={this.handlePickState} />
          ) : (
            <CompetingBadges
              pick={this.state.pick}
              handlePlayAgain={this.handlePlayAgain}
              handleGetScore={this.handleGetScore}
            />
          )}
        </div>
        <RulesButton showModal={this.showModal} />
        {this.state.showModal ? (
          <Modal className="modal" show={true}>
            <ModalContent showModal={this.showModal} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default App;
