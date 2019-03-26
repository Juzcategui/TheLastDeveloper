import React from "react";
import { Link } from "react-router-dom";
import JSBG from "../../Backgrounds/SaffronCity.png"
import portal from "../../SVG/portal.gif"



class JavascriptTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img className="BG" src={JSBG} alt="JSBG" />
                <h1 id="JSTitle">Javascript Junkies</h1>
                <Link to="/JavascriptHouse">
                    <img id="JS"src={portal} alt="portal"></img>
                </Link>
                <Link to="/WorldMap">
                    <img id="JSWorld"src={portal} alt="portal"></img>
                </Link>

                <img id="JSSprite1" src="https://media2.giphy.com/media/11SkwxAbmyArra/giphy.gif" onclick=""></img>
                <img id="JSSprite2" src="https://media2.giphy.com/media/11SkwxAbmyArra/giphy.gif" onclick=""></img>
                <img id="JSSprite3" src="https://media2.giphy.com/media/11SkwxAbmyArra/giphy.gif" onclick=""></img>
                <img id="JSSprite4" src="https://media2.giphy.com/media/11SkwxAbmyArra/giphy.gif" onclick=""></img>
                <img id="JSSprite5" src="https://media2.giphy.com/media/11SkwxAbmyArra/giphy.gif" onclick=""></img>
            
            </div>
        )
    }

}

export default JavascriptTown;