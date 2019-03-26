import React from "react";
import { Link } from "react-router-dom";
import OuterTownBG from '../../Backgrounds/OuterTown.jpg'



class OuterTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1 id="OuterTownTitle">Outer Town</h1>
                <img class="BG" src={OuterTownBG} alt="OuterTown" />

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
                        <button class="btn btn-success"><Link to="/OuterForest">Continue to forest</Link></button>
                        <button class="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                    </div>

            </div>
        )
    }

}

export default OuterTown;