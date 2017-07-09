import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControls from '../ChessControls/ChessControls';
import ChessMoveList from '../ChessMoveList/ChessMoveList';
import Chess from '../../utils/Chess';

const mapStateToProps = state => {
    return Object.assign({}, state);
}

class ChessViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ChessHeader player1={ this.props.player1 } player2={ this.props.player2 } />
                <Chessboard board={ this.props.board } />
                <ChessControls />
                <ChessMoveList current={ this.props.currentMove } moveList={ this.props.moveList } />
            </div>
        );
    }
}

const ReduxChessViewer = Object.freeze(connect(mapStateToProps)(ChessViewer));
export { ReduxChessViewer as ChessViewer };
export { ReduxChessViewer as default };
