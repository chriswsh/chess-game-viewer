import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chess from 'chess.js';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControlsContainer from '../ChessControlsContainer/ChessControlsContainer';
import ChessMoveList from '../ChessMoveList/ChessMoveList';
import ChessGameSelector from '../ChessGameSelector/ChessGameSelector';
import ChessStatusBarContainer from '../ChessStatusBarContainer/ChessStatusBarContainer';

import { loadMoveList, addPreviousBoard, changeHeader, loadManifest, showAlert } from '../../reducers/actions.js';

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
    return Object.assign({}, state.display);
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
       
        // Fetch game manifest
        fetch(`/pgn/manifest`)
            .then(res => res.json())
            .then(manifest => {
                this.props.dispatch(loadManifest(manifest.manifest));
            });
    }

    render() {
        return (
            <div>
                <ChessStatusBarContainer />
                <ChessGameSelector />
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
