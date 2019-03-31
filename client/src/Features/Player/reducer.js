const initialState = {
    position: [200, 280],
    spriteLocation: '0px 0px',
    direction: 'EAST',
    walkIndex: 0
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
            ...action.payload
            }
        default: 
            return state
    }
}

export default playerReducer