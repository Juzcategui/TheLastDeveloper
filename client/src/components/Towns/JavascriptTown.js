import React from "react";
import { Link } from "react-router-dom";



class JavascriptTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1>Javascript Junkies</h1>
                <Link to="/JavascriptHouse">Javascript House</Link>
                <br />
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default JavascriptTown;