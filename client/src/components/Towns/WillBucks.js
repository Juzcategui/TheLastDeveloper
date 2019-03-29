import React from "react";
import { Link } from "react-router-dom";
import willBucks from "../../Backgrounds/WillBucks.jpg"
import Will from "../../Sprites/WillBucks.PNG"
import * as $ from 'axios';
import CarelessWhisper from '../../Audio/CarelessWhisper.mp3'



class WillBucks extends React.Component {
    state = {
        npcClicked: false,
        confirmed: false,
        denied: false,
        dialogue: [],
        confirm: [],
        deny: []

    }

    clickHandler = (event) => {
        event.preventDefault();
        $.get(`/api/gamedb/Will`).then(gameDB => {
            this.setState({
                dialogue: gameDB.data.dialogue,
                confirm: gameDB.data.beatTrial,
                deny: gameDB.data.passedTrialDialogue,
                confirmed: false,
                denied: false,
                npcClicked: !this.state.npcClicked
            });
        })
    }

    confirmedClick = (event) => {
        event.preventDefault();
        this.setState({
            npcClicked: !this.state.npcClicked,
            confirmed: !this.state.confirmed
        });
    };

    deniedClick = (event) => {
        event.preventDefault();
        this.setState({
            npcClicked: !this.state.npcClicked,
            denied: !this.state.denied
        });
    };

    render() {
        return (

            <div>
                <audio src={CarelessWhisper} autoPlay loop />
                <img className="BG" src={willBucks} alt="WillBucks"></img>

                <h1 className="HouseTitles">Welcome to WillBucks!</h1>
                <img name="Will" id="Will" onClick={this.clickHandler} src={Will} alt="Will"></img>

                {this.state.npcClicked === true ?
                    <div>
                        <div id='DialogContainer'>
                            <div id="characterName">
                                <p className="namePlate">Will Miller <br /> Willbucks CEO/COO/CFO </p>
                            </div>
                            <div id="textBox">
                                <h4>{this.state.dialogue[0]}</h4>
                                <button onClick={this.confirmedClick} className="btn btn-primary btn-sm confirm">Sure, I love coffee!</button> <span></span>
                                <button onClick={this.deniedClick} className="btn btn-danger btn-sm confirm">Uh, no thanks. I'm a broke developer.</button>
                            </div>
                        </div>
                    </div>
                    :
                    (this.state.npcClicked === false && this.state.confirmed === true)
                        ?
                        <div>
                            <div id='DialogContainer'>
                                <div id="characterName">
                                    <p className="namePlate">Will Miller <br /> Willbucks CEO/COO/CFO </p>
                                </div>
                                <div id="textBox">
                                    <h4>{this.state.confirm[0]}</h4>
                                </div>
                            </div>
                        </div>
                        :
                        (this.state.npcClicked === false && this.state.denied === true)
                            ?
                            <div>
                                <div id='DialogContainer'>
                                    <div id="characterName">
                                        <p className="namePlate">Will Miller <br /> Willbucks CEO/COO/CFO </p>
                                    </div>
                                    <div id="textBox">
                                        <h4>{this.state.deny[0]}</h4>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            :
                            <div></div>
                }

                <div id="actionBox">
                    <Link to="/WorldMap">
                        <button className="btn btn-success">World Map</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default WillBucks;