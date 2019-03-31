import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"

class Final extends React.Component {
    state = {
        dialogueCount: 0,
        dialogue: ["Alan, remember your training...",
            "Did you forget?",
            "This is your destiny...",
            "Get up. The world is counting on you!"],
        resumeBattle: false,
        mongodDefeated: false,
        buttonDiag: ["Push Through", "Push Through", "Push Through", "Dive In",]

    }

    nextDialogue = (event) => {
        event.preventDefault()
        if (this.state.dialogueCount === 3) {
            this.setState({
                resumeBattle: true
            })
        }
        this.setState({
            dialogueCount: this.state.dialogueCount + 1
        })
    }

    readDocs = (event) => {
        this.setState({
            mongodDefeated: true
        })
    }


    componentDidUpdate() {
        if (this.state.mongodDefeated === true) {
            setTimeout(() => { this.props.history.push('/Lamontopia') }, 8000);
        }
    }

    render() {

        return (
            !this.state.resumeBattle ?
                <div className="finalDialogue">
                    <h1 key={this.state.dialogueCount + 3} className="finalDial text-flicker-in-glow" >{this.state.dialogue[this.state.dialogueCount]}</h1>
                    <button key={`${this.state.dialogueCount}`} className="btn btn-secondary btn-lg finalBoxDialogue text-focus-in" onClick={this.nextDialogue}>{this.state.buttonDiag[this.state.dialogueCount]}</button>
                </div>
                :
                <div className={`wrapper text-focus-in`}>
                    <img className="BG" src={ForestBG} alt="Forest" />
                    <img id="monGod" className={`${this.state.mongodDefeated && "flicker-out-1"}`} src={monGod} alt="monGod" />
                    <div class="sliding-background"></div>
                    <div className={`docDiv ${this.state.mongodDefeated && "visibleToggle"}`}>
                        <button type="button" onClick={this.readDocs} className="docButton text-focus-in2">The Documentation</button>
                    </div>
                </div>

        )
    }

}

export default Final;