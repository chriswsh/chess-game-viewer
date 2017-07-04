import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Square from './Square';

it('renders without crashing', () => {
  const rendered = mount(<Square />);
});
