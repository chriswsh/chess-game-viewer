import React from "react";
import { shallow, render, mount } from "enzyme";
import ModalDialogContainer from "./ModalDialogContainer";
import Dialog from "../ModalDialog/constants";

import { Provider } from "react-redux";
import { createStore } from "redux";
import chessViewerReducer from "../../reducers/chessViewerReducer";

let store = createStore(chessViewerReducer);

it(`renders without crashing`, () => {
    const wrapper = mount(
        <Provider store={store}>
            <ModalDialogContainer />
        </Provider>
    );
});

it(`should pass show, title, message, type, style and reactions props to the wrapped component, also called ModalDialogContainer`, () => {
    const wrapper = mount(
        <Provider store={store}>
            <ModalDialogContainer />
        </Provider>
    );

    expect(wrapper.find(`ModalDialogContainer`).props().show).toEqual(
        expect.any(Boolean)
    );
    expect(wrapper.find(`ModalDialogContainer`).props().title).toEqual(
        expect.any(String)
    );
    expect(wrapper.find(`ModalDialogContainer`).props().message).toEqual(
        expect.any(String)
    );
    /* using hard-coded default values because expect.any(Symbol) will not match */
    expect(wrapper.find(`ModalDialogContainer`).props().type).toEqual(
        Dialog.buttons.okCancel
    );
    expect(wrapper.find(`ModalDialogContainer`).props().style).toEqual(
        Dialog.style.normal
    );
    expect(wrapper.find(`ModalDialogContainer`).props().reactions).toEqual(
        expect.any(Object)
    );
});
