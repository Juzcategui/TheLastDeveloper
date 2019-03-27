import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import { Link } from "react-router-dom";
import worldBG from '../../../Backgrounds/VermillionCity.png'

import { ReactTiles } from './ReactTiles'
import store from '../../../config/store'


function ReactTown(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: ReactTiles,
    }})
    
    return (

        <div
        style={{
            position: 'relative',
            width: '1280px',
            height: '720px',
            margin: '20px auto',
            backgroundImage: `url('${worldBG}')`
        }}>
        <Map tiles={ReactTiles}/>
        <Player />

            
        </div>
    )
}

export default ReactTown