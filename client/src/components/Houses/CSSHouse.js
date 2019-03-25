import React from "react";
import { Link } from "react-router-dom";



class CSSHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>CSS House</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default CSSHouse;