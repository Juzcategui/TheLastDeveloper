import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import worldBG from '../../../Backgrounds/SaffronCity.png'
import JavascriptNPC from "./Javascript_NPC"
import { JavascriptTiles } from './JavascriptTiles'
import store from '../../../config/store'
import WelcomeToMyWorld from '../../../Audio/WelcomeToMyWorld.mp3'

function JavascriptTown(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: JavascriptTiles,
            name: "Javascript Town"
        }
    })

    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: [80, 520],
            spriteLocation: '0px 80px',
            walkIndex: 0
        }
    })

    store.dispatch({
        type: "TALK_NPC",
        payload: {
            dialogue: "",
            npcPos: [],
            isShown: false,
            isTravel: false
        }
    });

    return (

        <div
            style={{
                position: 'relative',
                width: '1280px',
                height: '720px',
                margin: '1px auto',
                backgroundImage: `url('${worldBG}')`
            }}>
            <Map tiles={JavascriptTiles} name="Javascript Town" />
            <Player />
            <JavascriptNPC />
            <audio src={WelcomeToMyWorld} autoPlay loop />

        </div>
    )
}

export default JavascriptTown