import React from 'react';
import ReactDOM from 'react-dom';
import BEMComponent from './BEMComponent';
import TestComponent from '../TestComponent/TestComponent';
import { shallow, render, mount } from 'enzyme';

const testClassName = `TestComponent`;

it (`extended components should render without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestComponent />, div);
});

it (`should have a BEM class that's the domain plus class name`, () => {
    let test = new TestComponent;
    console.log(test.getBEMClass()([]));
    expect(test.getBEMClass()([])).toEqual(test.getBEMDomain() + `-` + testClassName);

    const rendered = render(<TestComponent />);
    console.log(rendered.find(`div`).hasClass(`wsh-TestComponent`));
});