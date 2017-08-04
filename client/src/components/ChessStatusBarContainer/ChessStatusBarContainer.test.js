import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessStatusBarContainer from './ChessStatusBarContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessViewerReducer from '../../reducers/chessViewerReducer';
import { showAlert, hideAlert } from '../../reducers/actions';

const store = createStore(chessViewerReducer);

const testMessage = {
    message: `Test Message`,
    style: `info`
}

beforeEach(() => {
    store.dispatch(hideAlert());
})

it(`renders without crashing`, () => {
    const mounted = mount((<Provider store={ store }><ChessStatusBarContainer/></Provider>));
});

it(`should not render a child ChessStatusBar element if its display prop is false`, () => {
    const mounted = mount(<Provider store={ store }><ChessStatusBarContainer/></Provider>);

    expect(mounted.find(`ChessStatusBar`).length).toEqual(0);
});

it(`should render a child ChessStatusBar element if its display prop is true`, () => {
    const mounted = mount(<Provider store={ store }><ChessStatusBarContainer/></Provider>);

    store.dispatch(showAlert(testMessage));
    expect(mounted.find(`ChessStatusBar`).length).toEqual(1);
});

it(`should pass message and style props to the wrapped component, also called ChessStatusBarContainer`, () => {
    const mounted = mount(<Provider store={ store }><ChessStatusBarContainer/></Provider>);

    store.dispatch(showAlert(testMessage));
    expect(mounted.find(`ChessStatusBarContainer`).props().message).toEqual(expect.any(String));
    expect(mounted.find(`ChessStatusBarContainer`).props().style).toEqual(expect.any(String));
});
