import Chess from "../utils/Chess";

// Action Types
export const ACTIONS = Object.freeze({
    SET_CURRENT_GAME_HASH: Symbol(`Set Current Game Hash`),
    SET_MOVE: Symbol(`Set Display Move`),
    LOAD_MOVE_LIST: Symbol(`Load Move List`),
    ADD_PREVIOUS_BOARD: Symbol(`Add Previous Board`),
    ADD_NEXT_BOARD: Symbol(`Add Next Board`),

    CHANGE_HEADER: Symbol(`Change Header`),
    LOAD_GAME_TO_DISPLAY: Symbol(`Load Game to Display`),

    CLEAR_MANIFEST: Symbol(`Clear Manifest`),
    LOAD_MANIFEST: Symbol(`Load Manifest`),

    HIDE_ALERT: Symbol(`Hide Alert`),
    HIDE_ALERT_IF_CURRENT_HASH: Symbol(
        `Hide Alert if Hash is state.currentHash`
    ),
    SHOW_ALERT: Symbol(`Show Alert`),
    SHOW_ALERT_IF_CURRENT_HASH: Symbol(
        `Show Alert if Hash is state.currentHash`
    ),

    ADD_TO_CACHE: Symbol(`Add to Cache`),
    REMOVE_FROM_CACHE: Symbol(`Remove from Cache`),
    CLEAR_CACHE: Symbol(`Clear Cache`),

    ADD_TO_FETCH_QUEUE: Symbol(`Add to Fetch Queue`),
    REMOVE_FROM_FETCH_QUEUE: Symbol(`Remove from Fetch Queue`),
    CLEAR_FETCH_QUEUE: Symbol(`Clear Fetch Queue`),

    NOTIFY_GAME_FETCH: Symbol(`Notify that a Game was Fetched`),

    HIDE_MODAL_DIALOG: Symbol(`Hide Modal Dialog`),
    SHOW_MODAL_DIALOG: Symbol(`Show Modal Dialog`),

    NO_OP: Symbol(`No Op`)
});

// Action Creators
export function setCurrentGameHash(hash) {
    return {
        type: ACTIONS.SET_CURRENT_GAME_HASH,
        hash
    };
}

export function setMove(moveNumber = 0) {
    return {
        type: ACTIONS.SET_MOVE,
        moveNumber
    };
}

export function loadMoveList(moveList = []) {
    return {
        type: ACTIONS.LOAD_MOVE_LIST,
        moveList
    };
}

export function addPreviousBoard(board = []) {
    return {
        type: ACTIONS.ADD_PREVIOUS_BOARD,
        board
    };
}

export function addNextBoard(board = []) {
    return {
        type: ACTIONS.ADD_NEXT_BOARD,
        board
    };
}

export function changeHeader(header) {
    const { White, Black } = header;

    return {
        type: ACTIONS.CHANGE_HEADER,
        player1: White,
        player2: Black
    };
}

export function loadGameToDisplay(parsedGame) {
    return {
        type: ACTIONS.LOAD_GAME_TO_DISPLAY,
        parsedGame
    };
}

export function clearManifest() {
    return {
        type: ACTIONS.CLEAR_MANIFEST,
        manifest: []
    };
}

export function loadManifest(manifest) {
    return {
        type: ACTIONS.LOAD_MANIFEST,
        manifest
    };
}

export function showAlert({ message = `Default Message`, style = `info` }) {
    return {
        type: ACTIONS.SHOW_ALERT,
        message,
        style,
        display: true
    };
}

export function showAlertIfCurrentHash(
    { message = `Default Message`, style = `info` },
    hash
) {
    return {
        type: ACTIONS.SHOW_ALERT_IF_CURRENT_HASH,
        message,
        style,
        display: true,
        hash
    };
}

export function hideAlert() {
    return {
        type: ACTIONS.HIDE_ALERT,
        display: false
    };
}

export function hideAlertIfCurrentHash(hash) {
    return {
        type: ACTIONS.HIDE_ALERT_IF_CURRENT_HASH,
        display: false,
        hash
    };
}

export function addToCache(newItem, hash) {
    return {
        type: ACTIONS.ADD_TO_CACHE,
        newItem,
        hash
    };
}

export function removeFromCache(hash) {
    return {
        type: ACTIONS.REMOVE_FROM_CACHE,
        hash
    };
}

export function clearCache() {
    return {
        type: ACTIONS.CLEAR_CACHE
    };
}

export function fetchGame(hash) {
    return dispatch => {
        // Set loading status
        dispatch(showAlert({ message: `Loading...`, style: `info` }));
        // Add to queue
        dispatch(addToFetchQueue(hash));

        // Simulate network latency
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        })
            .then(() => fetch(`/pgn/${hash}`))
            .then(res => res.text())
            .then(pgn => {
                const parsedGame = Chess.parsePGN(pgn);
                dispatch(
                    notifyGameFetch(
                        hash,
                        parsedGame.player1,
                        parsedGame.player2
                    )
                );
                dispatch(addToCache(parsedGame, hash));
                // dispatch(loadGameToDisplay(parsedGame));
                // dispatch(hideAlertIfCurrentHash(hash));
                dispatch(
                    showAlertIfCurrentHash(
                        { message: `Loaded Game from Fetch` },
                        hash
                    )
                );
                dispatch(removeFromFetchQueue(hash));
            })
            .catch(() => {
                dispatch(removeFromFetchQueue(hash));
            });
    };
}

export function addToFetchQueue(hash) {
    return {
        type: ACTIONS.ADD_TO_FETCH_QUEUE,
        hash
    };
}

export function removeFromFetchQueue(hash) {
    return {
        type: ACTIONS.REMOVE_FROM_FETCH_QUEUE,
        hash
    };
}

export function clearFetchQueue() {
    return {
        type: ACTIONS.CLEAR_FETCH_QUEUE
    };
}

export function notifyGameFetch(hash, player1, player2) {
    return {
        type: ACTIONS.NOTIFY_GAME_FETCH,
        hash,
        player1,
        player2
    };
}

export function hideModalDialog() {
    return {
        type: ACTIONS.HIDE_MODAL_DIALOG
    };
}

export function showModalDialog(dialogSettings) {
    return {
        type: ACTIONS.SHOW_MODAL_DIALOG,
        dialogSettings
    };
}

export function noop() {
    return {
        type: ACTIONS.NO_OP
    };
}
