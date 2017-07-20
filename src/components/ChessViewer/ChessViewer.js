import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chess from 'chess.js';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControls from '../ChessControls/ChessControls';
import ChessMoveList from '../ChessMoveList/ChessMoveList';

import { loadMoveList, addPreviousBoard, changeHeader } from '../../reducers/actions.js';

function convertChessJSPiece(chessJSPiece) {
    if (chessJSPiece === null) return ``;

    return chessJSPiece.color + chessJSPiece.type;
}

function boardToArray(chessJSObject) {
    const board = [];

    for (let rank = 8; rank > 0; rank--) {
        for (let file = `a`.charCodeAt(0); file <= `h`.charCodeAt(0); file++) {
            board.push(chessJSObject.get(String.fromCharCode(file) + rank));
        }
    }

    return board.map(convertChessJSPiece);
}

const mapStateToProps = state => {
    return Object.assign({}, state);
}

class ChessViewer extends Component {
    componentDidMount() {
        // The unit tests fail unless it's new Chess.Chess(),
        // but the dev server faults when it is new Chess.Chess(),
        // so let's try both. This issue be indicative of how different
        // environments might react.
        let chess;

        try {
            chess = new Chess();
        }
        catch (e) {
            chess = new Chess.Chess();
        }

        // Sample PGN
        const PGN =
`[Event "USA-ch"]
[Site "New York"]
[Date "1958.??.??"]
[Round "5"]
[White "Benko, Pal C"]
[Black "Fischer, Robert James"]
[Result "1/2-1/2"]
[WhiteElo ""]
[BlackElo ""]
[ECO "E61"]

1.d4 Nf6 2.c4 g6 3.g3 Bg7 4.Bg2 O-O 5.Nc3 c5 6.e3 Nc6 7.Nge2 d6 8.O-O Bd7
9.b3 Rb8 10.Bb2 a6 11.dxc5 dxc5 12.Na4 b6 13.Nf4 Na5 14.Be5 Rc8 15.Qc2 Bxa4
16.bxa4 Nd7 17.Bxg7 Kxg7 18.Bh3 Qe8 19.Qc3+ Kg8 20.Rad1 Rd8 21.Nd5 e6 22.Nxb6 Nxb6
23.Rxd8 Qxd8 24.Qxa5 Nxc4 25.Qxd8 Rxd8 26.Rc1 Nb2 27.a5 c4 28.Rc2 Rb8 29.Bf1 Rb5  1/2-1/2`;
        
        // load the PGN
        chess.load_pgn(PGN);
        // load the move list into the store
        this.props.dispatch(loadMoveList(chess.history()));

        // load the move history into the store
        this.props.dispatch(addPreviousBoard(boardToArray(chess)));
        while (chess.undo()) this.props.dispatch(addPreviousBoard(boardToArray(chess)));

        // load the header information into store
        this.props.dispatch(changeHeader(chess.header()));
    }

    render() {
        return (
            <div>
                <ChessHeader player1={ this.props.player1 } player2={ this.props.player2 } />
                <Chessboard board={ this.props.history[this.props.currentMove] } />
                <ChessControls />
                <ChessMoveList current={ this.props.currentMove } moveList={ this.props.moveList } />
            </div>
        );
    }
}

const ReduxChessViewer = Object.freeze(connect(mapStateToProps)(ChessViewer));
export { ReduxChessViewer as ChessViewer };
export { ReduxChessViewer as default };
