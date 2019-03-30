import React from "react";
import { Link } from "react-router-dom";
import ForestBG from '../../Backgrounds/Forest.jpg'
import monGod from "../../Sprites/MonGod.png"
import Sephiroth from '../../Audio/Sephiroth.mp3'
import mongodDialogue from "../../Audio/MonGod.mp3"

class Forest extends React.Component {
    state = {
        battleCount: 0,
        mongodDialogue: ["MonGod uses Zoombeam! Alan is trapped in the twilight zone - escape is now disabled!",
            "Mongod uses drop tree branch if exists! Obviously, it exists in a forest. Alan suffers a concussion!",
            "Mongod uses npm run seed! He's storing energy for his next attack",
            "Mongod uses .destroy()! Alan has fallen and can't get up. Our hero is trouble!"],
        playerDialogue: "",
        battleStarted: false,
        confirmedClick: false
    }

    startBattle = () => {
        this.setState({
            battleStarted: true
        })
    }

    confirmSkill = () => {
        this.setState({
            confirmedClick: true,
        })
    }

    continueBattle = () => {
        if (this.state.battleCount === 3) {
            this.props.history.push("/WorldMap")
        }
        this.setState({
            playerDialogue: "",
            confirmedClick: false,
            battleCount: this.state.battleCount + 1
        })
    }

    useAbility = (event) => {
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
        if (event.target.name === "pipes") {
            this.setState({
                playerDialogue: "Alan plays the bagpipes! It pleases MonGod's ears..wait what?"
            })
        }
    }

    render() {
        return (

            <div className="wrapper">
                <h1 className="ForestTitles">MonGod's Dom</h1>
                <img id="monGod" src={monGod} alt="monGod" />
                <div class="sliding-background"></div>
                <audio src={Sephiroth} autoPlay loop />
                <audio src={mongodDialogue} autoPlay />
                <img className="BG" src={ForestBG} alt="Forest" />


                <div id='finalContainer'>
                    {!this.state.battleStarted
                        ?
                        <div id="finalBox">

                            <h2 className="mongodUse">HAHA. Alan, you fool. Instead of hiding, you came straight to me?! You will fall just like your former!</h2>
                            <button onClick={this.startBattle} className="btn btn-danger confirm btn-lg challengeButton">Challenge MonGod!</button>
                        </div>
                        :
                        this.state.playerDialogue === ""
                            ?
                            <div id="skillBox">
                                <h1 id="skillHeader">Choose an Attack</h1>
                                <button name="fist" onClick={this.useAbility} className="btn-lg skillOne">Fist to Five</button>
                                <button name="break" onClick={this.useAbility} className="btn-lg skillTwo">Five Minute Stretch Break</button>
                                <button name="pseudo" onClick={this.useAbility} className="btn-lg skillThree">Pseudocode</button>
                                <button name="pipes" onClick={this.useAbility} className="btn-lg skillFour">Play the Bagpipes</button>
                            </div>
                            :
                            <div id="skillBox">
                                <h1 className={`skillUse ${this.state.confirmedClick && "visibleToggle"}`}>{this.state.playerDialogue}</h1>
                                <button onClick={this.confirmSkill} className={`btn btn-info confirm btn-lg confirmButton ${this.state.confirmedClick && "visibleToggle"}`}>Confirm</button>
                                <h3 className={`mongodUse ${!this.state.confirmedClick && "visibleToggle"}`}>{this.state.mongodDialogue[this.state.battleCount]}</h3>
                                <button onClick={this.continueBattle} className={`"btn btn-danger confirm btn-lg battleButton ${!this.state.confirmedClick && "visibleToggle"}`}>Welp</button>
                            </div>

                    }

                </div>



            </div>
        )
    }

}

export default Forest;