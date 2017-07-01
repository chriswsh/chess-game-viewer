import './Square.css';

import { BEMcombine } from '../../utils/settings'

import React from 'react';
import { Piece } from '../Piece/Piece';

const componentTree = [`Square`];

// Let's use stateless functional components - we're jumping into functional programming, after all
export function Square(props) {
    // construct class name from props
    const squareBase = BEMcombine(componentTree);
    const squareClass = props.color ? [squareBase([]), squareBase([props.color])].join(` `) : squareBase([]);

    return (
        <div className={squareClass}>
            {props.id}
        </div>
    );
}