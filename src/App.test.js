import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const rendered = mount(<App />);
});
