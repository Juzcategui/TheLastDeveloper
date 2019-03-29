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

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Theres something that smells nearby, but you realized it was just you.</h3>
                        <p>Ya piece of garbage</p>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/OuterForest">
                        <button className="btn btn-success">Continue to forest</button>
                    </Link>
                    <Link to="/WorldMap">
                        <button className="btn btn-secondary">World Map</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default OuterTown;