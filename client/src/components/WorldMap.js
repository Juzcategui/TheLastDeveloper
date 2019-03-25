import React from "react";
import { Link } from "react-router-dom";



class WorldMap extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                <p>World map</p>
                <Link to="/CSSHouse">CSS School</Link>
                <br />
                <Link to="/HTMLHouse">HTML School</Link>
                <br />
                <Link to="/JavascriptHouse">JavaScript School</Link>
                <br />
                <Link to="/ReactHouse">React School</Link>
                <br />
                <Link to="/OuterTown">Forest</Link>

            </div>
        )
    }

}

export default WorldMap;