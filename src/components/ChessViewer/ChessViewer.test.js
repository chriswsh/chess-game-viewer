import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessViewer from './ChessViewer';

it('renders without crashing', () => {
    const rendered = mount(<ChessViewer />);
});
