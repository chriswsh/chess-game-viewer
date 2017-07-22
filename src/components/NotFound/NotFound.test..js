import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NotFound from './NotFound';

it(`renders without crashing`, () => {
    const rendered = render(<NotFound />);
});
