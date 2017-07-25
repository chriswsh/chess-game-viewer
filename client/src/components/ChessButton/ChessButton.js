import './ChessButton.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBEM } from '../../utils/BEM';

import { setMove } from '../../reducers/actions.js';

const mapDispatchToProps = dispatch => {
    return {
        onClick: move => { dispatch(setMove(move)) }
    }
}

function ChessButton(props) {
    return (
        <button type="button" className={ `btn ${ props.BEMclass }`} onClick={ () => { props.onClick(props.move) } }>
            <span className={`glyphicon glyphicon-${ props.glyph }`}>
            </span>
        </button>
    );
}

// Export the BEM-Wrapped, Redux-Connected Component with the samename as the .js file
const BEMChessButton = Object.freeze(connect(undefined, mapDispatchToProps)(withBEM(ChessButton, `ChessButton`)));
export { BEMChessButton as ChessButton };
export { BEMChessButton as default };
