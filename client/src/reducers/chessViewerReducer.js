import { ACTIONS } from './actions'

const initialState = {
    player1: `Anonymous`,
    player2: `Anonymous`,
    currentMove: 0,
    moveList: [],
    history: [],
    manifest: []
}

export default function chessViewerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOAD_MOVE_LIST:
            if (!Array.isArray(action.moveList)) action.moveList = [];
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
        default:
            return state;
    }
}
