import React from "react";
import { Link } from "react-router-dom";



class OuterTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1 id="OuterTownTitle">Outer Town</h1>
                <img class="BG" src="https://www.worldanvil.com/uploads/images/9838c98639a93b36c7a844678ce882c6.jpg" alt="OuterTown" />

                <div>
                    <div id="characterBox">
                        <button class="btn btn-success"><Link to="/OuterForest">Continue to forest</Link></button>
                        <button class="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                    </div>

                    <div id="characterName">
                            <p>Insert character name here</p>
                        </div>

                    <div id="textBox">
                        <h3>Theres something that smells nearby, but you realized it was just you.</h3>
                        <p>Ya piece of garbage</p>

                    </div>
                </div>

            </div>
        )
    }

}

export default OuterTown;