import './ChessButton.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

function ChessButton(props) {
    return (
        <button type="button" className={ `btn ${ props.BEMclass }` }>
                <span className={`glyphicon glyphicon-${ props.glyph }`}>
                </span>
        </button>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessButton = Object.freeze(withBEM(ChessButton));
export { BEMChessButton as ChessButton };
export { BEMChessButton as default };
