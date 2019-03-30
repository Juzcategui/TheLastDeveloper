import React from "react";
import { Link } from "react-router-dom";
import OuterForestBG from '../../Backgrounds/OuterForest.jpg'


class OuterForest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1 className="ForestTitles">Inner Forest</h1>
                <img className="BG" src={OuterForestBG} alt="OuterForest" />


                <div id='DialogContainer'>


                    <div id="textBox">
                        <h4>It grows quiet. The birds are no longer singing and the air has become stagnant and eerie. Something is near...</h4>
                        <Link to="/Forest">
                            <button className="btn btn-success confirm">Dive In</button></Link>
                    </div>
                </div>

                <div id="actionBox">

                    <Link to="/WorldMap">
                        <button className="btn btn-secondary">World Map</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default OuterForest;