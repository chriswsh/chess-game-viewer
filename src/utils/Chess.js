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

const Chess = Object.freeze({ algebraicName, squareColor });
export default Chess;
