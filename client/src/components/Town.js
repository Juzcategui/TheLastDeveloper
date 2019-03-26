import React from "react";
import "../App.css";
import townBG from '../Backgrounds/Town.png'

class Town extends React.Component {
    state = {
        abilities: ''
    }


    render() {
        return (
            <div >
                <img class="BG" src={townBG} alt="background" />
                <button class="btn-sm btn-success" id="coffeeShop">WillBucks</button>

            </div>
        );
    }
}

export default Town;
