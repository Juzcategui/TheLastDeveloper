import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.png'


class Forest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <h1 id="ForestTitle">Forest</h1>
                <img className="BG" src={ForestBG} alt="Forest" />

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>You be lookin like a snacc</h3>
                        <p>The snacc that smiles back ;)</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button className="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                </div>

            </div>
        )
    }

}

export default Forest;