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
                <img src={townBG} alt="background" />
            </div>
        );
    }
}

export default Town;