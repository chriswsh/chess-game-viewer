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
            move: `1`,
            board: Chess.initialBoard()
        }
    }

    render() {
        return (
            <div>
                <ChessHeader player1={ this.state.player1 } player2={ this.state.player2 } />
                <Chessboard board={ this.state.board } />
                <ChessControls />
                <ChessMoveList />
            </div>
        );
    }
}

ChessViewer = Object.freeze(ChessViewer);
export { ChessViewer as ChessViewer };
export { ChessViewer as default };
