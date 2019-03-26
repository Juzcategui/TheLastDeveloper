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

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the HTML house</h3>
                        <p>Ya noob</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button class="btn btn-success"><Link to="/HTMLTown">Back</Link></button>
                </div>

                <Link to="/HTMLTown">Back</Link>
            </div>
        )
    }

}

export default HTMLHouse;