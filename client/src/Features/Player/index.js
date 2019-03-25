import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './Walk_animation.png';
import handleMovement from './movement';

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: '50px',
                height: '50px',
            }}

        />
    )
}

//this gets the position stored in our redux state to the props of the player component. Connector is higher level component.
//function that returns a function

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));