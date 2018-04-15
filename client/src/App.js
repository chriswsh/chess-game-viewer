import React, { Component } from "react";
import { ChessViewer, AppHeader, ModalDialogBox } from "./components/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import chessViewerReducer from "./reducers/chessViewerReducer";

let store = createStore(chessViewerReducer, applyMiddleware(thunkMiddleware));

class InnerApp extends Component {
    render() {
        return (
            <div>
                <AppHeader />
                <ChessViewer />
                <ModalDialogBox />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <InnerApp />
            </Provider>
        );
    }
}

export default App;
