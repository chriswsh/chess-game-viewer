import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default function ChessStatusBar(props) {
    return (
        <Alert bsStyle={ props.style }>
            { props.message }
        </Alert>
    )
}
