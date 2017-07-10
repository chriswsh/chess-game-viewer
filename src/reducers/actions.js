// Action Types
export const ACTIONS = Object.freeze({
    SET_MOVE: Symbol(`Set Display Move`),
    LOAD_MOVE_LIST: Symbol(`Load Move List`)
});

// Action Creators {
export function setMove(moveNumber = 0) {
    return {
        type: ACTIONS.SET_MOVE,
        moveNumber
    }
}

export function loadMoveList(moveList = []) {
    return {
        type: ACTIONS.LOAD_MOVE_LIST,
        moveList
    }
}
