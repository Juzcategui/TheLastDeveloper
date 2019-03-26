import React from "react";
import { Link } from "react-router-dom";



class OuterForest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1 id="OuterForestTitle">Outer Forest</h1>
                <img class="BG" src="https://stmed.net/sites/default/files/fantasy-ruin-wallpapers-28159-6449676.jpg" alt="OuterForest" />


                <div>
                    <div id="characterBox">
                    <button class="btn btn-success"><Link to="/Forest">Continue deeper</Link></button>
                        <button class="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                    </div>

                    <div id="characterName">
                            <p>Insert character name here</p>
                        </div>

                    <div id="textBox">
                        <h3>Get ready for a beatdown</h3>
                        <p>Lil boi</p>

                    </div>
                </div>

            </div>
        )
    }

}

export default OuterForest;