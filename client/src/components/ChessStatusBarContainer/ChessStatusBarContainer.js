import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChessStatusBar from '../ChessStatusBar/ChessStatusBar';

const mapStateToProps = state => {
    return Object.assign({}, { message: state.alerts.message, style: state.alerts.style, display: state.alerts.display });
}

function ChessStatusBarContainer(props) {
    if (props.display) {
        return (
            <div>
                <ChessStatusBar message={ props.message } style={ props.style }>
                </ChessStatusBar>
            </div>
        )
    }

    return null;
}

const ReduxChessStatusBarContainer = Object.freeze(connect(mapStateToProps)(ChessStatusBarContainer));
export { ReduxChessStatusBarContainer as ChessStatusBarContainer }
export { ReduxChessStatusBarContainer as default }
