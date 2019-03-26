import React from "react";
import { Link } from "react-router-dom";



class WorldMap extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <h1 id="WorldMapTitle">WORLD MAP</h1>
                <img class="BG" src="https://www.creativeuncut.com/gallery-17/art/com-world-map.jpg" alt="WorldMap" />

                <h3 class="JSWorldTitle">Javascript Junkies</h3>
                <Link to="/JavascriptTown">
                    <img id="JavascriptJunkies" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="ReactWorldTitle">Rivers of React</h3>
                <Link to="/ReactTown">
                <img id="RiversOfReact" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="HTMLWorldTitle">House of HTML</h3>
                <Link to="/HTMLTown">
                <img id="HouseOfHTML" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="CSSWorldTitle">CSS Cult</h3>
                <Link to="/CSSTown">
                    <img id="CSSCult" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="ForestWorldTitle">Forest</h3>
                <Link to="/OuterTown">
                    <img id="ForestWorldMap" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="SecretCaveWorldTitle">???</h3>
                <Link to="/SecretCave">
                    <img id="SecretCaveWorldMap" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

                <h3 class="WillBucksWorldTitle">WillBucks</h3>
                <Link to="/WillBucks">
                    <img id="WillBucksWorldMap" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>
            </div>
        )
    }

}

export default WorldMap;