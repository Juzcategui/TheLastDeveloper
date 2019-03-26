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
                <img className= "BG" src={JSHouse} alt="JSHouse" />
                <h1>Javascript House</h1>
                <img id="Vu" src={Vu} alt="Vu"></img>

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p>Vu the Javascript Jaeger</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the Javascript house</h3>
                        <p>Unable to do 2+2 lookin ahh</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button className= "btn btn-success"><Link to="/JavascriptTown">Back</Link></button>
                </div>
                
            </div>
        )
    }

}

export default JavascriptHouse;