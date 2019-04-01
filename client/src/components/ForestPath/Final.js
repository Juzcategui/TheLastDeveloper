import React from "react";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"
import AOL from '../../Audio/AOL.mp3'
import DeathNoise from '../../Audio/DeathNoise.mp3'

class Final extends React.Component {
    state = {
        dialogueCount: 0,
        dialogue: ["Alan, remember your training...",
            "Did you forget?",
            "This is your destiny...",
            "Get up. The world is counting on you!"],
        resumeBattle: false,
        afterClick: false,
        confirmedClick: false,
        mongodDefeated: false,
        buttonDiag: [".Reconnect()", "Gather Data", "Push Through", "Dive In",],
        play: false
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

    confirmClick = (event) => {
        event.preventDefault();
        this.setState({
            confirmedClick: true,
        })
    }

    finalStart = (event) => {
        this.setState({
            afterClick: true
        })
    }

    readDocs = (event) => {
        this.setState({
            mongodDefeated: true,
            play: true
        })
    }



    mongodAudio = new Audio(DeathNoise)

    componentDidUpdate() {
        if (this.state.mongodDefeated === true) {
            this.state.play ? this.mongodAudio.play() : this.audio.pause();
            setTimeout(() => { this.props.history.push('/Lamontopia') }, 8000);
        }
    }

    render() {

        return (
            !this.state.resumeBattle ?
                <div className="finalDialogue">
                <audio src={AOL} autoPlay />
                    <h1 key={this.state.dialogueCount + 3} className="finalDial text-flicker-in-glow" >{this.state.dialogue[this.state.dialogueCount]}</h1>
                    <button key={`${this.state.dialogueCount}`} className="btn btn-secondary btn-lg finalBoxDialogue text-focus-in" onClick={this.nextDialogue}>{this.state.buttonDiag[this.state.dialogueCount]}</button>
                </div>
                :
                !this.state.afterClick
                    ?

                    <div className={`wrapper fade-in`}>
                        <img id="monGod" className={`${this.state.mongodDefeated && "flicker-out-1"}`} src={monGod} alt="monGod" />
                        <img className="BG" src={ForestBG} alt="Forest" />
                        <div className="sliding-background"></div>
                        <div id='finalContainer'>
                            <div id="finalBox">
                                <h2 className={`mongodUse ${this.state.confirmedClick && "visibleToggle"}`}>What? How is this possible? You shouldn't have been able to get up from that attack!</h2>
                                <button onClick={this.confirmClick}
                                    className={`btn btn-danger confirm btn-lg finalButton ${this.state.confirmedClick && "visibleToggle"}`}>Trump Card</button>

                                <h2 className={`mongodUse ${!this.state.confirmedClick && "visibleToggle"}`}>Wait, how were you able to obtain that? That's my only weakness!</h2>
                                <button onClick={this.finalStart}
                                    className={`btn btn-danger confirm btn-lg finalButton ${!this.state.confirmedClick && "visibleToggle"}`}>Finish Mongod</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`wrapper`}>
                        <img id="monGod" className={`${this.state.mongodDefeated && "flicker-out-1"}`} src={monGod} alt="monGod" />
                        <img className="BG" src={ForestBG} alt="Forest" />
                        <div className="sliding-background"></div>
                        <div className={`docDiv ${this.state.mongodDefeated && "visibleToggle"}`}>
                            <button type="button" onClick={this.readDocs} className="docButton text-focus-in2">The Documentation</button>
                        </div>
                    </div>
        )
    }

}

export default Final;