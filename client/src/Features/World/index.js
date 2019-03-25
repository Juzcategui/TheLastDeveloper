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
        <div
            style={{
                position: 'relative',
                width: '1000px',
                height: '800px',
                margin: '20px auto',
                backgroundImage: `url('https://i.imgur.com/Gi96eDg.png')`
            }}>
            <Link to="/Town">Town Link</Link>
            <Map tiles={tiles} />
            <Player />
            <NPC />

        </div>
    )
}

export default World