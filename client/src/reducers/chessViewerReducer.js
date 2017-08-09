import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const initialState = {
    alerts: {
        message: ``,
        style: ``,
        display: false
    },
    display: {
        player1: `Anonymous`,
        player2: `Anonymous`,
        currentMove: 0,
        moveList: [],
        history: [],
        manifest: [] // contains { description: `string`, hash: `string` }
    }, 
    cache: {

    }
}

function alerts(state = initialState.alerts, action) {
    switch (action.type) {
        case ACTIONS.SHOW_ALERT:
            return Object.assign({}, state, { message: action.message, style: action.style, display: action.display });
        case ACTIONS.HIDE_ALERT:
            return Object.assign({}, state, { display: action.display });
        default:
            return state;
    }
}

function display(state = initialState.display, action) {
    switch (action.type) {
        case ACTIONS.LOAD_MOVE_LIST:
            return Object.assign({}, state, { moveList: action.moveList });
        case ACTIONS.ADD_PREVIOUS_BOARD:
            return Object.assign({}, state, { history: [action.board].concat(state.history) });
        case ACTIONS.ADD_NEXT_BOARD:
            return Object.assign({}, state, { history: state.history.concat(action.board) });
        case ACTIONS.CHANGE_HEADER:
            return Object.assign({}, state, { player1: action.player1, player2: action.player2 });
        case ACTIONS.SET_MOVE:
            return Object.assign({}, state, { currentMove: action.moveNumber });
        case ACTIONS.LOAD_MANIFEST:
            return Object.assign({}, state, { manifest: action.manifest });
        case ACTIONS.CLEAR_MANIFEST:
            return Object.assign({}, state, { manifest: [] });
        default: return state;
    }
}

function cache(state = initialState.cache, action) {
    switch (action.type) {
        default: return state;
    }
}

export default combineReducers({ alerts, display, cache });
