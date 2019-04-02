import React from 'react';
import Map from '../../../Map'
import Player from '../../../Player';
import caveBG from '../../../../Backgrounds/cave.png';
import CaveNPC from './cave_NPC';
import { CaveTiles } from './caveTiles'
import store from '../../../../config/store'



function Cave(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: CaveTiles,
            name: "cave"
        }
    })


    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: [520, 80],
            spriteLocation: '0px 160px',
            walkIndex: 0,
        }
    })

    return (

        <div
            style={{
                position: 'relative',
                width: '1280px',
                height: '720px',
                margin: '1px auto',
                backgroundImage: `url('${caveBG}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
            <Map tiles={CaveTiles} name="cave" />
            <Player />
            <CaveNPC />
        </div>
    )
}

export default Cave