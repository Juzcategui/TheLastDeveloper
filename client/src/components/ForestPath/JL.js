import React from "react";
import finalforest from "../../Backgrounds/finalforest.png";
import kingJacob from "../../Sprites/Jacob.png";
import RegrowthAudio from "../../Audio/RegrowthAudio.mp3";

class JL extends React.Component {
  state = {
    npcName: "Jacob",
    dialogue: [
      "Alan, we meet at last. I've anticipated the day you defeated Mongod for many moons. I had set off to seal MonGod away but his power was far greater than I imagined. We may well have been doomed without you.",
      "I see your travels have taught you much - you have truly grown into an incredible developer. Though your journey is not yet complete. You must master more methods to become a fully realized developer.",
      "Never forget to continue honing your skills through study of the documentation. The world is ever-changing, and evils such as MonGod will always be looking for a way in.",
      "There is an endless amount of knowledge out there for you to gain that you can learn from other realms. Because together, we will always be stronger.",
      "Your victory today will be remembered for ages. Now - let's head home shall we?"
    ],
    dialogueCount: 0,
    dialogueComplete: false
  };

  componentDidUpdate() {
    if (this.state.dialogueComplete === true) {
      setTimeout(() => {
        this.props.history.push("/Credits");
      }, 10000);
    }
  }

  nextDialogue = event => {
    event.preventDefault();

    if (this.state.dialogueCount === 3) {
      this.setState({
        dialogueComplete: true
      });
    }
    this.setState({
      dialogueCount: this.state.dialogueCount + 1
    });
  };

  render() {
    return (
      <div className={`${this.state.dialogueComplete && "fadeToBlackEnd"}`}>
        <img className="BG" src={finalforest} alt="finalForest" />
        <h1 className="HouseTitles">The Regrowth</h1>
        <audio src={RegrowthAudio} autoPlay />
        <img id="kingJacob" src={kingJacob} alt="kingJacob" />
        <div id="DialogContainer">
          {this.state.dialogueCount === 4 ? (
            <div>
              <div id="characterName">
                <p className="namePlate">King Jacob</p>
              </div>
              <div id="textBox">
                <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>

                <br />
              </div>
            </div>
          ) : (
              <div>
                <div id="characterName">
                  <p className="namePlate">King Jacob</p>
                </div>
                <div id="textBox">
                  <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                  <button
                    onClick={this.nextDialogue}
                    type="button"
                    className="btn btn-primary btn-sm confirm"
                  >
                    Next
              </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default JL;
