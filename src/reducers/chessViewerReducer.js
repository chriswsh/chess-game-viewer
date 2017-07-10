import Chess from '../utils/Chess';
import { ACTIONS } from './actions'

const initialState = {
    player1: `Anonymous`,
    player2: `Anonymous`,
    currentMove: `0`,
    moveList: [],
    history: [Chess.initialBoard()]
}

export default function chessViewerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOAD_MOVE_LIST:
            return Object.assign({}, state, { moveList: action.moveList });
        default:
            return state;
    }
}
