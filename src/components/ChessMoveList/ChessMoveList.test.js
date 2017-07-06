import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessMoveList from './ChessMoveList';

it('renders without crashing', () => {
  const rendered = mount(<ChessMoveList />);
});
