import React, { Component } from "react";
import { connect } from "react-redux";
import ModalDialog from "../ModalDialog/ModalDialog";
import Dialog from "../ModalDialog/constants";
import {
    loadGameToDisplay,
    hideModalDialog,
    setCurrentGameHash
} from "../../reducers/actions";

const mapStateToProps = state => {
    let {
        show,
        title,
        message,
        type,
        style,
        currentHash,
        gameJustFetchedHash,
        displayedHash
    } = state.dialog;

    show = show || false;
    title = title || `Default Container Title`;
    message = message || `Default Container Message`;
    type = type || Dialog.buttons.okCancel;
    style = style || Dialog.style.normal;

    return {
        show,
        title,
        message,
        type,
        style,
        currentHash,
        gameJustFetchedHash,
        displayedHash,
        cache: state.cache
    };
};

const mapDispatchToProps = dispatch => {
    const reactions = {
        displayNewlyLoadedGame: (cache, hash) => {
            dispatch(loadGameToDisplay(cache[hash]));
        },
        setCurrentGameHash: hash => {
            dispatch(setCurrentGameHash(hash));
        },
        hide: () => {
            dispatch(hideModalDialog());
        }
    };

    return {
        reactions
    };
};

class ModalDialogContainer extends Component {
    render() {
        return (
            <div>
                <ModalDialog
                    show={this.props.show}
                    title={this.props.title}
                    message={this.props.message}
                    type={this.props.type}
                    style={this.props.style}
                    reactions={this.props.reactions}
                    cache={this.props.cache}
                    newlyLoadedGame={this.props.gameJustFetchedHash}
                    displayedHash={this.props.displayedHash}
                />
            </div>
        );
    }
}

const ReduxModalDialogContainer = Object.freeze(
    connect(mapStateToProps, mapDispatchToProps)(ModalDialogContainer)
);

export { ReduxModalDialogContainer as ModalDialogContainer };
export { ReduxModalDialogContainer as default };
