import React from "react";
import { Link } from "react-router-dom";
import OuterTownBG from '../../Backgrounds/OuterTown.jpg'
import ForestNoises from '../../Audio/ForestNoises.mp3'


class OuterTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <audio src={ForestNoises} autoPlay loop />
                <h1 className="ForestTitles">Outer Town</h1>
                <img className="BG" src={OuterTownBG} alt="OuterTown" />

                <div id='DialogContainer'>


                    <div id="textBox">
                        <h4>For a place where an evil entity resides, it doesn't seem far off from an ordinary forest. Explore deeper?</h4>
                        <Link to="/OuterForest">
                            <button className="btn btn-success confirm">Confirm</button>
                        </Link>
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

export default OuterTown;