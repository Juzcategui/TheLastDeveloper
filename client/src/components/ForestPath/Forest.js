import React from "react";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"
import Sephiroth from '../../Audio/Sephiroth.mp3'
import mongodVoice from "../../Audio/MonGod3.mp3"

class Forest extends React.Component {
    state = {
        battleCount: 0,
        mongodDialogue: ["MonGod uses Zoombeam! Alan is trapped in the vim - escape is now disabled!",
            "Mongod uses drop tree branch if exists! Branches exist in a forest..so Alan suffers a concussion!",
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
        const { mongodDialogue, battleCount, playerDialogue, confirmedClick, buttonDiag } = this.state;
        return (

            <div className={`wrapper ${this.state.destroyUsed && "fadeToBlack"}`}>
                <h1 className="ForestTitles">MonGod's Dom</h1>
                <img className={`${confirmedClick && "shake-horizontal"}`} id="monGod" src={monGod} alt="monGod" />
                <div className="sliding-background"></div>
                <audio src={Sephiroth} autoPlay loop />
                <audio src={mongodVoice} autoPlay />
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
                                <button name="circuit" onClick={this.useAbility} className="btn-lg skillTwo">Short Circuit</button>
                                <button name="pseudo" onClick={this.useAbility} className="btn-lg skillThree">Pseudocode</button>
                                <button name="break" onClick={this.useAbility} className="btn-lg skillFour">5 Min. Stretch Break</button>
                            </div>
                            : this.state.destroyUsed === true ?
                                <div></div>
                                :
                                <div id="skillBoxFeedback">
                                    <h1 className={`skillUse ${confirmedClick && "visibleToggle"}`}>{playerDialogue}</h1>
                                    <br className={`skillUse ${confirmedClick && "visibleToggle"}`} />
                                    <button onClick={this.confirmSkill} className={`btn btn-info confirm btn-lg confirmButton ${confirmedClick && "visibleToggle"}`}>Confirm</button>

                                    <h3 className={`mongodUseSkill ${!confirmedClick && "visibleToggle"}`}>{mongodDialogue[battleCount]}</h3>
                                    <br className={`mongodUseSkill ${!confirmedClick && "visibleToggle"}`} />
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