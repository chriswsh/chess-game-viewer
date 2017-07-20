import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessControlsContainer from './ChessControlsContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessViewerReducer from '../../reducers/chessViewerReducer';

let store = createStore(chessViewerReducer);

it(`renders without crashing`, () => {
    const rendered = mount(<Provider store={ store }><ChessControlsContainer/></Provider>);
});

it(`should pass currentMove and lastMove props to the wrapped component, also called ChessControlsContainer`, () => {
    const rendered = mount(<Provider store={ store }><ChessControlsContainer/></Provider>);
    expect(rendered.find(`ChessControlsContainer`).props().currentMove).toEqual(expect.any(Number));
    expect(isNaN(rendered.find(`ChessControlsContainer`).props().currentMove)).toEqual(false);
    expect(Math.abs(rendered.find(`ChessControlsContainer`).props().currentMove)).not.toEqual(Infinity);
    
    expect(rendered.find(`ChessControlsContainer`).props().lastMove).toEqual(expect.any(Number));
    expect(isNaN(rendered.find(`ChessControlsContainer`).props().lastMove)).toEqual(false);
    expect(Math.abs(rendered.find(`ChessControlsContainer`).props().currentMove)).not.toEqual(Infinity);
});

it(`should pass currentMove and lastMove props of 0 with the default store values (no PGN loaded)`, () => {
    const rendered = mount(<Provider store={ store }><ChessControlsContainer/></Provider>);
    expect(rendered.find(`ChessControlsContainer`).props().currentMove).toEqual(0);
    expect(rendered.find(`ChessControlsContainer`).props().lastMove).toEqual(0);
});

it(`should pass a controls prop to ChessControls child`, () => {
    const rendered = mount(<Provider store={ store }><ChessControlsContainer/></Provider>);
    expect(rendered.find(`ChessControls`).props().controls).toEqual(expect.any(Array));
});
