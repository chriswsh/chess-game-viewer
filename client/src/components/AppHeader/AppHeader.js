import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function AppHeader(props) {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Chess PGN Viewer
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}