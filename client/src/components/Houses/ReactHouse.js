import React from "react";
import { Link } from "react-router-dom";
import REACTHouse from "../../Backgrounds/REACTHouse.jpeg"
import Gabe from "../../Sprites/Gabe.png"
import imgscroll from "../../Backgrounds/scroll.png"
import * as $ from 'axios';



class ReactHouse extends React.Component {
    state = {
        npcName: 'Gabe the React Rabid',
        scroll: "React",
        passedTrial: false,
        dialogue: [],
        abilityDialogue: [],
        passedDialogue: [],
        dialogueCount: 0,
        isCorrect: false,
        answers: ["javascript", "component"],
        currentAnswer: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    componentDidUpdate() {
        const { isCorrect, currentAnswer, answers, dialogueCount } = this.state;
        if (!isCorrect && currentAnswer === answers[dialogueCount - 1]) {
            this.setState({
                isCorrect: true
            });
        } else if (isCorrect && currentAnswer.trim() !== answers[dialogueCount - 1]) {
            this.setState({
                isCorrect: false
            })
        }
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("userId");
        $.get(`/api/gamedb/${this.state.npcName}`).then(gameDB => {
            $.get(`/api/user/${userId}`).then(userDB => {
                this.setState({
                    dialogue: gameDB.data.dialogue,
                    passedDialogue: gameDB.data.passedTrialDialogue,
                    abilityDialogue: gameDB.data.beatTrial,
                    passedTrial: userDB.data.progress[3].passed
                })
            })
        });
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    nextDialogue = (event) => {
        event.preventDefault();
        this.setState({
            dialogueCount: this.state.dialogueCount + 1,
            currentAnswer: ""
        });
    };

    resetTrial = (event) => {
        event.preventDefault();
        this.setState({
            passedTrial: false
        });
    };

    render() {

        return (
            this.state.dialogue.length > 0 && (
                <div>
                    <img className="BG" src={REACTHouse} alt="ReactHouse" />
                    <h1 className="HouseTitles">React House</h1>
                    <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                    <img id="Gabe" src={Gabe} alt="Gabe"></img>

                    <div id='DialogContainer'>

                        <div id="characterName">
                            <p className="namePlate">Gabe the React Rabid</p>
                        </div>
                        {
                            this.state.passedTrial === true ?
                                <div id="textBox">
                                    <h4>{this.state.passedDialogue[this.state.dialogueCount]}</h4>
                                    <button onClick={this.resetTrial} className="btn btn-primary btn-sm confirm">Retake Trial</button>
                                </div>

                                :
                                (this.state.dialogueCount === 1 || this.state.dialogueCount === 2)
                                    ?
                                    <div id="textBox">
                                        <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                        <input name="currentAnswer" onChange={this.handleChange} value={this.state.currentAnswer}></input>
                                        <button disabled={!this.state.isCorrect} onClick={this.state.isCorrect ? this.nextDialogue : undefined} className={`btn btn-primary btn-sm confirm ${!this.state.isCorrect && "disabled"}`}>Confirm</button>
                                    </div>
                                    :
                                    this.state.dialogueCount === 3
                                        ?
                                        <div id="textBox">
                                            <h4>{this.state.abilityDialogue[0]}</h4>
                                        </div>
                                        :
                                        <div id="textBox">
                                            <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                            <button onClick={this.nextDialogue} className="btn btn-primary btn-sm confirm">Confirm</button>
                                        </div>
                        }
                    </div>

                    <div id="actionBox">
                        <Link to="/ReactTown">
                            <button className="btn btn-success">Back</button>
                        </Link>
                    </div>

                </div>
            ))
    }

}

export default ReactHouse;