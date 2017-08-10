import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chessboard from '../Chessboard/Chessboard';
import ChessHeader from '../ChessHeader/ChessHeader';
import ChessControlsContainer from '../ChessControlsContainer/ChessControlsContainer';
import ChessMoveList from '../ChessMoveList/ChessMoveList';
import ChessGameSelectorContainer from '../ChessGameSelectorContainer/ChessGameSelectorContainer';
import ChessStatusBarContainer from '../ChessStatusBarContainer/ChessStatusBarContainer';

import DebugCacheDisplay from '../debug/CacheDisplay/CacheDisplay';

import { loadMoveList, addPreviousBoard, changeHeader, loadManifest, showAlert } from '../../reducers/actions.js';

const mapStateToProps = state => {
    return Object.assign({}, state.display);
}

class ChessViewer extends Component {
    componentDidMount() {      
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
                <ChessGameSelectorContainer />
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
