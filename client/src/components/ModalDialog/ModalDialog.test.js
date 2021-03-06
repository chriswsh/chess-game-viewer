import React from "react";
import { shallow, render, mount } from "enzyme";
import ModalDialog from "./ModalDialog";

import { Provider } from "react-redux";
import { createStore } from "redux";
import chessViewerReducer from "../../reducers/chessViewerReducer";

let store = createStore(chessViewerReducer);

it("renders without crashing", () => {
    const rendered = mount(
        <Provider store={store}>
            <ModalDialog />
        </Provider>
    );
});
