import React from "react";
import { Link } from "react-router-dom";
import HTMLHouseImg from "../../Backgrounds/HTMLHouse.jpg"



class HTMLHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={HTMLHouseImg} alt="HTMLHouse" />
                <h1>HTML House</h1>

                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>

                <div>
                    <div id="characterName">
                        <p>Insert character name</p>
                    </div>

                    <div id="textBox">
                        <h1>Welcome to the HTML house</h1>
                        <p>Ya noob</p>
                    </div>
                </div>
                <Link to="/HTMLTown">Back</Link>
            </div>
        )
    }

}

export default HTMLHouse;