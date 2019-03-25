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
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}>
            <Link to="/Town">Town Link</Link>
            <Map tiles={tiles} />
            <Player />

        </div>
    )
}

export default World