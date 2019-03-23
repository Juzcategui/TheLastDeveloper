import React from 'react';
import Map from '../Map';
import Player from '../Player';

import { tiles } from '../../Data/Maps/1'

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}>
            <Map tiles={tiles} />
            <Player />
        </div>
    )
}

export default World