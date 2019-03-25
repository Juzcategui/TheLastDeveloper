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
                <img class="BG" src={townBG} alt="background" />
                <button class="btn-sm btn-success" id="coffeeShop">
                <Link to ="/WillBucks">WillBucks</Link></button>

                <Link to="/World">World</Link>

            </div>
        );
    }
}

export default Town;
