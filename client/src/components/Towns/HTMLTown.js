import React from "react";
import { Link } from "react-router-dom";



class HTMLTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1>House of HTML</h1>
                <Link to="/HTMLHouse">HTML House</Link>
                <br />
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default HTMLTown;