import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Chessboard from "../Chessboard/Chessboard";
import ChessHeader from "../ChessHeader/ChessHeader";
import ChessControlsContainer from "../ChessControlsContainer/ChessControlsContainer";
import ChessMoveList from "../ChessMoveList/ChessMoveList";
import ChessGameSelectorContainer from "../ChessGameSelectorContainer/ChessGameSelectorContainer";
import ChessStatusBarContainer from "../ChessStatusBarContainer/ChessStatusBarContainer";

import { loadManifest } from "../../reducers/actions.js";

const mapStateToProps = state => {
    return Object.assign({}, state.display);
};

class ChessViewer extends Component {
    componentDidMount() {
        // Fetch game manifest
        fetch(`/pgn/manifest`)
            .then(res => res.json())
            .then(manifest => {
                this.props.dispatch(loadManifest(manifest.manifest));
            });
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ChessStatusBarContainer />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ChessGameSelectorContainer />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <ChessHeader
                            player1={this.props.player1}
                            player2={this.props.player2}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={5} lg={4}>
                        <Chessboard
                            board={this.props.history[this.props.currentMove]}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={8}>
                        <ChessMoveList
                            current={this.props.currentMove}
                            moveList={this.props.moveList}
                        />
                        <ChessControlsContainer />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const ReduxChessViewer = Object.freeze(connect(mapStateToProps)(ChessViewer));
export { ReduxChessViewer as ChessViewer };
export { ReduxChessViewer as default };
