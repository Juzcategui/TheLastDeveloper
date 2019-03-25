import React from 'react';
import Map from '../Map';
import Player from '../Player';
import { Link } from "react-router-dom";
import NPC from '../NPCs';

import { tiles } from '../../Data/Maps/1'
import store from '../../config/store'

function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: tiles,
    }})
    
    return (
<<<<<<< HEAD
        <div
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                margin: '20px auto',
                backgroundImage: `url('https://i.imgur.com/Gi96eDg.png')`
            }}>
=======
        <div>
        <img class="BG" src="https://i.imgur.com/Gi96eDg.png" alt="background" />
>>>>>>> 1fd801ed0e363ab47b1ac45343478d476097e419
            <Link to="/Town">Town Link</Link>
            {/* <Map tiles={tiles}/> */}
            <Player />
            <NPC />

                <img id="JS" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="REACT" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="HTML" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="CSS" src="http://i.imgur.com/hgvDp.gif"></img>
                                

                <img id="tForest" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="tTown" src="http://i.imgur.com/hgvDp.gif"></img>

        </div>
    )
}

export default World