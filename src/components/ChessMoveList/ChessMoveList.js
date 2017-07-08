import './ChessMoveList.css';

import React, { Component } from 'react';
import ChessMove from '../ChessMove/ChessMove';
import { withBEM } from '../../utils/BEM';

class ChessMoveList extends Component {
    // I render an individual move
    renderMove(move, first, second = ``, focus) {
        return (
            <ChessMove key={ move } move={ move } first={ first } second={ second } focus={ focus } />
        );
    }

    render() {
        const moves = [];

        for (let i = 0; i < this.props.moveList.length; i += 2) {
            if (this.props.current > i && this.props.current <= i + 2) {
                moves.push(this.renderMove(i / 2 + 1, this.props.moveList[i], this.props.moveList[i+1], (this.props.current - 1) % 2));
            } else {
                moves.push(this.renderMove(i / 2 + 1, this.props.moveList[i], this.props.moveList[i+1]));
            }
        }

        return (
            <div className={ this.props.BEMclass }>
                { moves }
            </div>
        );
    }
}

ChessMoveList.defaultProps = {
    moveList: [],
    current: 0
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessMoveList = Object.freeze(withBEM(ChessMoveList));
export { BEMChessMoveList as ChessMoveList };
export { BEMChessMoveList as default };
