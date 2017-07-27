import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chess from 'chess.js';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControlsContainer from '../ChessControlsContainer/ChessControlsContainer';
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
        const PGN = fetch(`/pgn/1`)
            .then(res => res.text())
            .then(PGN => {
                chess.load_pgn(PGN);
                // load the move list into the store
                this.props.dispatch(loadMoveList(chess.history()));

                // load the move history into the store
                this.props.dispatch(addPreviousBoard(boardToArray(chess)));
                while (chess.undo()) this.props.dispatch(addPreviousBoard(boardToArray(chess)));

                // load the header information into store
                this.props.dispatch(changeHeader(chess.header()));
            })
            .catch((e) => {
                // TODO: Add error messaging
            });
    }

    render() {
        return (
            <div>
                <ChessHeader player1={ this.props.player1 } player2={ this.props.player2 } />
                <Chessboard board={ this.props.history[this.props.currentMove] } />
                <ChessControlsContainer />
                <ChessMoveList current={ this.props.currentMove } moveList={ this.props.moveList } />
            </div>
        );
    }
}

const ReduxChessViewer = Object.freeze(connect(mapStateToProps)(ChessViewer));
export { ReduxChessViewer as ChessViewer };
export { ReduxChessViewer as default };
