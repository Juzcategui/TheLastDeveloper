import React from "react";
import { Link } from "react-router-dom";
import cave from "../../Backgrounds/SnowMountain.jpg"
import Cody from "../../Sprites/Cody.png"



class SecretCave extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={cave} alt="cave"></img>
                <h1 id="REACTTitle">Cody's Super Secret Can't let the Bad Guys Know Hidden Cave</h1>

                <img id="Cody" src={Cody} alt="Cody"></img>
                <div id='DialogContainer'>
                    <div id="characterName">
                        <p>Cody the Conqueror</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to ya doom...</h3>
                        <p>Alexander</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button class="btn btn-success"><Link to="/WorldMap">World Map</Link></button>
                </div>

            </div>
        )
    }

}

export default SecretCave;