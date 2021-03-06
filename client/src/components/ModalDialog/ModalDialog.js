import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import Dialog from "./constants";

class ModalDialog extends Component {
    handleClose(choice) {
        switch (choice) {
            case Dialog.buttons.yes:
            case Dialog.buttons.ok:
                this.props.reactions.displayNewlyLoadedGame(
                    this.props.cache,
                    this.props.newlyLoadedGame
                );
                this.props.reactions.hide();
                return;
            case Dialog.buttons.no:
            case Dialog.buttons.cancel:
            default:
                // reset current hash to currently displayed game
                this.props.reactions.setCurrentGameHash(
                    this.props.displayedHash
                );
                this.props.reactions.hide();
        }
    }

    renderButtons(dialogType) {
        const yes = (
            <Button
                bsStyle="success"
                onClick={() => {
                    this.handleClose(Dialog.buttons.yes);
                }}
            >
                Yes, Please!
            </Button>
        );
        const no = (
            <Button
                onClick={() => {
                    this.handleClose(Dialog.buttons.no);
                }}
            >
                No Thanks
            </Button>
        );
        const ok = (
            <Button
                bsStyle="primary"
                onClick={() => {
                    this.handleClose(Dialog.buttons.ok);
                }}
            >
                Got it!
            </Button>
        );
        const cancel = (
            <Button
                onClick={() => {
                    this.handleClose(Dialog.buttons.cancel);
                }}
            >
                Um...Nope
            </Button>
        );

        switch (dialogType) {
            case Dialog.buttons.yes:
                return yes;
            case Dialog.buttons.no:
                return no;
            case Dialog.buttons.yesNo:
                return (
                    <div>
                        {yes}
                        {no}
                    </div>
                );
            case Dialog.buttons.ok:
                return ok;
            case Dialog.buttons.okCancel:
                return (
                    <div>
                        {ok}
                        {cancel}
                    </div>
                );
            case Dialog.buttons.cancel:
            default:
                return cancel;
        }
    }

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.message}</Modal.Body>
                <Modal.Footer>
                    {this.renderButtons(this.props.type)}
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.symbol.isRequired,
    style: PropTypes.symbol.isRequired,
    reactions: PropTypes.object.isRequired,
    cache: PropTypes.object.isRequired,
    newlyLoadedGame: PropTypes.string.isRequired,
    displayedHash: PropTypes.string.isRequired
};

ModalDialog.defaultProps = {
    show: false,
    title: `Component Default Title!`,
    message: `Component Default message`,
    type: Dialog.buttons.okCancel,
    style: Dialog.style.normal,
    reactions: {},
    cache: {},
    newlyLoadedGame: ``,
    displayedHash: ``
};

export { ModalDialog };
export { ModalDialog as default };
