import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Chessboard from './Chessboard';

it('renders without crashing', () => {
    const rendered = mount(<Chessboard />);
});