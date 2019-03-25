import React from "react";
import "../App.css";



class DialogueBox extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div id="#gameTextBox">
                <h1>Text</h1>
                <p>Welcome Alex! ...</p>
            </div>

        )
    }   

}

export default DialogueBox;