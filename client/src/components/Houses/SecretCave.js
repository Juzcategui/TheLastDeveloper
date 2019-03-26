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
                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>

                <div>
                    <div id="characterName">
                        <p>Cody the Conqueror</p>
                    </div>

                    <div id="textBox">
                        <h1>Welcome to ya doom...</h1>
                        <p>Alexander</p>

                    </div>

                    <Link to="/WorldMap">World map</Link>

                </div>
            </div>
        )
    }

}

export default SecretCave;