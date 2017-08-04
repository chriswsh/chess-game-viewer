// Action Types
export const ACTIONS = Object.freeze({
    SET_MOVE: Symbol(`Set Display Move`),
    LOAD_MOVE_LIST: Symbol(`Load Move List`),
    ADD_PREVIOUS_BOARD: Symbol(`Add Previous Board`),
    ADD_NEXT_BOARD: Symbol(`Add Next Board`),
    CHANGE_HEADER: Symbol(`Change Header`),
    CLEAR_MANIFEST: Symbol(`Clear Manifest`),
    LOAD_MANIFEST: Symbol(`Load Manifest`),
    HIDE_ALERT: Symbol(`Hide Alert`),
    SHOW_ALERT: Symbol(`Show Alert`)
});

// Action Creators
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

export function addPreviousBoard(board = []) {
    return {
        type: ACTIONS.ADD_PREVIOUS_BOARD,
        board
    }
}

export function addNextBoard(board = []) {
    return {
        type: ACTIONS.ADD_NEXT_BOARD,
        board
    }
}

export function changeHeader(header) {
    const { White, Black } = header;

    return {
        type: ACTIONS.CHANGE_HEADER,
        player1: White,
        player2: Black
    }
}

export function clearManifest() {
    return {
        type: ACTIONS.CLEAR_MANIFEST,
        manifest: []
    }
}

export function loadManifest(manifest) {
    return {
        type: ACTIONS.LOAD_MANIFEST,
        manifest
    }
}

export function showAlert({message=`Default Message`, style=`info`}) {
    return {
        type: ACTIONS.SHOW_ALERT,
        message,
        style,
        display: true
    }
}

export function hideAlert() {
    return {
        type: ACTIONS.HIDE_ALERT,
        display: false
    }
}
