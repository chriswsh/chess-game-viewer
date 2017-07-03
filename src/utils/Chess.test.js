import Chess from './Chess';

describe(`algebraicName()`, () => {
    it ('should convert a square ID to the correct algebaric notation', () => {
        // 0 = top left corner, or a8; 7 = top right corner, or h8
        const squareIds = Array.from({length: 64}).map((_, i) => i);
        const algebraicNames = [
            `a8`, `b8`, `c8`, `d8`, `e8`, `f8`, `g8`, `h8`,
            `a7`, `b7`, `c7`, `d7`, `e7`, `f7`, `g7`, `h7`,
            `a6`, `b6`, `c6`, `d6`, `e6`, `f6`, `g6`, `h6`,
            `a5`, `b5`, `c5`, `d5`, `e5`, `f5`, `g5`, `h5`,
            `a4`, `b4`, `c4`, `d4`, `e4`, `f4`, `g4`, `h4`,
            `a3`, `b3`, `c3`, `d3`, `e3`, `f3`, `g3`, `h3`,
            `a2`, `b2`, `c2`, `d2`, `e2`, `f2`, `g2`, `h2`,
            `a1`, `b1`, `c1`, `d1`, `e1`, `f1`, `g1`, `h1`,
        ];

        expect(squareIds.map(Chess.algebraicName)).toEqual(algebraicNames);
    });
});

describe(`squareColor()`, () => {
    it ('should convert a square ID to the correct color, light or dark', () => {
        // 0 = top left corner, or a8; 7 = top right corner, or h8
        const squareIds = Array.from({length: 64}).map((_, i) => i);
        const colors = [
            `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`,
            `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`,
            `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`,
            `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`,
            `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`,
            `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`,
            `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`,
            `dark`, `light`, `dark`, `light`, `dark`, `light`, `dark`, `light`,
        ];

        expect(squareIds.map(Chess.squareColor)).toEqual(colors);
    });
});