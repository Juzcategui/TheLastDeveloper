import React from "react";
import { Link } from "react-router-dom";
import OuterForestBG from '../../Backgrounds/OuterForest.jpg'
import Spooky from '../../Audio/Spooky.mp3'

class OuterForest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <audio src={Spooky} autoPlay loop />
                <h1 className="ForestTitles">Inner Forest</h1>
                <img className="BG" src={OuterForestBG} alt="OuterForest" />


                <div id='DialogContainer'>


                    <div id="textBox">
                        <h4>It grows quiet. The birds are no longer singing and the air has become stagnant and eerie. Something is near...</h4>
                        <Link to="/Forest">
                            <button className="btn btn-success confirm">Keep going</button></Link>
                    </div>
                </div>

                <div id="actionBox">

                    <Link to="/OuterTown">
                        <button className="btn btn-secondary">Go back</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default OuterForest;