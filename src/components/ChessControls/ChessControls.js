import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

function ChessControls(props) {
    return (
        <div className={ props.BEMclass }>
            <h1>Buttons!</h1>
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessControls = Object.freeze(withBEM(ChessControls));
export { BEMChessControls as ChessControls };
export { BEMChessControls as default };
