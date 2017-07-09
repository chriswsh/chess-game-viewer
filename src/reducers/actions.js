// Action Types
export const ACTIONS = Object.freeze({
    SET_MOVE: Symbol(`Set Display Move`)
});

// Action Creators {
export function setMove(moveNumber = 0) {
    return {
        type: SET_MOVE,
        moveNumber
    }
}
