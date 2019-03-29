import React from 'react';
import './dialogue.css';

class DialogueBox extends React.Component {

        state = {
            dialogue: "some dialogue"
        }

    render () {
        return (
            <div className="DiaBox">
                <p>{this.dialogue}</p>

            </div>
                
        )
    }

    
}

export default DialogueBox