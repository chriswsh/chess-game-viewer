import React from 'react';
import { BEMCombineClassState, BEMFullCombine, withBEM, getBEMDomain } from './BEM';
import { getComponentName } from './utils';
import { shallow, render, mount } from 'enzyme';
import TestBase from './TestBase';

describe(`BEMFullCombine`, () => {
    const testDomain = `wsh`;
    const testComponents = [`Parent`, `Child`, `Grandchild`];
    const testStatus = [`active`, `highlighted`];

    it(`should return an empty string if passed nothing`, () => {
        expect(BEMFullCombine()).toEqual(undefined);
    });

    it(`should return an empty string if only passed a domain`, () => {
        expect(BEMFullCombine(testDomain)).toEqual(undefined);
    });

    it(`should concatenate a domain, if present, with an array of component names in parent-child-child order`, () => {
        expect(BEMFullCombine(testDomain, testComponents)).toEqual(`wsh-Parent-Child-Grandchild`);
        expect(BEMFullCombine(``, testComponents)).toEqual(`Parent-Child-Grandchild`);
    });

    it(`should concatenate a domain, if present, with an array of component names and a status`, () => {
        expect(BEMFullCombine(testDomain, testComponents, testStatus)).toEqual(`wsh-Parent-Child-Grandchild wsh-Parent-Child-Grandchild--active wsh-Parent-Child-Grandchild--highlighted`);
        expect(BEMFullCombine(``, testComponents, testStatus)).toEqual(`Parent-Child-Grandchild Parent-Child-Grandchild--active Parent-Child-Grandchild--highlighted`);
    });
});

describe(`BEMCombineClassState`, () => {
    const testComponents = [`Parent`, `Child`, `Grandchild`];
    const testStatus = [`active`, `highlighted`];

    it(`should already have a domain prefixed (only require two arguments)`, () => {
        expect(BEMCombineClassState(testComponents)(testStatus)).toEqual(expect.any(String));
    })
});

describe(`withBEM()`, () => {
    const BEMTest = withBEM(TestBase, `TestBase`);

    it('should successfully render the wrapped component', () => {
        const rendered = render(<BEMTest />);
        expect(rendered.length).toEqual(1);
    });

    it('should pass a BEMclass prop to the wrapped component, default of domain-noName', () => {
        const BEMDefault = withBEM(TestBase);
        const BEM = shallow(<BEMDefault />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-noName`);
    })

    it('should pass a BEMclass prop to the wrapped component, default of domain-ComponentName', () => {
        const BEM = shallow(<BEMTest />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-TestBase`);
    })

    it('should pass a BEMclass prop to the wrapped component with a correct parent chain (array)', () => {
        const BEM = shallow(<BEMTest BEMparents={[`Grandparent`, `Parent`]} />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-Grandparent-Parent-TestBase`);
    });

    it('should pass a BEMclass prop to the wrapped component with a correct parent chain (space-separated)', () => {
        const BEM = shallow(<BEMTest BEMparents={`Grandparent Parent`} />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-Grandparent-Parent-TestBase`);
    });

    it('should pass a BEMclass prop to the wrapped component with the correct states (array)', () => {
        const BEM = shallow(<BEMTest BEMmodifiers={['active', 'highlighted']} />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-TestBase ${getBEMDomain()}-TestBase--active ${getBEMDomain()}-TestBase--highlighted`);
    });

    it('should pass a BEMclass prop to the wrapped component with the correct states (space-separated)', () => {
        const BEM = shallow(<BEMTest BEMmodifiers={`active highlighted`} />);
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(`${getBEMDomain()}-TestBase ${getBEMDomain()}-TestBase--active ${getBEMDomain()}-TestBase--highlighted`);
    });

    it('should pass a BEMclass prop to the wrapped component with the correct parent chain and states (array)', () => {
        const BEM = shallow(<BEMTest BEMparents={[`Grandparent`, `Parent`]} BEMmodifiers={['active', `highlighted`]} />);
        const expected = `${getBEMDomain()}-Grandparent-Parent-TestBase ${getBEMDomain()}-Grandparent-Parent-TestBase--active ${getBEMDomain()}-Grandparent-Parent-TestBase--highlighted`;
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(expected);
    });

    it('should pass a BEMclass prop to the wrapped component with the correct parent chain and states (space-separated)', () => {
        const BEM = shallow(<BEMTest BEMparents={`Grandparent Parent`} BEMmodifiers={`active highlighted`} />);
        const expected = `${getBEMDomain()}-Grandparent-Parent-TestBase ${getBEMDomain()}-Grandparent-Parent-TestBase--active ${getBEMDomain()}-Grandparent-Parent-TestBase--highlighted`;
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(expected);
    });

    it('should pass a BEMclass prop to the wrapped component with the correct parent chain and states (mixed)', () => {
        const BEM = shallow(<BEMTest BEMparents={[`Grandparent`, `Parent`]} BEMmodifiers={`active highlighted`} />);
        const expected = `${getBEMDomain()}-Grandparent-Parent-TestBase ${getBEMDomain()}-Grandparent-Parent-TestBase--active ${getBEMDomain()}-Grandparent-Parent-TestBase--highlighted`;
        expect(BEM.find(`TestBase`).props().BEMclass).toEqual(expected);
    });

    it('should pass all props besides BEMparents and BEMmodifiers to the wrapped component', () => {
        const BEM = shallow(<BEMTest prop1={`test1`} prop2={`test2`} />);
        expect(BEM.find(`TestBase`).props().prop1).toEqual(`test1`);
        expect(BEM.find(`TestBase`).props().prop2).toEqual(`test2`);
    });
});
