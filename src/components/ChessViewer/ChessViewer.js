import React, { Component } from 'react';
import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControls from '../ChessControls/ChessControls';
import ChessMoveList from '../ChessMoveList/ChessMoveList';
import Chess from '../../utils/Chess'

class ChessViewer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            player1: `Anonymous`,
            player2: `Anonymous`,
            currentMove: `1`,
            moveList: `e4 e5 Nf3 Nc6 Bc4 Bc5 0-0 Nf6 Nc3`.split(` `),
            board: Chess.initialBoard()
        }
    }

    render() {
        return (
            <div>
                <ChessHeader player1={ this.state.player1 } player2={ this.state.player2 } />
                <Chessboard board={ this.state.board } />
                <ChessControls />
                <ChessMoveList current={ this.state.currentMove } moveList={ this.state.moveList } />
            </div>
        );
    }
}

ChessViewer = Object.freeze(ChessViewer);
export { ChessViewer as ChessViewer };
export { ChessViewer as default };
