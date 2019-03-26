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
                <img className= "BG" src={willBucks} alt="WillBucks"></img>

                <h1 id="WillBucksTitle">Welcome to WillBucks!</h1>
                <div>
                    <div id='DialogContainer'>
                        <div id="characterName">
                            <p>Insert character name here</p>
                        </div>
                        <div id="textBox">
                            <h3>Welcome to WillBucks, how can I help?</h3>
                            <p>Alexander</p>
                        </div>
                    </div>
                    <div id="actionBox">
                        <button className= "btn btn-success"><Link to="/WorldMap">World Map</Link></button>
                    </div>
                </div>
            </div>
        )
    }

}

export default WillBucks;