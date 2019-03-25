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

                <Link to="/Town">Town</Link>
                <br />
                <Link to="/OuterTown">Forest</Link>

            </div>
        )
    }

}

export default WorldMap;