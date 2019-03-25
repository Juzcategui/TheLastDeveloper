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

                <button id="gym1">JS GROUP</button>
                <button id="gym2">React GROUP</button>
                <button id="gym3">HTML GROUP</button>
                <button id="gym4">CSS GROUP</button>
                <button id="gym5">WillBucks</button>

            </div>
        );
    }
}

export default Town;