import React from 'react';
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
    switch (type) {

        // Global scope
        case 0:
            return 'grass'
        case 1:
            return 'rock'
        case 8: 
            return 'sign'
        case 11:
            return 'worldMapPortal'
        case 10:
            return 'actionTile'
        case 12:
            return 'islandPort'
        

        default:
            return;

    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
    />
}

function MapRow(props) {
    return <div className="row">
        {
            props.tiles.map((tile, i) => <MapTile key={i} tile={tile} />)
        }
    </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '1280px',
                height: '720px',
                backgroundColor: 'transparent',
                border: '4px solid white',
            }}
        >

            {
                props.tiles.map((row, i) => <MapRow key={i} tiles={row} />)
            }

        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)