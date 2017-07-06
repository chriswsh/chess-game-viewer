import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

function ChessHeader(props) {
    return (
        <div className={ props.BEMclass }>
            <h1>{ `${props.player1} vs. ${props.player2}` }</h1>
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessHeader = Object.freeze(withBEM(ChessHeader));
export { BEMChessHeader as ChessHeader };
export { BEMChessHeader as default };
