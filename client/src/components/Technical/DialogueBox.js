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

                <div>
                    <div id="characterBox">
                        <p>Insert buttons here</p>
                    </div>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Placeholder text</h3>
                        <p>Text 1</p>

                    </div>
                </div>

                <Link to="/WorldMap">World map</Link>

            </div>

        )
    }

}

export default DialogueBox;