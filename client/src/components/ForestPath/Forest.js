import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.png'
import AoT from "../../Audio/AoT.mp3"

class Forest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <audio src={AoT} autoPlay loop />
                <h1 className="ForestTitles">Forest</h1>
                <img className="BG" src={ForestBG} alt="Forest" />

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p>MonGod</p>
                    </div>

                    <div id="textBox">
                        <h4>HAHA. Alan, you fool. Instead of hiding, you came straight to me?! You will fall just like your former!</h4>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/WorldMap">
                        <button className="btn btn-secondary">World Map</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default Forest;