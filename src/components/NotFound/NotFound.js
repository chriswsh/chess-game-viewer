import React from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

export default function NotFound(props) {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Chess PGN Viewer
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h1>Page Not Found</h1>
                    </Col>
                </Row>
            </Grid>
        </div>

    );
}
