import { createStore, combineReducers } from 'redux';
import playerReducer from '../Features/Player/reducer';

//javascript object with key/value pairs; value of player is whatever reducer returns//
const rootReducer = combineReducers({
    player: playerReducer,

})

//this allows browser to "inspect the redux store" while using the app//
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
