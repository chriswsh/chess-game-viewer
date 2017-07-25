import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessControls from './ChessControls';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessViewerReducer from '../../reducers/chessViewerReducer';

let store = createStore(chessViewerReducer);

it(`renders without crashing`, () => {
    const rendered = shallow(<ChessControls/>);
});

it(`should create as many child ChessButtons as there are objects in the controls array prop`, () => {
    const testControls = [{}, {}];
    const rendered = mount(<Provider store={ store }><ChessControls controls={ testControls }/></Provider>);
    expect(rendered.find(`ChessButton`).length).toEqual(testControls.length);
})

it(`should pass move and glyph properties from the objects in the controls array to the child ChessButtons`, () => {
    const testControls = [ { move: 0, glpyh: `test1` }, { move: 1, glyph: `test2` }, { malformed: `yes` } ];
    const rendered = mount(<Provider store={ store }><ChessControls controls={ testControls }/></Provider>);
    
    testControls.forEach((elem, index) => {
        expect(rendered.find(`ChessButton`).at(index).props().move).toEqual(elem.move);
        expect(rendered.find(`ChessButton`).at(index).props().glyph).toEqual(elem.glyph);
    })
});
