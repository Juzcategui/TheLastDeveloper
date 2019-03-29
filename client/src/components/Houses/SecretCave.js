import React from "react";
import { Link } from "react-router-dom";
import cave from "../../Backgrounds/SnowMountain.jpg"
import Cody from "../../Sprites/Cody.png"
import ManCave from "../../Audio/ManCave.mp3"


class SecretCave extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <audio src={ManCave} autoPlay loop />
                <img className="BG" src={cave} alt="cave"></img>
                <h1 className="HouseTitles">Cody's Super Secret Can't let the Bad Guys Know Hidden Cave</h1>

                <img id="Cody" src={Cody} alt="Cody"></img>
                <div id='DialogContainer'>
                    <div id="characterName">
                        <p className="namePlate">Charismatic Cody</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to ya doom...</h3>
                        <p>Alexander</p>
                    </div>
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