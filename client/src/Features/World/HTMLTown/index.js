import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import worldBG from '../../../Backgrounds/VermillionCity.png'
import HTMLNPC from './HTML_NPC'
import RedRedWine from "../../../Audio/RedRedWine.mp3"

import { HTMLTiles } from './HTMLTiles'
import store from '../../../config/store'


function HTMLTown(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: HTMLTiles,
            name: "HTML Town"
        }
    })

    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: [1160, 200],
            spriteLocation: '0px 120px',
            walkIndex: 0
        }
    })

    return (

        <div

            style={{
                position: 'relative',
                width: '1280px',
                height: '720px',
                margin: '20px auto',
                backgroundImage: `url('${worldBG}')`
            }}>
            <Map tiles={HTMLTiles} name="HTML Town" />
            <Player />
            <HTMLNPC />
            <audio src={RedRedWine} autoPlay />


        </div>
    )
}

export default HTMLTown