import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControls from '../ChessControls/ChessControls';
import ChessMoveList from '../ChessMoveList/ChessMoveList';
import Chess from '../../utils/Chess';

import { loadMoveList } from '../../reducers/actions.js';

const mapStateToProps = state => {
    return Object.assign({}, state);
}

class ChessViewer extends Component {
    componentDidMount() {
        console.log(this.props.dispatch(loadMoveList(`e4 e5 Nf3 Nc6 Bc4 Bc5 0-0 Nf6 Nc3`.split(` `))));
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
