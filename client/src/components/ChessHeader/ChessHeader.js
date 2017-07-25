import './ChessHeader.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

function ChessHeader(props) {
    return (
        <div className={ props.BEMclass }>
            <h2>{ `${props.player1}-${props.player2}` }</h2>
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessHeader = Object.freeze(withBEM(ChessHeader, `ChessHeader`));
export { BEMChessHeader as ChessHeader };
export { BEMChessHeader as default };
