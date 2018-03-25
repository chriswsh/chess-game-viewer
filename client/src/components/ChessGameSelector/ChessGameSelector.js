import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropdownButton, MenuItem } from "react-bootstrap";

class ChessGameSelector extends Component {
    renderMenuItem(menuItem, index) {
        const { description, hash } = menuItem;

        if (description === this.props.symbols.divider) {
            return <MenuItem divider key={index} />;
        }
        if (description === this.props.symbols.clear) {
            return (
                <MenuItem
                    eventKey="0"
                    key={index}
                    onClick={() => {
                        this.props.clearBoard();
                    }}
                >
                    Clear Board
                </MenuItem>
            );
        }

        return (
            <MenuItem
                eventKey={index + 1}
                key={hash}
                onClick={() => {
                    this.props.loadGame(
                        hash,
                        this.props.currentHash,
                        this.props.cache,
                        this.props.queue
                    );
                }}
            >
                {description}
            </MenuItem>
        );
    }

    render() {
        return (
            <DropdownButton title="Choose Game" id="Game Selector">
                {this.props.list.map(this.renderMenuItem, this)}
            </DropdownButton>
        );
    }
}

ChessGameSelector.propTypes = {
    list: PropTypes.array.isRequired, // list to display
    loadGame: PropTypes.func.isRequired, // function to load game
    clearBoard: PropTypes.func.isRequired, // function to clear board
    symbols: PropTypes.object.isRequired // special symbols
};

ChessGameSelector.defaultProps = {
    list: [{ description: `Loading games...`, hash: `0` }], // use nonsensical hash to indicate default value
    loadGame: () => {},
    clearBoard: () => {},
    symbols: {}
};

export { ChessGameSelector };
export { ChessGameSelector as default };
