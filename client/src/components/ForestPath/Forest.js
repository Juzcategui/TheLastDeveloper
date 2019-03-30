import React from "react";
import { Link, Redirect } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"
import Sephiroth from '../../Audio/Sephiroth.mp3'

class Forest extends React.Component {
    state = {
        battleCount: 0,
        mongodDialogue: ["MonGod uses Zoombeam! Alan is trapped in the vim - escape is now disabled!",
            "Mongod uses drop tree branch if exists! Obviously, it exists in a forest. Alan suffers a concussion!",
            "Mongod uses npm run seed! He's storing energy for his next attack!",
            "Mongod uses .remove()! Alan has fallen and can't get up. Our hero is trouble!"],
        playerDialogue: "",
        battleStarted: false,
        confirmedClick: false,
        buttonDiag: ["Welp", "Welp", "Welp", "R.I.P"],
        destroyUsed: false,
    }

    startBattle = (event) => {
        event.preventDefault();
        this.setState({
            battleStarted: true
        })
    }

    confirmSkill = (event) => {
        event.preventDefault();
        this.setState({
            confirmedClick: true,
        })
    }


    continueBattle = (event) => {
        event.preventDefault();
        if (this.state.battleCount === 3) {
            this.setState({
                destroyUsed: true,
            })
        }

        // , () => { setTimeout(() => { this.props.history.push('/Final') }, 6000) }
        this.setState({
            playerDialogue: "",
            confirmedClick: false,
            battleCount: this.state.battleCount + 1
        })
    }

    componentDidUpdate() {
        if (this.state.destroyUsed === true) {
            setTimeout(() => { this.props.history.push('/Final') }, 6000);
        }
    }

    useAbility = (event) => {
        event.preventDefault();
        if (event.target.name === "fist") {
            this.setState({
                playerDialogue: "Alan uses fist to five! It tickles MonGod..."
            })
        }
        if (event.target.name === "break") {
            this.setState({
                playerDialogue: "Alan takes a five minute stretch break! He feels refreshed!"
            })
        }
        if (event.target.name === "pseudo") {
            this.setState({
                playerDialogue: "Alan uses pseudocode! It doesn't actually do anything..."
            })
        }
        if (event.target.name === "circuit") {
            this.setState({
                playerDialogue: "Alan uses short circuit! 50% of the time, it works every time! ...it didn't work."
            })
        }
    }

    render() {
        const { battleCount, mongodDialogue, playerDialogue, confirmedClick, buttonDiag } = this.state;
        return (

            <div className={`wrapper ${this.state.destroyUsed && "fadeToBlack"}`}>
                <h1 className="ForestTitles">MonGod's Dom</h1>
                <img className={`${confirmedClick && "shake-horizontal"}`} id="monGod" src={monGod} alt="monGod" />
                <div class="sliding-background"></div>
                <audio src={Sephiroth} autoPlay loop />

                <img className="BG" src={ForestBG} alt="Forest" />


                <div id='finalContainer'>
                    {!this.state.battleStarted
                        ?
                        <div id="finalBox">

                            <h2 className="mongodUse">HAHA. Alan, you fool. Instead of hiding, you came straight to me?! You will fall just like your former!</h2>
                            <button onClick={this.startBattle} className="btn btn-danger confirm btn-lg challengeButton">Challenge MonGod!</button>
                        </div>
                        :
                        (playerDialogue === "" && this.state.destroyUsed === false)
                            ?
                            <div id="skillBox">
                                <h1 id="skillHeader">Choose an Attack</h1>
                                <button name="fist" onClick={this.useAbility} className="btn-lg skillOne">Fist to Five</button>
                                <button name="break" onClick={this.useAbility} className="btn-lg skillTwo">Five Minute Stretch Break</button>
                                <button name="pseudo" onClick={this.useAbility} className="btn-lg skillThree">Pseudocode</button>
                                <button name="circuit" onClick={this.useAbility} className="btn-lg skillFour">Short Circuit</button>
                            </div>
                            : this.state.destroyUsed === true ?
                                <div></div>
                                :
                                <div id="skillBox">
                                    <h1 className={`skillUse ${confirmedClick && "visibleToggle"}`}>{playerDialogue}</h1>
                                    <button onClick={this.confirmSkill} className={`btn btn-info confirm btn-lg confirmButton ${confirmedClick && "visibleToggle"}`}>Confirm</button>

                                    <h3 className={`mongodUse ${!confirmedClick && "visibleToggle"}`}>{mongodDialogue[battleCount]}</h3>
                                    <button onClick={this.continueBattle} className={`"btn btn-danger confirm btn-lg battleButton ${!confirmedClick && "visibleToggle"} ${this.state.destroyUsed && "disabled"}`}>
                                        {buttonDiag[battleCount]}</button>
                                </div>

                    }

                </div>



            </div>
        )
    }

}

export default Forest;