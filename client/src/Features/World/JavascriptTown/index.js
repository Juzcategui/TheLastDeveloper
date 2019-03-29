import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import { Link } from "react-router-dom";
import worldBG from '../../../Backgrounds/SaffronCity.png'
import JavascriptNPC from "./Javascript_NPC"
import { JavascriptTiles } from './JavascriptTiles'
import store from '../../../config/store'


function JavascriptTown(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: JavascriptTiles,
        name: "Javascript Town"
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
        <Map tiles={JavascriptTiles} name="Javascript Town"/>
        <Player />
        <JavascriptNPC />

            
        </div>
    )
}

export default JavascriptTown