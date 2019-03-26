import React from "react";
import { Link } from "react-router-dom";
import worldMap from "../../Backgrounds/WorldMap.png"
import ReactSVG from "../../SVG/react.png"
import HTMLSVG from "../../SVG/html.png"
import CSSSVG from "../../SVG/css.png"
import JSSVG from "../../SVG/js.png"
import mongoSVG from "../../SVG/mongo.png"



class WorldMap extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <h1 id="WorldMapTitle">WORLD MAP</h1>
                <img class="BG" src={worldMap} alt="WorldMap" />

                {/* <h3 class="JSWorldTitle">Javascript Junkies</h3> */}
                <Link to="/JavascriptTown">
                    <img id="JavascriptJunkies" src={JSSVG} alt="JSVG"></img>
                </Link>

                {/* <h3 class="ReactWorldTitle">Rivers of React</h3> */}
                <Link to="/ReactTown">
                <img id="RiversOfReact" src={ReactSVG} alt="ReactSVG"></img>
                </Link>

                {/* <h3 class="HTMLWorldTitle">House of HTML</h3> */}
                <Link to="/HTMLTown">
                <img id="HouseOfHTML" src={HTMLSVG} alt="HTMLSVG"></img>
                </Link>

                {/* <h3 class="CSSWorldTitle">CSS Cult</h3> */}
                <Link to="/CSSTown">
                    <img id="CSSCult" src={CSSSVG} alt="CSSSVG"></img>
                </Link>

                {/* <h3 class="ForestWorldTitle">Forest</h3> */}
                <Link to="/OuterTown">
                    <img id="ForestWorldMap" src={mongoSVG} alt="mongoSVG"></img>
                </Link>

                <h3 class="SecretCaveWorldTitle">???</h3>
                <Link to="/SecretCave">
                    <img id="SecretCaveWorldMap" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                {/* <h3 class="WillBucksWorldTitle">WillBucks</h3> */}
                <Link to="/WillBucks">
                    <img id="WillBucksWorldMap" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>
            </div>
        )
    }

}

export default WorldMap;