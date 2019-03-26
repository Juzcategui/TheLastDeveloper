import React from 'react';
import Map from '../Map';
// import Player from '../Player';
import { Link } from "react-router-dom";

import { tiles } from '../../Data/Maps/1'

function World(props) {
    return (
        <div>
            <img className="BG" src="https://i.imgur.com/Gi96eDg.png" alt="background" />
            {/* <Map tiles={tiles}/> */}
            {/* <Player /> */}

            <Link to="/JavascriptHouse">
                <img id="JS" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>

            <Link to="/ReactHouse">
                <img id="REACT" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>

            <Link to="/HTMLHouse">
                <img id="HTML" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>

            <Link to="/CSSHouse">
                <img id="CSS" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>


            <Link to="/OuterTown">
                <img id="tForest" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>

            <Link to="/Town">
                <img id="tTown" src="http://i.imgur.com/hgvDp.gif"></img>
            </Link>

        </div>
    )
}

export default World