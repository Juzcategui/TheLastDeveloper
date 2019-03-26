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
                <h1 className="ForestTitles">Outer Forest</h1>
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
                <button className="btn btn-success"><Link to="/Forest">Continue to forest</Link></button>
                    <button className="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                </div>

            </div>
        )
    }

}

export default OuterForest;