import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessMove from './ChessMove';

let scrollStub;

beforeEach(() => {
    scrollStub = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollStub;
});

it(`renders without crashing`, () => {
    const rendered = mount(<ChessMove />);
});

it(`should call scrollIntoView() on itself when the focus prop changes from undefined`, () => {
    const wrapper = mount(<ChessMove first={ `e4` } second={ `e5` }/>);

    wrapper.setProps({ focus: 0 });
    expect(scrollStub.mock.calls.length).toEqual(1);
});

it(`should not call scrollIntoView() on itself when the focus prop changes to undefined`, () => {
    const wrapper = mount(<ChessMove first={ `e4` } second={ `e5` } focus={ 1 } />);
    
    wrapper.setProps({ focus: undefined });
    expect(scrollStub.mock.calls.length).toEqual(0);
});
