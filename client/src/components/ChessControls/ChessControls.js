import './ChessControls.css';

import React, { Component } from 'react';
import ChessButton from '../ChessButton/ChessButton';
import { withBEM } from '../../utils/BEM';

class ChessControls extends Component {
    constructor(props) {
        super(props);
    }

    renderButton({ move, glyph }, index) {
        return(
            <ChessButton move={ move } glyph={ glyph } key={ index }>
            </ChessButton>
        );
    }

    render() {
        return (
            <div className={ `btn-group ${this.props.BEMclass}` }>
                { this.props.controls.map(this.renderButton) }
            </div>
        );
    }
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessControls = Object.freeze(withBEM(ChessControls, `ChessControls`));
export { BEMChessControls as ChessControls };
export { BEMChessControls as default };
