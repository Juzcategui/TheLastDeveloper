import React from "react";
import { Link } from "react-router-dom";



class Forest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>Forest (where mongoose is located)</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default Forest;