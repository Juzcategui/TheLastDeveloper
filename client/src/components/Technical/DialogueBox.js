import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";




class DialogueBox extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>

                <div id="characterBox">
                <p>Insert picture here</p>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>
                </div>

                <div id="textBox">
                    <h1>Welcome to ya doom...</h1>
                    <p>Alexander</p>

                </div>

                <Link to="/WorldMap">World map</Link>

            </div>

        )
    }

}

export default DialogueBox;