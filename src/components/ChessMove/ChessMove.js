import './ChessMove.css';

import React from 'react';
import { withBEM } from '../../utils/BEM';

function ChessMove(props) {
    return (
        <div className={ props.BEMclass }>{`${props.move}. ${props.first} ${props.second} `}</div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessMove = Object.freeze(withBEM(ChessMove));
export { BEMChessMove as ChessMove };
export { BEMChessMove as default };
