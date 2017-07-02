import { BEMcombine, castArray, getComponentName } from './utils';
import TestBase from './TestBase';

const testDomain = `wsh`;
const testComponents = [`Parent`, `Child`, `Grandchild`];
const testStatus = [`active`, `highlighted`];

describe(`castArray`, () => {
    it('should leave arrays unchanged', () => {
        expect(castArray([])).toEqual([]);
        expect(castArray([1,2])).toEqual([1,2]);
    });

    it('should cast function, objects, symbols and undefined into empty arrays', () => {
        const symbol = Symbol(`test`);
        expect(castArray((a) => a)).toEqual([]);
        expect(castArray({})).toEqual([]);
        expect(castArray(null)).toEqual([]);
        expect(castArray(undefined)).toEqual([]);
        expect(castArray(symbol)).toEqual([]);
    });

    it('should cast all other data types into 1-length arrays', () => {
        expect(castArray(true)).toEqual([true]);
        expect(castArray(5)).toEqual([5]);
        expect(castArray(`test`)).toEqual([`test`]);
    });
});

describe(`BEMcombine`, () => {
    it(`should return an empty string if passed nothing`, () => {
        expect(BEMcombine()).toEqual(undefined);
    });

    it(`should return an empty string if only passed a domain`, () => {
        expect(BEMcombine(testDomain)).toEqual(undefined);
    });

    it(`should concatenate a domain, if present, with an array of component names in parent-child-child order`, () => {
        expect(BEMcombine(testDomain, testComponents)).toEqual(`wsh-Parent-Child-Grandchild`);
        expect(BEMcombine(``, testComponents)).toEqual(`Parent-Child-Grandchild`);
    });

    it(`should concatenate a domain, if present with an array of component names and statuses in order`, () => {
        expect(BEMcombine(testDomain, testComponents, testStatus)).toEqual(`wsh-Parent-Child-Grandchild--active--highlighted`);
        expect(BEMcombine(``, testComponents, testStatus)).toEqual(`Parent-Child-Grandchild--active--highlighted`);
    });
});

describe(`getComponentName`, () => {
    it(`should return undefined when passed a non-object, non-function or null`, () => {
        expect(getComponentName(true)).toEqual(undefined);
        expect(getComponentName(Infinity)).toEqual(undefined);
        expect(getComponentName(`test`)).toEqual(undefined);
        expect(getComponentName(Symbol(`test`))).toEqual(undefined);       
        expect(getComponentName(null)).toEqual(undefined);    
    });

    it(`should return anonymous when passed a lamba or anonymous function`, () => {
        expect(getComponentName(function(){})).toEqual(`anonymous`);         
        expect(getComponentName(() => {})).toEqual(`anonymous`);         
    });

    it(`should return the name of a React component defined with the class pattern`, () => {
        const testee = new TestBase;
        expect(getComponentName(testee)).toEqual(`TestBase`);
    });

    it(`should return the name of a React stateless functional component`, () => {
        function StatelessFunctionalComponent(props) { return (<div>Test {props.id} </div>) }
        expect(getComponentName(StatelessFunctionalComponent)).toEqual(`StatelessFunctionalComponent`);
    });

    it(`should handle rendered extended components correctly`, () => {
        // When running npm start, some class pattern constructors get replaced with
        // function pattern constructors. So components will pass the smoke test for
        // rendering correctly in the test suite, while failing to actually render
        //
        // I don't know how to recreate this behavior in the test suite, so this test
        // does nothing but serve as a reminder.
    });
});
