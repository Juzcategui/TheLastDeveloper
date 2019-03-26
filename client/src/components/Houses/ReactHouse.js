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

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the React house</h3>
                        <p>React or gtfo</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button class="btn btn-success"><Link to="/ReactTown">Back</Link></button>
                </div>

            </div>
        )
    }

}

export default ReactHouse;