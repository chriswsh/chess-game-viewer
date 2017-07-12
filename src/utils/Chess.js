// Chess themed utilities

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

const Chess = Object.freeze({ algebraicName, squareColor, getPieceColor, getPieceName });
export default Chess;
