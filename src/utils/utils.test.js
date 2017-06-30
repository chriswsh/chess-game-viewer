import { BEMcombine, castArray } from './utils';

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