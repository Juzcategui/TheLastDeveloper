import React from "react";
import { Link } from "react-router-dom";
import REACTHouse from "../../Backgrounds/REACTHouse.jpeg"
import Gabe from "../../Sprites/Gabe.png"
import imgscroll from "../../Backgrounds/scroll.png"
import * as $ from 'axios';
import MyHero from '../../Audio/MyHero.mp3'

class ReactHouse extends React.Component {
    state = {
        npcName: 'Gabe the React Rabid',
        scroll: "React",
        passedTrial: false,
        completedOnce: false,
        dialogue: [],
        abilityDialogue: [],
        passedDialogue: [],
        dialogueCount: 0,
        isCorrect: false,
        answers: ["javascript", "component"],
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
                    passedTrial: userDB.data.progress[3].passed,
                    completedOnce: userDB.data.progress[3].passed,
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
        const newSkill = "Short Circuit: It either works or it doesn't";
        const classHouse = this.state.scroll;

        if (this.state.completedOnce === true) {
            this.props.history.push("/ReactTown")
        }
        else {
            $.post(`/api/skill`, { body: newSkill, userId: userId }).then(() => {
                $.put(`/api/user`, { classHouse: classHouse, trialsPassed: this.state.trialsPassed, userId: userId }).then(() => {
                    this.props.history.push("/ReactTown")
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
                    <audio src={MyHero} autoPlay loop />
                    <img className="BG" src={REACTHouse} alt="ReactHouse" />
                    <h1 className="HouseTitles">React Residence</h1>
                    <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} alt="scroll" />
                    <img id="Gabe" src={Gabe} alt="Gabe"></img>

                    <div id='DialogContainer'>

                        <div id="characterName">
                            <p className="namePlate">Gabe the React Rabid</p>
                        </div>
                        {
                            this.state.passedTrial === true ?
                                <div key={4} id="textBox">
                                    <h4>{this.state.passedDialogue[this.state.dialogueCount]}</h4>
                                    <button onClick={this.resetTrial} className="btn btn-primary btn-sm confirm">Retake Trial</button>
                                </div>

                                :
                                (this.state.dialogueCount === 1 || this.state.dialogueCount === 2)
                                    ?
                                    <div key={this.state.dialogueCount} id="textBox" >
                                        <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                        <form autocomplete="off" onSubmit={this.state.isCorrect ? this.nextDialogue : undefined}>
                                            <input name="currentAnswer" onChange={this.handleChange} value={this.state.currentAnswer}></input>
                                            <button disabled={!this.state.isCorrect} type="submit" className={`btn btn-primary btn-sm confirm ${!this.state.isCorrect && "disabled"}`}>Confirm</button>
                                        </form>
                                    </div>
                                    :
                                    this.state.dialogueCount === 3
                                        ?
                                        <div key={this.state.dialogueCount} id="textBox">
                                            <h4>{this.state.abilityDialogue[0]}</h4>
                                            <button onClick={this.abilityUnlock} className="btn btn-primary btn-sm confirm">Learn New Syntax</button>
                                        </div>

                                        :
                                        <div key={this.state.dialogueCount} id="textBox">
                                            <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                            <button onClick={this.nextDialogue} className="btn btn-primary btn-sm confirm">Start Trial</button>
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
