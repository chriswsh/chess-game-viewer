import './Square.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';
import Piece from '../Piece/Piece';
import Chess from '../../utils/Chess';

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ this.props.BEMclass } id={ this.props.id }>
                <Piece piece={ this.props.piece } BEMmodifiers={ [Chess.getPieceColor(this.props.piece)] } />
            </div>
        );
    }
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMSquare = Object.freeze(withBEM(Square));
export { BEMSquare as Square };
export { BEMSquare as default };
