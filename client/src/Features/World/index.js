import React from 'react';
import Map from '../Map';
import Player from '../Player';
import { Link } from "react-router-dom";

import { tiles } from '../../Data/Maps/1'
import store from '../../config/store'

function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: tiles,
    }})
    
    return (
    <div>
        <Link to="/Town">Town Link</Link>
        <img alt="JS" id="JS" src="http://i.imgur.com/hgvDp.gif"></img>
                <img alt="REACT" id="REACT" src="http://i.imgur.com/hgvDp.gif"></img>
                <img alt="HTML" id="HTML" src="http://i.imgur.com/hgvDp.gif"></img>
                <img alt="CSS" id="CSS" src="http://i.imgur.com/hgvDp.gif"></img>
                                

                <img alt="tForest" id="tForest" src="http://i.imgur.com/hgvDp.gif"></img>
                <img alt="tTown" id="tTown" src="http://i.imgur.com/hgvDp.gif"></img>
        <div
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                margin: '20px auto',
                backgroundImage: `url('https://i.imgur.com/Gi96eDg.png')`
            }}>
            <Map tiles={tiles}/>
            <Player />

                

        </div>
    </div>
    )
}

export default World