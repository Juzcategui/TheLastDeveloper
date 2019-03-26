import React from "react";
import { Link } from "react-router-dom";
import JSHouse from "../../Backgrounds/JSHouse.jpg"



class JavascriptHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src= {JSHouse} alt="JSHouse" />
                <h1>Javascript House</h1>

                <div id="characterBox">
                    <p>Insert picture here</p>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>
                </div>

                <div id="textBox">
                    <h1>Welcome to the JS house</h1>
                    <p>Unable to do 2+2 lookin ahh</p>

                </div>
                <Link to="/JavascriptTown">Back</Link>
            </div>
        )
    }

}

export default JavascriptHouse;