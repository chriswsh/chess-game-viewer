import Chess from './Chess';
import ChessJS from 'chess.js';

const nonStrings = [null, undefined, Infinity, Symbol(``), () => {}, {}];

describe(`algebraicName()`, () => {
    it('should convert a square ID to the correct algebaric notation', () => {
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
    it('should convert a square ID to the correct color, light or dark', () => {
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
    it(`should return undefined when passed non-strings`, () => {
        expect(Chess.getPieceColor(null)).toEqual(undefined);
        expect(Chess.getPieceColor(undefined)).toEqual(undefined);
        expect(Chess.getPieceColor(true)).toEqual(undefined);
        expect(Chess.getPieceColor(Infinity)).toEqual(undefined);
        expect(Chess.getPieceColor(Symbol(`test`))).toEqual(undefined);
        expect(Chess.getPieceColor(() => {})).toEqual(undefined);
        expect(Chess.getPieceColor({})).toEqual(undefined);
    });

    it(`should return 'dark' when passed a string beginning with 'b' or 'B'`, () => {
        expect(Chess.getPieceColor('b')).toEqual(`dark`);
        expect(Chess.getPieceColor('B')).toEqual(`dark`);
        expect(Chess.getPieceColor('basddf')).toEqual(`dark`);
        expect(Chess.getPieceColor('B23f32')).toEqual(`dark`);
    });

    it(`should return 'light' when passed a string beginning with 'w' or 'W'`, () => {
        expect(Chess.getPieceColor('w')).toEqual(`light`);
        expect(Chess.getPieceColor('W')).toEqual(`light`);
        expect(Chess.getPieceColor('wasddf')).toEqual(`light`);
        expect(Chess.getPieceColor('W23f32')).toEqual(`light`);
    });

    it(`should return undefined when passed any other string`, () => {
        expect(Chess.getPieceColor(``)).toEqual(undefined);
        expect(Chess.getPieceColor('test')).toEqual(undefined);
    });
});

describe(`getPieceName()`, () => {
    it(`should return undefined when passed non-strings`, () => {
        expect(nonStrings.map(Chess.getPieceName)).toEqual(Array.from({length: nonStrings.length}, () => undefined));
    });

    it(`should return 'king' when passed a string beginning with a second character 'k' or 'K'`, () => {
        expect(Chess.getPieceName('Bk')).toEqual(`king`);
        expect(Chess.getPieceName('bK')).toEqual(`king`);
        expect(Chess.getPieceName('bksddf')).toEqual(`king`);
        expect(Chess.getPieceName('BK3f32')).toEqual(`king`);
    });

    it(`should return 'queen' when passed a string beginning with a second character 'q' or 'Q'`, () => {
        expect(Chess.getPieceName('Bq')).toEqual(`queen`);
        expect(Chess.getPieceName('bQ')).toEqual(`queen`);
        expect(Chess.getPieceName('bqsddf')).toEqual(`queen`);
        expect(Chess.getPieceName('BQ3f32')).toEqual(`queen`);
    });

    it(`should return 'tower' when passed a string beginning with a second character 'r' or 'R'`, () => {
        expect(Chess.getPieceName('Br')).toEqual(`tower`);
        expect(Chess.getPieceName('bR')).toEqual(`tower`);
        expect(Chess.getPieceName('brsddf')).toEqual(`tower`);
        expect(Chess.getPieceName('BR3f32')).toEqual(`tower`);
    });

    it(`should return 'bishop' when passed a string beginning with a second character 'b' or 'B'`, () => {
        expect(Chess.getPieceName('Bb')).toEqual(`bishop`);
        expect(Chess.getPieceName('bB')).toEqual(`bishop`);
        expect(Chess.getPieceName('bbsddf')).toEqual(`bishop`);
        expect(Chess.getPieceName('BB3f32')).toEqual(`bishop`);
    });

    it(`should return 'knight' when passed a string beginning with a second character 'n' or 'N'`, () => {
        expect(Chess.getPieceName('Bn')).toEqual(`knight`);
        expect(Chess.getPieceName('bN')).toEqual(`knight`);
        expect(Chess.getPieceName('bnsddf')).toEqual(`knight`);
        expect(Chess.getPieceName('BN3f32')).toEqual(`knight`);
    });

    it(`should return 'pawn' when passed a string beginning with a second character 'p' or 'P'`, () => {
        expect(Chess.getPieceName('Bp')).toEqual(`pawn`);
        expect(Chess.getPieceName('bP')).toEqual(`pawn`);
        expect(Chess.getPieceName('bpsddf')).toEqual(`pawn`);
        expect(Chess.getPieceName('BP3f32')).toEqual(`pawn`);
    });

    it(`should return undefined when passed any other string`, () => {
        expect(Chess.getPieceName(``)).toEqual(undefined);
        expect(Chess.getPieceName('test')).toEqual(undefined);
    });
});

/* ChessJS Object converters */
const player1 = `Player 1`;
const player2 = `Player 2`;
const testPGN =
`[Event "Test"]
[Site "Test"]
[Date "Test"]
[Round "?"]
[White "${player1}"]
[Black "${player2}"]
[Result "1-0"]
[WhiteElo ""]
[BlackElo ""]
[ECO "B44"]

1.c4 Nf6 2.Nc3 e6 1-0`

let chessJS;

describe(`convertChessJSPiece`, () => {
    beforeEach(() => {
        chessJS = new ChessJS.Chess(); 
        chessJS.clear();
    });

    it(`should return an empty string if a square is empty`, () => {
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(``);
    });

    it(`should return the proper piece code if a square is not empty`, () => {
        chessJS.put({ type: chessJS.PAWN, color: chessJS.BLACK }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`bp`);

        chessJS.put({ type: chessJS.KNIGHT, color: chessJS.BLACK }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`bn`);

        chessJS.put({ type: chessJS.BISHOP, color: chessJS.BLACK }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`bb`);

        chessJS.put({ type: chessJS.ROOK, color: chessJS.BLACK }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`br`);

        chessJS.put({ type: chessJS.QUEEN, color: chessJS.BLACK }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`bq`);

        chessJS.put({ type: chessJS.KING, color: chessJS.BLACK }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`bk`);

        chessJS.put({ type: chessJS.PAWN, color: chessJS.WHITE }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wp`);

        chessJS.put({ type: chessJS.KNIGHT, color: chessJS.WHITE }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wn`);

        chessJS.put({ type: chessJS.BISHOP, color: chessJS.WHITE }, `a1`);
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wb`);

        chessJS.put({ type: chessJS.ROOK, color: chessJS.WHITE }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wr`);

        chessJS.put({ type: chessJS.QUEEN, color: chessJS.WHITE }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wq`);

        chessJS.put({ type: chessJS.KING, color: chessJS.WHITE }, `a1`)
        expect(Chess.convertChessJSPiece(chessJS.get(`a1`))).toEqual(`wk`);
    });
});

describe(`parsePGN()`, () => {
    it(`should return undefined when passed non-strings`, () => {
        expect(nonStrings.map(Chess.parsePGN)).toEqual(Array.from({length: nonStrings.length}, () => undefined));
    });

    it(`should return undefined when passed a non-parseable string`, () => {
        expect(Chess.parsePGN(`sdkhf`)).toEqual(undefined);
    });

    it(`should return an object with the moveList, history, player1 and player2 properties when passed a parseable PGN`, () => {
        const testee = Chess.parsePGN(testPGN);

        expect(testee.player1).toEqual(player1);
        expect(testee.player2).toEqual(player2);
        expect(testee.moveList).toEqual([`c4`, `Nf6`, `Nc3`, `e6`]);
        expect(testee.history).toEqual(expect.any(Array));
    });
});
