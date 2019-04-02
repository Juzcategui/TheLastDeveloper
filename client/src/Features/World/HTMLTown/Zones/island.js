import React from 'react';
import Map from '../../../Map'
import Player from '../../../Player';
import islandBG from '../../../../Backgrounds/island_1.png';
import IslandNPC from './island_NPC';
import { IslandTiles } from './islandTiles'
import store from '../../../../config/store'
import MaskOff from '../../../../Audio/MaskOff.mp3'


function Island(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: IslandTiles,
            name: "island"
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
                margin: '1px auto',
                backgroundImage: `url('${islandBG}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
            <Map tiles={IslandTiles} name="island" />
            <Player />
            <IslandNPC />
            <audio src={MaskOff} autoPlay loop />
        </div>
    )
}

export default Island