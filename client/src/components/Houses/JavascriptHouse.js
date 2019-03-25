import React from "react";
import { Link } from "react-router-dom";



class JavascriptHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>Javascript House</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default JavascriptHouse;