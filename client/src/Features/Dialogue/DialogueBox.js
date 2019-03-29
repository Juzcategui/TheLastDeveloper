import React from 'react';
import './dialogue.css';

class DialogueBox extends React.Component {

        state = {
            dialogue: "some dialogue"
        }

    render () {
        return (
            <div className="DiaBox" style={{
                                    position: 'relative',
                                    width: '160px',
                                    height: '80px',
            }}>
                <p>{this.props.dialogue}</p>

            </div>
                
        )
    }

    
}

export default DialogueBox