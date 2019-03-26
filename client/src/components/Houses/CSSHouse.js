import React from "react";
import { Link } from "react-router-dom";
import CSSHouseImg from "../../Backgrounds/CSSHouse.jpg"



class CSSHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                
                <img class="BG" src={CSSHouseImg} alt="CSSHouse" />
                <h1>CSS House</h1>

                <div>
                    <div id="characterBox">
                        <p>Insert picture here</p>

                        <div id="characterName">
                            <p>Insert character name here</p>
                        </div>
                    </div>

                    <div id="textBox">
                        <h1>Welcome to the CSS house</h1>
                        <p>Dave Chapelle lookin ahh</p>

                    </div>
                </div>
                <Link to="/CSSTown">Back</Link>
            </div>
        )
    }

}

export default CSSHouse;