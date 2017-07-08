import './ChessMove.css';

import React from 'react';
import { withBEM } from '../../utils/BEM';

function ChessMove(props) {
    return (
        <div className={ props.BEMclass }>
            <div className={ props.highlight !== undefined ? `highlight` : undefined }>{props.move}.</div>
            <div
                className={ props.highlight === 0 ? `highlight` : undefined }
                >{props.first}
            </div>
            <div
                className={ props.highlight === 1 ? `highlight` : undefined }
                >{props.second}
            </div>
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessMove = Object.freeze(withBEM(ChessMove));
export { BEMChessMove as ChessMove };
export { BEMChessMove as default };
