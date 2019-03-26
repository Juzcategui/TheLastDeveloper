import React from "react";
import { Link } from "react-router-dom";
import REACTBG from "../../Backgrounds/VermillionCity.png"
import portal from "../../SVG/portal.gif"


class ReactTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                
                <img className="BG" src={REACTBG} alt="REACTBG" />
                <h1 className="TownTitles">RIVER OF REACT</h1>
                <Link to="/ReactHouse">
                    <img id="REACT"src={portal} alt="portal"></img>
                </Link>
                <Link to="/WorldMap">
                    <img id="REACTWorld"src={portal} alt="portal"></img>
                </Link>

                <img id="REACTSprite1" src="https://clipartmagic.com/wp-content/uploads/2018/01/gif-clipart-shark-clipart-gif-animation-5.jpg" onclick=""></img>
                <img id="REACTSprite2" src="https://clipartmagic.com/wp-content/uploads/2018/01/gif-clipart-shark-clipart-gif-animation-5.jpg" onclick=""></img>
                <img id="REACTSprite3" src="https://clipartmagic.com/wp-content/uploads/2018/01/gif-clipart-shark-clipart-gif-animation-5.jpg" onclick=""></img>
                <img id="REACTSprite4" src="https://clipartmagic.com/wp-content/uploads/2018/01/gif-clipart-shark-clipart-gif-animation-5.jpg" onclick=""></img>
                <img id="REACTSprite5" src="https://clipartmagic.com/wp-content/uploads/2018/01/gif-clipart-shark-clipart-gif-animation-5.jpg" onclick=""></img>
            
            </div>
        )
    }

}

export default ReactTown;