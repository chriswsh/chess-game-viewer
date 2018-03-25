import React, { Component } from "react";
import { connect } from "react-redux";
import ModalDialog from "../ModalDialog/ModalDialog";
import Dialog from "../ModalDialog/constants";

const mapStateToProps = state => {
    let { show, title, message, type, style } = state.dialog;

    show = show || false;
    title = title || `Default Container Title`;
    message = message || `Default Container Message`;
    type = type || Dialog.buttons.okCancel;
    style = style || Dialog.style.normal;

    return { show, title, message, type, style };
};

const mapDispatchToProps = dispatch => {
    const reactions = {
        displayNewlyLoadedGame: () => {
            console.log(`Displaying newly loaded game`);
        },
        noOp: () => {
            console.log(`Doing nothing`);
        }
    };

    return {
        reactions
    };
};

function ModalDialogContainer(props) {
    return (
        <div>
            <ModalDialog
                show={props.show}
                title={props.title}
                message={props.message}
                type={props.type}
                style={props.style}
                reactions={props.reactions}
            />Test
        </div>
    );
}

const ReduxModalDialogContainer = Object.freeze(
    connect(mapStateToProps, mapDispatchToProps)(ModalDialogContainer)
);

export { ReduxModalDialogContainer as ModalDialogContainer };
export { ReduxModalDialogContainer as default };
