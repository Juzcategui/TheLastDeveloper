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
        case 11:
            return 'worldMapPortal'
        case 10:
            return 'actionTile'


        // CSS Town 
        case 20:
            return 'cssHousePortal'
        case 21:
            return 'cssLin'
        case 22:
            return 'cssBarry'
        case 23:
            return 'cssMartin'
        case 24:
            return 'cssTony'
        case 25:
            return 'cssJenny'

        // HTML Town
        case 30:
            return 'htmlHousePortal'
        case 31:
            return 'htmlHarrison'
        case 32:
            return 'htmlMark'
        case 33:
            return 'htmlLeonardo'
        case 34:
            return 'htmlMichaelangelo'
        case 35:
            return 'htmlRaphael'

        // JS Town
        case 40:
            return 'jsHousePortal'
        case 41:
            return 'jsPeter'
        case 42:
            return 'jsAaron'
        case 43:
            return 'jsGarrett'
        case 44:
            return 'jsMia'
        case 45:
            return 'jsAlexander'

        // React Town
        case 50:
            return 'reactHousePortal'
        case 51:
            return 'reactErwins'
        case 52:
            return 'reactPaige'
        case 53:
            return 'reactCraigster'
        case 54:
            return 'reactPatrick'
        case 55:
            return 'reactCamila'

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