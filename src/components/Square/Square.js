import './Square.css';

import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';
import Piece from '../Piece/Piece';

const componentTree = [`Square`];

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.BEMclass}>
                {this.props.id}
            </div>
        );
    }
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMSquare = Object.freeze(withBEM(Square));
export { BEMSquare as Square };
export { BEMSquare as default };