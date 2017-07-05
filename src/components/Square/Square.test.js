import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Square from './Square';
import Piece from '../Piece/Piece';

it('renders without crashing', () => {
    const rendered = mount(<Square />);
});

it(`should contain a 'Piece' if passed a piece code`, () => {
    const rendered = mount(<Square piece={ `BB` } />);
    expect(rendered.find(`Piece`).length).toEqual(1);
});

it(`should not contain a 'Piece' if not passed a piece code`, () => {
    const rendered = mount(<Square />);
    expect(rendered.find(`Piece`).length).toEqual(0);
});
