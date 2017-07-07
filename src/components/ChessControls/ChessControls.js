import './ChessControls.css';

import React, { Component } from 'react';
import ChessButton from '../ChessButton/ChessButton';
import { withBEM } from '../../utils/BEM';

function ChessControls(props) {
    return (
        <div className={ `btn-group ${props.BEMclass}` }>
            <ChessButton command={ `first` } glyph={ `fast-backward` } />
            <ChessButton command={ `previous` } glyph={ `backward` } />
            <ChessButton command={ `next` } glyph={ `forward` } />
            <ChessButton command={ `last` } glyph={ `fast-forward` } />
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessControls = Object.freeze(withBEM(ChessControls));
export { BEMChessControls as ChessControls };
export { BEMChessControls as default };
