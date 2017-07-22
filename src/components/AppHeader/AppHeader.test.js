import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AppHeader from './AppHeader';

it('renders without crashing', () => {
  const rendered = mount(<AppHeader />);
});
