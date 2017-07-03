import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Chessboard } from './components/index';

class App extends Component {
  render() {
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
                    <Chessboard />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
