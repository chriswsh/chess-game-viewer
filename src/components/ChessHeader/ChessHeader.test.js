import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessHeader from './ChessHeader';

it('renders without crashing', () => {
  const rendered = mount(<ChessHeader />);
});
