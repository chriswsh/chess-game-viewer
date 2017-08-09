import md5 from 'js-md5';

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
    SHOW_ALERT: Symbol(`Show Alert`),

    ADD_TO_CACHE: Symbol(`Add to Cache`),
    REMOVE_FROM_CACHE: Symbol(`Remove from Cache`),
    CLEAR_CACHE: Symbol(`Clear cache`),

    NO_OP: Symbol(`No Op`)
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

export function addToCache(pgn, hash) {
    // Return a no-op action if the pgn isn't a string, or the hashes don't match
    if (typeof pgn !== `string`) {
        return {
            type: ACTIONS.NO_OP
        }
    }
    else {
        if (md5(pgn) !== hash) {
            return {
                type: ACTIONS.NO_OP
            }
        }
    }

    return {
        type: ACTIONS.ADD_TO_CACHE,
        pgn,
        hash
    }
}

export function removeFromCache(hash) {
    return {
        type: ACTIONS.REMOVE_FROM_CACHE,
        hash
    }
}

export function clearCache() {
    return {
        type: ACTIONS.CLEAR_CACHE
    }
}
