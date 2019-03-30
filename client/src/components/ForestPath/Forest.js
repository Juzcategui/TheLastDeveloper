import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.png'
import Sephiroth from '../../Audio/Sephiroth.mp3'

class Forest extends React.Component {
    state = {
        battleCount: 0,
        mongodDialogue: [],
        playerDialogue: ""
    }

    render() {
        return (
            <div>
                <audio src={Sephiroth} autoPlay loop />
                <h1 className="ForestTitles">Mongod's Dom</h1>
                <img className="BG" src={ForestBG} alt="Forest" />

                <div id='finalContainer'>

                    <div id="finalBox">
                        <h4>HAHA. Alan, you fool. Instead of hiding, you came straight to me?! You will fall just like your former!</h4>
                        <button></button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Forest;