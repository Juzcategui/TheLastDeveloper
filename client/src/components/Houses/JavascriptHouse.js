import React from "react";
import { Link } from "react-router-dom";
import JSHouse from "../../Backgrounds/JSHouse.jpg"
import Vu from "../../Sprites/Vu.png"



class JavascriptHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={JSHouse} alt="JSHouse" />
                <h1>Javascript House</h1>
                <img id="Vu" src={Vu} alt="Vu"></img>

                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>
                <div>
                    <div id="characterName">
                        <p>Vu the Javascript Jaeger</p>
                    </div>

                    <div id="textBox">
                        <h1>Welcome to the JS house</h1>
                        <p>Unable to do 2+2 lookin ahh</p>
                    </div>
                </div>
                <Link to="/JavascriptTown">Back</Link>
            </div>
        )
    }

}

export default JavascriptHouse;