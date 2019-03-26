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
                <img class="BG" src={ForestBG} alt="Forest" />

                <div>
                    <div id="characterBox">
                        <button class="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                    </div>

                    <div id="characterName">
                            <p>Insert character name here</p>
                        </div>

                    <div id="textBox">
                        <h1>Welcome to ya doom...</h1>
                        <p>Alexander</p>

                    </div>
                </div>
            </div>
        )
    }

}

export default Forest;