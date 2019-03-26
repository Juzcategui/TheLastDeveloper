import React from "react";
import { Link } from "react-router-dom";
import REACTHouse from "../../Backgrounds/REACTHouse.jpeg"



class ReactHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={REACTHouse} alt="ReactHouse" />
                <h1>React House</h1>

                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>

            <div>
                <div id="characterName">
                    <p>Insert character name</p>
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