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
                        <button class="btn btn-danger">Action 1</button>
                        <button class="btn btn-danger">Action 2</button>
                    </div>

                    <div>
                        <div id="characterName">
                            <p>Insert character name</p>
                        </div>

                        <div id="textBox">
                            <h1>Welcome WillBucks, how can I help?</h1>
                            <p>Alexander</p>
                        </div>
                    </div>

                    <Link to="/WorldMap">World Map</Link>
                </div>
            </div>
        )
    }

}

export default WillBucks;