const initialState = {
    position: [120, 80],
    spriteLocation: '0px 0px',
    direction: 'EAST',
    walkIndex: 0,
    // canInteract: false
    
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
            ...action.payload
            }
        case 'INTERACT_NPC':
            return {

            }
        default: 
            return state
    }
}

export default playerReducer