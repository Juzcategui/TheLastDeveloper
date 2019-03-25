import React from "react";
import { Link } from "react-router-dom";



class ReactHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>React House</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default ReactHouse;