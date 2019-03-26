import React from "react";
import { Link } from "react-router-dom";
import JSBG from "../../Backgrounds/SaffronCity.png"



class JavascriptTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src={JSBG} alt="JSBG" />
                <h1 id="JSTitle">Javascript Junkies</h1>
                <Link to="/JavascriptHouse">
                    <img id="JS" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>
                <Link to="/WorldMap">
                    <img id="JSWorld" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <img id="JSSprite1" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="JSSprite2" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="JSSprite3" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="JSSprite4" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
                <img id="JSSprite5" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" onclick=""></img>
            
            </div>
        )
    }

}

export default JavascriptTown;