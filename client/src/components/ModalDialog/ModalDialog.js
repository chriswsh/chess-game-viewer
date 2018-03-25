import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import Dialog from "./constants";

class ModalDialog extends Component {
    handleClose(choice) {
        console.log(this.props.reactions);
        switch (choice) {
            case Dialog.buttons.yes:
            case Dialog.buttons.no:
            case Dialog.buttons.ok:
            case Dialog.buttons.cancel:
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
            <Modal
                show={this.props.show}
                onHide={() => {
                    this.handleClose;
                }}
            >
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
    reactions: PropTypes.object.isRequired
};

ModalDialog.defaultProps = {
    show: false,
    title: `Component Default Title!`,
    message: `Component Default message`,
    type: Dialog.buttons.okCancel,
    style: Dialog.style.normal,
    reactions: {}
};

export { ModalDialog };
export { ModalDialog as default };
