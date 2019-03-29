import React from 'react';
import Map from '../../Map'
import Player from '../../Player/';
import { Link } from "react-router-dom";
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
<<<<<<< HEAD
            
=======
            <audio src={RedRedWine} autoPlay/>
>>>>>>> 4cd8b32204e0045c39faaeed392378f3c175033a


        </div>
    )
}

export default HTMLTown