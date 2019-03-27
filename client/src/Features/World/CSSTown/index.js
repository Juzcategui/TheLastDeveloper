import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import { Link } from "react-router-dom";
import worldBG from '../../../Backgrounds/CeruleanCity.png'
import './CSSTownStyle.css'

import { CSSTiles } from './CSSTiles'
import store from '../../../config/store'


function CSSTown(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: CSSTiles,
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
        <Map tiles={CSSTiles}/>
        <Player />

            
        </div>
    )
}

export default CSSTown