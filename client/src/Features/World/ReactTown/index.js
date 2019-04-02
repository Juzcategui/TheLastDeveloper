import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import worldBG from '../../../Backgrounds/PewterCity.png'
import ReactNPC from './React_NPC';
import WaltzForZizi from '../../../Audio/WaltzForZizi.mp3'
import { ReactTiles } from './ReactTiles'
import store from '../../../config/store'


function ReactTown(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: ReactTiles,
            name: "React Town"
        }
    })

    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: [1200, 440],
            spriteLocation: '0px 120px',
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
            <Map tiles={ReactTiles} name="React Town" />
            <Player />
            <ReactNPC />
            <audio src={WaltzForZizi} autoPlay loop />

        </div>
    )
}

export default ReactTown