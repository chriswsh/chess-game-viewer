import './Piece.css';

import React from 'react';
import { withBEM } from '../../utils/BEM';
import Chess from '../../utils/Chess';

function Piece(props) {
    return (
        <div className={props.BEMclass}>
            { props.piece &&
                <span className={`glyphicon glyphicon-${ Chess.getPieceName(props.piece) }`}>
                </span>
            }
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMPiece = Object.freeze(withBEM(Piece, `Piece`));
export { BEMPiece as Piece };
export { BEMPiece as default };
