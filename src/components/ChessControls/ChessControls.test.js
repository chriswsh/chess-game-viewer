import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessControls from './ChessControls';

it('renders without crashing', () => {
  const rendered = mount(<ChessControls />);
});
