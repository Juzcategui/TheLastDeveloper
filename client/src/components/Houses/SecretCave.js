import React from "react";
import { Link } from "react-router-dom";
import cave from "../../Backgrounds/SnowMountain.jpg"
import Cody from "../../Sprites/Cody.png"
import * as $ from 'axios';
import ManCave from '../../Audio/ManCave.mp3'

class SecretCave extends React.Component {
    state = {
        npcName: "Cody",
        introPassed: false,
        introDialogue: [],
        dialogue: [],
        dialogueCount: 0,
        introDialogueCount: 0,
        fourAbilities: false
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("userId");
        $.get(`/api/gamedb/${this.state.npcName}`).then(gameDB => {
            $.get(`/api/user/${userId}`).then(userDB => {
                this.setState({
                    introDialogue: gameDB.data.dialogue,
                    dialogue: gameDB.data.beatTrial,
                    introPassed: userDB.data.introPassed,
                    fourAbilities: userDB.data.trialsPassed === 4
                });
            });
        });
    }

    nextDialogue = (event) => {
        event.preventDefault();
        const userId = sessionStorage.getItem("userId");
        if (this.state.introDialogueCount === 3) {
            $.put(`/api/intro`, { userId: userId })
        }
        this.setState({
            dialogueCount: this.state.dialogueCount + 1,
            introDialogueCount: this.state.introDialogueCount + 1,
        });
    };

    render() {
        return (

            <div>

                <audio src={ManCave} autoPlay loop />
                <img className="BG" src={cave} alt="cave"></img>
                <h1 className="HouseTitles">Cody's Super Secret Can't let the Bad Guys Know Hidden Cave</h1>

                <Link to="/Intro">
                    <button type="button" className="btn btn-warning replayIntro">Replay Intro</button>
                </Link>

                <img id="Cody" src={Cody} alt="Cody"></img>
                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Cognoscente Cody</p>
                    </div>
                    {this.state.introPassed === true
                        ?
                        this.state.fourAbilities === true
                            ?
                            <div id="textBox">
                                <h4>You've completed all four trials? You're ready. Head over to the forest to the north to challenge MonGod.</h4>
                            </div>
                            :
                            this.state.dialogueCount === 3 ?
                                <div id="textBox">
                                    <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                </div>
                                :
                                <div id="textBox">
                                    <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                    <button onClick={this.nextDialogue} type="button" className="btn btn-primary btn-sm confirm">Next</button>
                                </div>
                        :
                        this.state.introDialogueCount === 4 ?
                            <div id="textBox">
                                <h4>{this.state.introDialogue[this.state.introDialogueCount]}</h4>
                            </div>
                            :
                            <div id="textBox">
                                <h4>{this.state.introDialogue[this.state.introDialogueCount]}</h4>
                                <button onClick={this.nextDialogue} type="button" className="btn btn-primary btn-sm confirm">Next</button>
                            </div>
                    }
                </div>

                <div id="actionBox">
                    <Link to="/WorldMap">
                        <button className="btn btn-success">World Map</button>
                    </Link>
                </div>

            </div >
        )
    }

}

export default SecretCave;