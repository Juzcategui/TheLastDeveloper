import React from "react";
import { Link } from "react-router-dom";
import willBucks from "../../Backgrounds/WillBucks.jpg"



class WillBucks extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={willBucks} alt="WillBucks"></img>

                <h1 id="WillBucksTitle">Welcome to WillBucks!</h1>
                <div>

                    <div id="characterBox">
                        <p>Insert picture here</p>

                        <div id="characterName">
                            <p>Insert character name here</p>
                        </div>
                    </div>

                    <div id="textBox">
                        <h1>Welcome to ya doom...</h1>
                        <p>Alexander</p>

                    </div>

                <Link to="/WorldMap">World Map</Link>
            </div>
            </div>
        )
    }

}

export default WillBucks;