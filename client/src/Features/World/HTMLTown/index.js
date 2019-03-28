import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import { Link } from "react-router-dom";
import worldBG from '../../../Backgrounds/PewterCity.png';
import NPC from '../../NPCs';

import { HTMLTiles } from './HTMLTiles'
import store from '../../../config/store'

import './HTMLTown.css'


function HTMLTown(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: HTMLTiles,
        name: "HTML Town"
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
    
        <Map tiles={HTMLTiles} name="HTML Town"/>
        <Player />
        <NPC />
        
        

            
        </div>
    )
}

export default HTMLTown