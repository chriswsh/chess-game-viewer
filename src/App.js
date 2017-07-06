import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { ChessViewer } from './components/index';

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
                    <ChessViewer />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
