import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"

class Final extends React.Component {
    state = {
        battleCount: 0
    }


    render() {

        return (
            <div className="wrapper">
                <img className="BG" src={ForestBG} alt="Forest" />
                <img id="monGod" src={monGod} alt="monGod" />
                <div class="sliding-background"></div>
            </div>
        )
    }

}

export default Final;