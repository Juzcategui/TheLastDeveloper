import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import worldBG from '../../../Backgrounds/CeruleanCity.png'
import './CSSTownStyle.css'
import CSSNPC from './CSS_NPC'
import { CSSTiles } from './CSSTiles'
import store from '../../../config/store'
import Anville from '../../../Audio/Anville.mp3'

function CSSTown(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: CSSTiles,
            name: "CSS Town"
        }
    })

    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: [40, 200],
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
            <Map tiles={CSSTiles} name="CSS Town" />
            <Player />
            <CSSNPC />
            <audio src={Anville} autoPlay loop />
        </div>
    )
}

export default CSSTown