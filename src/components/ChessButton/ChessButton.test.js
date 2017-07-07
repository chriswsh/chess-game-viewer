import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessButton from './ChessButton';

it('renders without crashing', () => {
  const rendered = mount(<ChessButton />);
});
