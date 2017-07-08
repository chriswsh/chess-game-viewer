import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessMoveList from './ChessMoveList';

it('renders without crashing', () => {
    const rendered = mount(<ChessMoveList />);
});

it('passes a highlight prop of 0 if this.props.current is odd', () => {
    const wrapper = mount(<ChessMoveList moveList={ [`e4`, `e5`, `d4`, `d5`, `c4`, `c5`] } current={1} />);
    expect(wrapper.find(`ChessMove`).at(0).props().focus).toEqual(0);

    wrapper.setProps({ current: 3 });
    expect(wrapper.find(`ChessMove`).at(1).props().focus).toEqual(0);

    wrapper.setProps({ current: 5 });
    expect(wrapper.find(`ChessMove`).at(2).props().focus).toEqual(0);
});

it('passes a highlight prop of 1 if this.prop.current is even', () => {
    const wrapper = mount(<ChessMoveList moveList={[`e4`, `e5`, `d4`, `d5`, `c4`, `c5`]} current={2} />);
    expect(wrapper.find(`ChessMove`).at(0).props().focus).toEqual(1);

    wrapper.setProps({ current: 4 });
    expect(wrapper.find(`ChessMove`).at(1).props().focus).toEqual(1);

    wrapper.setProps({ current: 6 });
    expect(wrapper.find(`ChessMove`).at(2).props().focus).toEqual(1);
});
