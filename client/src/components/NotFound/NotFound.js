import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppHeader from '../AppHeader/AppHeader';

export default function NotFound(props) {
    return (
        <div>
            <AppHeader />
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2>Page Not Found</h2>
                    </Col>
                </Row>
            </Grid>
        </div>

    );
}
