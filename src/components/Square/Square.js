import './Square.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';
import Piece from '../Piece/Piece';
import Chess from '../../utils/Chess';

function Square(props) {
    return (
        <div className={ props.BEMclass } id={ props.id }>
            {
                props.piece ? <Piece piece={ props.piece } BEMmodifiers={ Chess.getPieceColor(props.piece) } /> : null
            }
        </div>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMSquare = Object.freeze(withBEM(Square));
export { BEMSquare as Square };
export { BEMSquare as default };
