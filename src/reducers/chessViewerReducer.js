import Chess from '../utils/Chess';

const initialState = {
    player1: `Anonymous`,
    player2: `Anonymous`,
    currentMove: `1`,
    moveList: `e4 e5 Nf3 Nc6 Bc4 Bc5 0-0 Nf6 Nc3`.split(` `),
    board: Chess.initialBoard()
}

export default function chessViewerReducer(state = initialState, action) {
    return state;
}
