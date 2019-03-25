import React from "react";
import { Link } from "react-router-dom";



class HTMLHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>HTML House</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default HTMLHouse;