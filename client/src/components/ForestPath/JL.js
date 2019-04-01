import React from "react";
import { Link } from "react-router-dom";
import finalforest from "../../Backgrounds/finalforest.png"
import * as $ from 'axios';
import kingJacob from '../../Sprites/Jacob.png'


class JL extends React.Component {
    state = {
        npcName: "Jacob",
        dialogue: ["Alan, Im glad you arrived when you did. I had set off to seal MonGod away but his power was far greater than I imagined.",
         "I see your travels have taught you much - you truly are becoming an incredible developer. We may well have been doomed without you.", 
         "Although you have won victory this day, you must never forget to continue honing your skills and knowledge through study of the documentatio. The world is ever-changing, and evils such as MonGod will always be looking for a way in.", 
         "Together, we will always be stronger.", 
         "Now - let's head home shall we?"  ],
        dialogueCount: 0,
        dialogueComplete: false
    }

    componentDidMount() {

    }

    nextDialogue = (event) => {
        event.preventDefault();
        
        this.setState({
            dialogueCount: this.state.dialogueCount + 1
            
    });
}


    render() {
        return (
            <div>
                <img className="BG" src={finalforest} alt="finalForest"></img>
                <h1 className="HouseTitles">The Regrowth</h1>

                <img id="kingJacob" src={kingJacob} alt="kingJacob"></img>
                <div id='DialogContainer'>
                  

                    {this.state.dialogueCount === 5
                    ?
                    <div id="jlBox">
                        <Link to="/Credits">
                            <button className="btn btn-success btn-credits">Credits</button>
                        </Link>
                    </div>
                    :
                    <div id="textBox">
                        <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                        <button onClick={this.nextDialogue} type="button" className="btn btn-primary btn-sm confirm">Next</button>
                    </div>
                    }
                </div>
            </div>

        )
    }

}

export default JL;