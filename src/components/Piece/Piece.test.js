import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Piece from './Piece';

it('renders without crashing', () => {
  const rendered = mount(<Piece />);
});
