import './Chessboard.css';

import React, { Component } from 'react';
import Square from '../Square/Square';
import Chess from '../../utils/Chess';
import { withBEM } from '../../utils/BEM';

class Chessboard extends Component {
    // I render an individual square
    renderSquare(i) {
        return (
            <Square
                BEMmodifiers = { [Chess.squareColor(i)] }
                key = { i }
                id = { Chess.algebraicName(i) }
                piece = { this.props.board[i] }
            />
        );
    }

    // I render the chessboard
    render() {
        const squares = [];
        // squares[0] is a8
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div className={ this.props.BEMclass }>
                { squares }
            </div>
        );
    }
}

Chessboard.defaultProps = {
    board: []
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessboard = Object.freeze(withBEM(Chessboard, `Chessboard`));
export { BEMChessboard as Chessboard };
export { BEMChessboard as default };
