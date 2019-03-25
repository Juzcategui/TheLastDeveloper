import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import townBG from '../Backgrounds/Town.png'
import * as $ from "axios";

class Town extends React.Component {
    state = {
        abilities: ''
    }


    render() {
        return (
            <div >
                <img id="worldMap" src={townBG} alt="background" />

                <button id="gym1"><Link to="/JavascriptHouse">JS Group</Link></button>
                <button id="gym2"><Link to="/ReactHouse">React GROUP</Link></button>
                <button id="gym3"><Link to="/HTMLHouse">HTML GROUP</Link></button>
                <button id="gym4"><Link to="/CSSHouse">CSS GROUP</Link></button>
                <button id="gym5">WillBucks</button>

            </div>
        );
    }
}

export default Town;
