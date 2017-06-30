import { BEMcombine } from './settings';

const testComponents = [`Parent`, `Child`, `Grandchild`];
const testStatus = [`active`, `highlighted`];

describe(`BEMcombine`, () => {
    it(`should already have a domain prefixed (only require two arguments)`, () => {
        expect(BEMcombine(testComponents)(testStatus)).toEqual(expect.any(String));
    })
});