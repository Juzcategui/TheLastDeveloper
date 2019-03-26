import React from "react";
import { Link } from "react-router-dom";



class WorldMap extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <img class="BG" src="https://www.creativeuncut.com/gallery-17/art/com-world-map.jpg" alt="WorldMap" />

                <Link to="/JavascriptTown">Javascript Junkies</Link>
                <br />
                <Link to="/ReactTown">Rivers of React</Link>
                <br />
                <Link to="/HTMLTown">House of HTML</Link>
                <br />
                <Link to="/CSSTown">CSS Cults</Link>
                <br />
                <Link to="/OuterTown">Forest</Link>
                <br />
                <Link to="/SecretCave">Secret Cave</Link>
                <br />
                <Link to="/WillBucks">WillBucks</Link>
            </div>
        )
    }

}

export default WorldMap;