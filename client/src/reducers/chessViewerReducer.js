import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const initialState = Object.freeze({
    alerts: {
        message: ``,
        style: ``,
        display: false,
        currentHash: ``
    },
    display: {
        currentHash: ``,
        player1: `Anonymous`,
        player2: `Anonymous`,
        currentMove: 0,
        moveList: [],
        history: [],
        manifest: [] // contains { description: `string`, hash: `string` }
    }, 
    cache: {
    },
    fetchQueue: []
});

function alerts(state = initialState.alerts, action) {
    switch (action.type) {
        case ACTIONS.SHOW_ALERT:
            return Object.assign({}, state, { message: action.message, style: action.style, display: action.display });
        case ACTIONS.HIDE_ALERT:
            return Object.assign({}, state, { display: action.display });
        case ACTIONS.SET_CURRENT_GAME_HASH:
            return Object.assign({}, state, { currentHash: action.hash });
        case ACTIONS.SHOW_ALERT_IF_CURRENT_HASH:
            if (action.hash === state.currentHash) {
                return Object.assign({}, state, { message: action.message, style: action.style, display: action.display });            
            }
            return state;
        case ACTIONS.HIDE_ALERT_IF_CURRENT_HASH:
            if (action.hash === state.currentHash) {
                return Object.assign({}, state, { display: action.display });            
            }
            return state;
        default:
            return state;
    }
}

function display(state = initialState.display, action) {
    // console.log(`Received display action: ${action.type.toString()}`)
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
        case ACTIONS.LOAD_GAME_TO_DISPLAY:
            // Only change the display if we have a match
            // console.log(`comparing ${action.parsedGame.hash} with ${state.currentHash}`);
            if (action.parsedGame.hash === state.currentHash) {
                return Object.assign({}, state, { currentMove: 0 }, action.parsedGame);
            }
            return state;
        case ACTIONS.SET_CURRENT_GAME_HASH:
            return Object.assign({}, state, { currentHash: action.hash });
        default: return state;
    }
}

function cache(state = initialState.cache, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_CACHE:
            return Object.assign({}, state, { [action.hash]: action.newItem } );
        case ACTIONS.REMOVE_FROM_CACHE:
            if (undefined === state[action.hash]) return state;
            const { [action.hash]: removed, ...newState } = state;
            return Object.assign({}, newState);
        case ACTIONS.CLEAR_CACHE:
            return initialState.cache;
        default: return state;
    }
}

function fetchQueue(state = initialState.fetchQueue, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_FETCH_QUEUE:
            if (!state.includes(action.hash)) return state.concat([action.hash]);
            return state;
        case ACTIONS.REMOVE_FROM_FETCH_QUEUE:
            if (state.includes(action.hash)) return state.filter((elem) => (elem !== action.hash));
            return state;
        case ACTIONS.CLEAR_FETCH_QUEUE:
            return initialState.fetchQueue;
        default: return state;
    }
}

export default combineReducers({ alerts, display, cache, fetchQueue });
