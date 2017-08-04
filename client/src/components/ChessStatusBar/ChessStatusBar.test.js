import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessStatusBar from './ChessStatusBar';

it(`renders without crashing`, () => {
    const rendered = mount(<ChessStatusBar />);
});
