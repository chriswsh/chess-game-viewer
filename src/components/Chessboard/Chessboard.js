import './Chessboard.css';

import React, { Component } from 'react';
import { Square } from '../Square/Square';
import { Piece } from '../Piece/Piece';

import { BEMcombine } from '../../utils/settings'

const componentTree = [`Chessboard`];

export default class Chessboard extends Component {
    // I render an individual square
    renderSquare(i) {
        return (
            <Square
                color = {Chessboard.squareColor(i)}
                key = {i}
                id = {Chessboard.ANname(i)}
            />
        );
    }

    // I render the chessboard
    render() {
        const squares = [];
        // squares[0] is a8
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div className={BEMcombine(componentTree)([])}>
                {squares}
            </div>
        );
    }

    // I convert a square key (0-63) to the square's name in algebraic notation
    // 0 = top right corner, or a8
    static ANname(i) {
        return String.fromCharCode(97 + (i % 8)) + (8 - Math.floor(i / 8));
    }

    static squareColor(i) {
        let color = i % 2;
        color = (Math.floor(i / 8) % 2) ? Math.abs(color - 1) : color;

        return color ? `dark` : `light`;
    }
}
