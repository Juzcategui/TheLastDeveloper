import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './Alan_B.png';
import { handleKeyDown } from './movement';

class Player extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', handleKeyDown);
    } 

    componentWillUnmount () {
        window.removeEventListener('keydown', handleKeyDown);
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: this.props.position[1],
                    left: this.props.position[0],
                    backgroundImage: `url('${walkSprite}')`,
                    backgroundPosition: this.props.spriteLocation,
                    width: '40px',
                    height: '40px',
                }}
    
            />
        )
    }
}

//this gets the position stored in our redux state to the props of the player component. Connector is higher level component.
//function that returns a function

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}
//connects our player function to the React data store, and will map the redux state to the react state.
export default connect(mapStateToProps)(Player);