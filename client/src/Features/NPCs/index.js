import React from 'react';
import { connect } from 'react-redux';
import NPCSprite from './NPC_Sprite_Stand.png';

function NPC(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '30px',
                left: '50px',
                backgroundImage: `url('${NPCSprite}')`,
                backgroundPosition: '0 0',
                width: '66px',
                height: '66px',
            }}

        />
    )
}

export default NPC