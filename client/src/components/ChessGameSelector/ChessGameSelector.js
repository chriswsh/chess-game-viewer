import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { showAlert, hideAlert } from '../../reducers/actions';

const mapStateToProps = state => {
    return Object.assign({}, {manifest: state.display.manifest });
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: (game) => { dispatch(showAlert( {message: `Loading game ${game}`, style: `info` })) },
        clearBoard: () => { dispatch(hideAlert())}
    };
}

class ChessGameSelector extends Component {
    constructor(props) {
        super(props);
    }

    renderMenuItem(menuItemText, index) {
        return (
            <MenuItem eventKey={ index + 1 } key={ index } onClick={ () => { this.props.loadGame(menuItemText) } }>{ menuItemText }</MenuItem>
        );
    }

    render() {
        return (
            <DropdownButton title="Choose Game" id="Game Selector">
                { this.props.manifest.map(this.renderMenuItem, this) }
                <MenuItem divider />
                <MenuItem eventKey="0" onClick={ () => { this.props.clearBoard() }}>Clear Board</MenuItem>
            </DropdownButton>
        );
    }
}

const ReduxChessGameSelector = Object.freeze(connect(mapStateToProps, mapDispatchToProps)(ChessGameSelector));
export { ReduxChessGameSelector as ChessGameSelector }
export { ReduxChessGameSelector as default }
