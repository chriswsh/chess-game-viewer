import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessMove from './ChessMove';

it('renders without crashing', () => {
  const rendered = mount(<ChessMove />);
});
