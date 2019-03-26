import React from "react";
import { Link } from "react-router-dom";
import REACTBG from "../../Backgrounds/VermillionCity.png"


class ReactTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                
                <img class="BG" src={REACTBG} alt="REACTBG" />
                <h1 id="REACTTitle">RIVER OF REACT</h1>
                <Link to="/ReactHouse">
                    <img id="REACT" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>
                <Link to="/WorldMap">
                    <img id="REACTWorld" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <img id="REACTSprite1" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="REACTSprite2" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="REACTSprite3" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="REACTSprite4" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="REACTSprite5" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
            
            </div>
        )
    }

}

export default ReactTown;