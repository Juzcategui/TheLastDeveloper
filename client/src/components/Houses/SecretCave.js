import React from "react";
import { Link } from "react-router-dom";
import cave from "../../Backgrounds/SnowMountain.jpg"



class SecretCave extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={cave} alt="cave"></img>
                <p>Cody's Super Secret Can't let the Bad Guys Know Hidden Cave</p>

                <div>

                    <div id="characterBox">
                        <p>Insert picture here</p>

                        <div id="characterName">
                            <p>Insert character name here</p>
                        </div>
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