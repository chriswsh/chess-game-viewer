import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessGameSelectorContainer, { fullGameList } from './ChessGameSelectorContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessViewerReducer from '../../reducers/chessViewerReducer';

let store = createStore(chessViewerReducer);

it(`renders without crashing`, () => {
    const wrapper = mount(<Provider store={ store }><ChessGameSelectorContainer /></Provider>);
});

it(`should pass a manifest, loadGame and clearBoard props to the wrapped component, also called ChessGameSelectorContainer`, () => {
    const wrapper = mount(<Provider store={ store }><ChessGameSelectorContainer /></Provider>);

    expect(wrapper.find(`ChessGameSelectorContainer`).props().manifest).toEqual(expect.any(Array));    
    expect(wrapper.find(`ChessGameSelectorContainer`).props().loadGame).toEqual(expect.any(Function));    
    expect(wrapper.find(`ChessGameSelectorContainer`).props().clearBoard).toEqual(expect.any(Function));    
});

it(`should pass symbols, loadGame and clearBoard props to ChessGameSelector child`, () => {
    const wrapper = mount(<Provider store={ store }><ChessGameSelectorContainer /></Provider>);

    expect(wrapper.find(`ChessGameSelector`).props().symbols).toEqual(expect.any(Object));
    expect(wrapper.find(`ChessGameSelector`).props().loadGame).toEqual(expect.any(Function));
    expect(wrapper.find(`ChessGameSelector`).props().clearBoard).toEqual(expect.any(Function));
});

describe(`fullGameList()`, ()=> {
    it(`should return undefined if passed a non-array`, () => {
        expect(fullGameList(null)).toEqual(undefined);
        expect(fullGameList(undefined)).toEqual(undefined);
        expect(fullGameList(true)).toEqual(undefined);
        expect(fullGameList(5)).toEqual(undefined);
        expect(fullGameList(NaN)).toEqual(undefined);
        expect(fullGameList(Infinity)).toEqual(undefined);
        expect(fullGameList(`string`)).toEqual(undefined);
        expect(fullGameList(Symbol(`foo`))).toEqual(undefined);
        expect(fullGameList({})).toEqual(undefined);
        expect(fullGameList(() => {})).toEqual(undefined);
    });

    it(`should return undefined if pass a 0-length array`, () => {
        expect(fullGameList([])).toEqual(undefined);
    });

    it(`should return an array if passed a non 0-length array`, () => {
        expect(fullGameList([{}])).toEqual(expect.any(Array));
    });
});
