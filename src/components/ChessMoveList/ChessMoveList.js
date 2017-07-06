import React, { Component } from 'react';
import { withBEM } from '../../utils/BEM';

function ChessMoveList(props) {
    return (
        <ul className={ props.BEMclass }>
            <li>Move List</li>
        </ul>
    );
}

// Export the BEM-Wrapped Component with the samename as the .js file
const BEMChessMoveList = Object.freeze(withBEM(ChessMoveList));
export { BEMChessMoveList as ChessMoveList };
export { BEMChessMoveList as default };
