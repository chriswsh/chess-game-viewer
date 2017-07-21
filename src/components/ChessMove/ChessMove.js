import './ChessMove.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

class ChessMove extends Component {
    componentDidUpdate(prevProps, prevState) {
        // scroll if this ChessMove has focus
        // The state should always begin from an initial board (no ChessMoves
        // have focus), so we're not running on componentDidMount
        if (prevProps.focus !== this.props.focus && this.props.focus !== undefined) {
            this.myDiv.scrollIntoView();
        }
    }

    render() {
        return (
            <div className={ this.props.BEMclass } ref={ (me) => { this.myDiv = me } }>
                <div className={ this.props.focus !== undefined ? `focus` : undefined }>{ this.props.move }.</div>
                <div
                    className={ this.props.focus === 0 ? `focus` : undefined }
                    >{ this.props.first }
                </div>
                <div
                    className={ this.props.focus === 1 ? `focus` : undefined }
                    >{ this.props.second }
                </div>
            </div>
        );
    }
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessMove = Object.freeze(withBEM(ChessMove));
export { BEMChessMove as ChessMove };
export { BEMChessMove as default };
