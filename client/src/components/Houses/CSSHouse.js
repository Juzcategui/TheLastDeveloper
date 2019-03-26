import React from "react";
import { Link } from "react-router-dom";
import CSSHouseImg from "../../Backgrounds/CSSHouse.jpg"
import Adam from "../../Sprites/Adam.png"



class CSSHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>

                <img className= "BG" src={CSSHouseImg} alt="CSSHouse" />
                <h1>CSS House</h1>
                    
                    <img id="adam" src={Adam} alt="Adam"></img>
                    <div id='DialogContainer'>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the CSS house</h3>
                        <p>Dave Chapelle lookin ahh</p>
                    </div>
                    </div>

                <div id="actionBox">
                    <button className= "btn btn-success"><Link to="/CSSTown">Back</Link></button>
                </div>

            </div>
        )
    }

}

export default CSSHouse;