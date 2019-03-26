import React from "react";
import { Link } from "react-router-dom";



class ReactTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1></h1>
                <Link to="/ReactHouse">Rivers of React</Link>
                <br />
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default ReactTown;