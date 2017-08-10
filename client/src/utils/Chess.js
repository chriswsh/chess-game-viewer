// Chess themed utilities
import { default as ChessJS } from 'chess.js';
import md5 from 'js-md5';

// I convert a square key (0-63) to the square's name in algebraic notation
// 0 = top left corner, or a8; 7 = top right corner, or h8
export function algebraicName(i) {
    return String.fromCharCode(97 + (i % 8)) + (8 - Math.floor(i / 8));
}

// I convert a square key (0-63) to the square's color (light/dark)
// 0 = top left corner, or a8; 7 = top right corner, or h8
export function squareColor(i) {
    let color = i % 2;
    color = (Math.floor(i / 8) % 2) ? Math.abs(color - 1) : color;

    return color ? `dark` : `light`;
}

// I return the piece color (`light` or `dark) from a two letter piece code
export function getPieceColor(piece) {
    if (typeof piece !== `string`) return undefined;

    switch(piece.substr(0,1).toUpperCase()) {
        case `B`:
            return `dark`;
        case `W`:
            return `light`;
        default:
            return undefined;
    }
}

// I return the piece name (`king`, `queen`, `rook`, bishop`, `knight` or `pawn)
// from a two letter piece code
export function getPieceName(piece) {
    if (typeof piece !== `string`) return undefined;

    switch(piece.substr(1,1).toUpperCase()) {
        case `K`:
            return `king`;
        case `Q`:
            return `queen`;
        case `R`:
            return `tower`;
        case `B`:
            return `bishop`;
        case `N`:
            return `knight`;
        case `P`:
            return `pawn`;
        default:
            return undefined;
    }
}

/* ChessJS Converters */

// The unit tests fail unless it's new Chess.Chess(),
// but the dev server faults when it is new Chess.Chess(),
// so let's try both. This issue be indicative of how different
// environments might react.
let chessJS;

try {
    chessJS = new ChessJS();
}
catch (e) {
    chessJS = new ChessJS.Chess();
}

export function convertChessJSPiece(chessJSPiece) {
    if (chessJSPiece === null) return ``;

    return chessJSPiece.color + chessJSPiece.type;
}

export function convertChessJSBoardToArray(chessJSObject) {
    const board = [];

    for (let rank = 8; rank > 0; rank--) {
        for (let file = `a`.charCodeAt(0); file <= `h`.charCodeAt(0); file++) {
            board.push(chessJSObject.get(String.fromCharCode(file) + rank));
        }
    }

    return board.map(convertChessJSPiece);
}

// I parse a PGN into the object format used by the viewer
export function parsePGN(pgn) {
    if (typeof pgn !== `string`) return undefined;
    if (!chessJS.load_pgn(pgn)) return undefined;

    const moveList = chessJS.history();
    let history = convertChessJSBoardToArray(chessJS);
    while (chessJS.undo()) history = [convertChessJSBoardToArray(chessJS)].concat(history);
    const player1 = chessJS.header().White;
    const player2 = chessJS.header().Black;
    const hash = md5(pgn);

    return {
        moveList,
        history,
        player1,
        player2,
        hash
    }
}

const Chess = Object.freeze({ algebraicName, squareColor, getPieceColor, getPieceName, convertChessJSPiece, convertChessJSBoardToArray, parsePGN });
export default Chess;
