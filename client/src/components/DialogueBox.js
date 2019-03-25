import React from "react";
import "../App.css";
import { Link } from "react-router-dom";




class DialogueBox extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div id="#gameTextBox">
                <h1>Text</h1>
                <p>Welcome Alex! ...</p>

                <Link to ="/WorldMap">World map</Link>
            </div>

        )
    }   

}

export default DialogueBox;