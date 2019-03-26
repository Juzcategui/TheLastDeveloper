import React from "react";
import { Link } from "react-router-dom";



class SecretCave extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>Cody's man cave</p>
                <Link to="/WorldMap">World Map</Link>
            </div>
        )
    }

}

export default SecretCave;