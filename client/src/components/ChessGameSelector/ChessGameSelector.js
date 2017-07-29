import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const mapStateToProps = state => {
    return Object.assign({}, {manifest: state.manifest });
}

const mapDispatchToProps = dispatch => {
    return {};
}

class ChessGameSelector extends Component {
    constructor(props) {
        super(props);
    }

    renderMenuItem(menuItemText, index) {
        return (
            <MenuItem eventKey={ index + 1 } key={ index }>{ menuItemText }</MenuItem>
        );
    }

    render() {
        return (
            <DropdownButton title="Choose Game" id="Game Selector">
                { this.props.manifest.map(this.renderMenuItem) }
                <MenuItem divider />
                <MenuItem eventKey="0">Clear Board</MenuItem>
            </DropdownButton>
        );
    }
}

const ReduxChessGameSelector = Object.freeze(connect(mapStateToProps, mapDispatchToProps)(ChessGameSelector));
export { ReduxChessGameSelector as ChessGameSelector }
export { ReduxChessGameSelector as default }
