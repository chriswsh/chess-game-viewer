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

describe(`getPieceColor()`, () => {
    it (`should return undefined when passed non-strings`, () => {
        expect(Chess.getPieceColor(null)).toEqual(undefined);
        expect(Chess.getPieceColor(undefined)).toEqual(undefined);
        expect(Chess.getPieceColor(true)).toEqual(undefined);
        expect(Chess.getPieceColor(Infinity)).toEqual(undefined);
        expect(Chess.getPieceColor(Symbol(`test`))).toEqual(undefined);
        expect(Chess.getPieceColor(() => {})).toEqual(undefined);
        expect(Chess.getPieceColor({})).toEqual(undefined);
    });

    it (`should return 'dark' when passed a string beginning with 'b' or 'B'`, () => {
        expect(Chess.getPieceColor('b')).toEqual(`dark`);
        expect(Chess.getPieceColor('B')).toEqual(`dark`);
        expect(Chess.getPieceColor('basddf')).toEqual(`dark`);
        expect(Chess.getPieceColor('B23f32')).toEqual(`dark`);
    });

    it (`should return 'light' when passed a string beginning with 'w' or 'W'`, () => {
        expect(Chess.getPieceColor('w')).toEqual(`light`);
        expect(Chess.getPieceColor('W')).toEqual(`light`);
        expect(Chess.getPieceColor('wasddf')).toEqual(`light`);
        expect(Chess.getPieceColor('W23f32')).toEqual(`light`);
    });

    it (`should return undefined when passed any other string`, () => {
        expect(Chess.getPieceColor(``)).toEqual(undefined);
        expect(Chess.getPieceColor('test')).toEqual(undefined);
    });
});

describe(`getPieceName()`, () => {
    it (`should return undefined when passed non-strings`, () => {
        expect(Chess.getPieceName(null)).toEqual(undefined);
        expect(Chess.getPieceName(undefined)).toEqual(undefined);
        expect(Chess.getPieceName(true)).toEqual(undefined);
        expect(Chess.getPieceName(Infinity)).toEqual(undefined);
        expect(Chess.getPieceName(Symbol(`test`))).toEqual(undefined);
        expect(Chess.getPieceName(() => {})).toEqual(undefined);
        expect(Chess.getPieceName({})).toEqual(undefined);
    });

    it (`should return 'king' when passed a string beginning with a second character 'k' or 'K'`, () => {
        expect(Chess.getPieceName('Bk')).toEqual(`king`);
        expect(Chess.getPieceName('bK')).toEqual(`king`);
        expect(Chess.getPieceName('bksddf')).toEqual(`king`);
        expect(Chess.getPieceName('BK3f32')).toEqual(`king`);
    });

    it (`should return 'queen' when passed a string beginning with a second character 'q' or 'Q'`, () => {
        expect(Chess.getPieceName('Bq')).toEqual(`queen`);
        expect(Chess.getPieceName('bQ')).toEqual(`queen`);
        expect(Chess.getPieceName('bqsddf')).toEqual(`queen`);
        expect(Chess.getPieceName('BQ3f32')).toEqual(`queen`);
    });

    it (`should return 'rook' when passed a string beginning with a second character 'r' or 'R'`, () => {
        expect(Chess.getPieceName('Br')).toEqual(`rook`);
        expect(Chess.getPieceName('bR')).toEqual(`rook`);
        expect(Chess.getPieceName('brsddf')).toEqual(`rook`);
        expect(Chess.getPieceName('BR3f32')).toEqual(`rook`);
    });

    it (`should return 'bishop' when passed a string beginning with a second character 'b' or 'B'`, () => {
        expect(Chess.getPieceName('Bb')).toEqual(`bishop`);
        expect(Chess.getPieceName('bB')).toEqual(`bishop`);
        expect(Chess.getPieceName('bbsddf')).toEqual(`bishop`);
        expect(Chess.getPieceName('BB3f32')).toEqual(`bishop`);
    });

    it (`should return 'knight' when passed a string beginning with a second character 'n' or 'N'`, () => {
        expect(Chess.getPieceName('Bn')).toEqual(`knight`);
        expect(Chess.getPieceName('bN')).toEqual(`knight`);
        expect(Chess.getPieceName('bnsddf')).toEqual(`knight`);
        expect(Chess.getPieceName('BN3f32')).toEqual(`knight`);
    });

    it (`should return 'pawn' when passed a string beginning with a second character 'p' or 'P'`, () => {
        expect(Chess.getPieceName('Bp')).toEqual(`pawn`);
        expect(Chess.getPieceName('bP')).toEqual(`pawn`);
        expect(Chess.getPieceName('bpsddf')).toEqual(`pawn`);
        expect(Chess.getPieceName('BP3f32')).toEqual(`pawn`);
    });

    it (`should return undefined when passed any other string`, () => {
        expect(Chess.getPieceName(``)).toEqual(undefined);
        expect(Chess.getPieceName('test')).toEqual(undefined);
    });
});
