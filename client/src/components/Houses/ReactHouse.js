import React from "react";
import { Link } from "react-router-dom";
import REACTHouse from "../../Backgrounds/REACTHouse.jpeg"
import Gabe from "../../Sprites/Gabe.png"



class ReactHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={REACTHouse} alt="ReactHouse" />
                <h1>React House</h1>
                <img id="Gabe" src={Gabe} alt="Gabe"></img>

                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>

            <div>
                <div id="characterName">
                    <p class="namePlate">Gabe the React Rabid</p>
                </div>

                <div id="textBox">
                    <h1>Welcome to the React House</h1>
                    <p>React or gtfo</p>
                </div>
            </div>

                <Link to="/ReactTown">Back</Link>
            </div>
        )
    }

}

export default ReactHouse;