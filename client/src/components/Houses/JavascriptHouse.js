import React from "react";
import { Link } from "react-router-dom";
import JSHouse from "../../Backgrounds/JSHouse.jpg"
import Vu from "../../Sprites/Vu.png"
import imgscroll from "../../Backgrounds/scroll.png"
import * as $ from 'axios';
import NGNL from '../../Audio/NGNL.mp3'

class JavascriptHouse extends React.Component {
    state = {
        npcName: 'Vu the Javascript Jaeger',
        scroll: "Javascript",
        passedTrial: false,
        completedOnce: false,
        dialogue: [],
        abilityDialogue: [],
        passedDialogue: [],
        dialogueCount: 0,
        isCorrect: false,
        answers: ["const", "==="],
        currentAnswer: '',
        trialsPassed: 0
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
        } else if (isCorrect && currentAnswer !== answers[dialogueCount - 1]) {
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
                    passedTrial: userDB.data.progress[1].passed,
                    completedOnce: userDB.data.progress[1].passed,
                    trialsPassed: userDB.data.trialsPassed
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

    abilityUnlock = (event) => {
        event.preventDefault();
        const userId = sessionStorage.getItem("userId");
        const newSkill = "Five Minute Stretch Break: Restores inner focus";
        const classHouse = this.state.scroll;

        if (this.state.completedOnce === true) {
            this.props.history.push("/JavascriptTown")
        }
        else {
            $.post(`/api/skill`, { body: newSkill, userId: userId }).then(() => {
                $.put(`/api/user`, { classHouse: classHouse, trialsPassed: this.state.trialsPassed, userId: userId }).then(() => {
                    this.props.history.push("/JavascriptTown")
                })
            })
        }
    }

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
                    <audio src={NGNL} autoPlay loop />
                    <img className="BG" src={JSHouse} alt="JSHouse" />
                    <h1 className="HouseTitles">Javascript Junction</h1>
                    <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} alt="scroll" />
                    <img id="Vu" src={Vu} alt="Vu"></img>

                    <div id='DialogContainer'>

                        <div id="characterName">
                            <p className="namePlate">Vu the Javascript Jaeger</p>
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
                                        <form autocomplete="off" onSubmit={this.state.isCorrect ? this.nextDialogue : undefined}>
                                            <input name="currentAnswer" onChange={this.handleChange} value={this.state.currentAnswer}></input>
                                            <button disabled={!this.state.isCorrect} type="submit" className={`btn btn-primary btn-sm confirm ${!this.state.isCorrect && "disabled"}`}>Confirm</button>
                                        </form>
                                    </div>
                                    :
                                    this.state.dialogueCount === 3
                                        ?
                                        <div id="textBox">
                                            <h4>{this.state.abilityDialogue[0]}</h4>
                                            <button onClick={this.abilityUnlock} className="btn btn-primary btn-sm confirm">Learn New Syntax</button>
                                        </div>
                                        :
                                        <div id="textBox">
                                            <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                            <button onClick={this.nextDialogue} className="btn btn-primary btn-sm confirm">Confirm</button>
                                        </div>
                        }
                    </div>

                    <div id="actionBox">
                        <Link to="/JavascriptTown">
                            <button className="btn btn-success">Back</button>
                        </Link>
                    </div>

                </div>
            ))
    }

}

export default JavascriptHouse;