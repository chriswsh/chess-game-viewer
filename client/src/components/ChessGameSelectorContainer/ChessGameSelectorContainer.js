import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ChessGameSelector from '../ChessGameSelector/ChessGameSelector';

import { showAlert, hideAlert } from '../../reducers/actions';

const mapStateToProps = state => {
    return Object.assign({}, { manifest: state.display.manifest });
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: (game) => { dispatch(showAlert( {message: `Loading game ${game}`, style: `info` })) },
        clearBoard: () => { dispatch(hideAlert()) }
    };
}

const symbols = { divider: Symbol(`Game Selector Divider`), clear: Symbol(`Game Selector Clear`) }

export function fullGameList(list) {
    if (!Array.isArray(list)) return undefined;

    if (list.length > 0) return [ ...list, { description: symbols.divider }, { description: symbols.clear } ]

    return undefined; // use undefined if empty list so that default props can take over
}

function ChessGameSelectorContainer(props) {
    return (
        <ChessGameSelector list={ fullGameList(props.manifest)} symbols={ symbols } loadGame={ props.loadGame } clearBoard={ props.clearBoard }/>
    );
}

ChessGameSelectorContainer.propTypes = {
    manifest: PropTypes.array.isRequired,
    loadGame: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired
}

const ReduxChessGameSelectorContainer = Object.freeze(connect(mapStateToProps, mapDispatchToProps)(ChessGameSelectorContainer));
export { ReduxChessGameSelectorContainer as ChessGameSelectorContainer }
export { ReduxChessGameSelectorContainer as default }
