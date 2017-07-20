import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessControls from '../ChessControls/ChessControls';

const mapStateToProps = state => {
    // The history contains the initial board state as move zero,
    // so subtract 1 from the length to correct
    return Object.assign({}, { currentMove: state.currentMove, lastMove: state.history.length ? state.history.length - 1 : 0 })
}

function ChessControlsContainer(props) {
    const controlList = [ { move: 0, glyph: `fast-backward` },
                        { move: props.currentMove ? props.currentMove - 1 : 0, glyph: `backward` }, 
                        { move: props.currentMove < props.lastMove ? props.currentMove + 1 : props.lastMove, glyph: `forward` },
                        { move: props.lastMove, glyph: `fast-forward` }
                        ];
    
    return (<ChessControls controls={ controlList } />);
}

const ReduxChessControlsContainer = Object.freeze(connect(mapStateToProps)(ChessControlsContainer));
export { ReduxChessControlsContainer as ChessControlsContainer }
export { ReduxChessControlsContainer as default }
