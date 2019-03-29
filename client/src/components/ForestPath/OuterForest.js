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

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Get ready for a beatdown...</h3>
                        <p>Lil boi</p>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/Forest">
                        <button className="btn btn-success">Continue to forest</button></Link>
                    <Link to="/WorldMap">
                        <button className="btn btn-secondary">World Map</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default OuterForest;