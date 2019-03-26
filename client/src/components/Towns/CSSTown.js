import React from "react";
import { Link } from "react-router-dom";



class CSSTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1>CSS Cult</h1>
                <Link to="/CSSHouse">CSS House</Link>
                <br />
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default CSSTown;