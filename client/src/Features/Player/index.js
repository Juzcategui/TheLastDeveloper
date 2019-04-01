import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './ab.png';
import { handleKeyDown } from './movement';
import { withRouter } from "react-router-dom";

var isDown = false;

class Player extends React.Component {


    handleKeyDown = (e) => {
        if (isDown) return;
        isDown = true;
        handleKeyDown(e, this.props.history);
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);

        window.addEventListener('keyup', function () {
            isDown = false;
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
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
                    transitionProperty: 'left, right, top, bottom',
                    transitionDuration: '.35s'
                }}

            />
        )
    }
}

//this gets the position stored in our redux state to the props of the player component. Connector is higher level component.
//function that returns a function

function mapStateToProps(state) {
    return {
        ...state.player
    }
}
//connects our player function to the React data store, and will map the redux state to the react state.
export default withRouter(connect(mapStateToProps)(Player));