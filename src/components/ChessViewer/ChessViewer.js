import React, { Component } from 'react';
import Chessboard from '../Chessboard/Chessboard';
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
            <Chessboard board={this.state.board} />
        );
    }
}

ChessViewer = Object.freeze(ChessViewer);
export { ChessViewer as ChessViewer };
export { ChessViewer as default };
