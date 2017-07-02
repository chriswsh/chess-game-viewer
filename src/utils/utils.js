// combining function for BEM names
// <... class="domain-Parent-Child--modifier1--modifier2" .../>
export const BEMcombine = (domain, components, states) => {
    // Supply default values/typing here to not mess with currying
    domain = domain || ``;
    components = castArray(components) || [];
    states = castArray(states) || [];

    // cast domain to a string
    domain = domain.toString();

    // insist that there are at least components
    if (!components.length) return undefined;

    let BEMclassName = domain ? domain + `-` + components.join(`-`) : components.join(`-`);

    if (states.length) BEMclassName += `--` + states.join(`--`);

    return BEMclassName;
};

// I return a new array from a passed array
// I convert primitives into 1-length arrays containing the primitve
// I convert functions, objects, undefined and symbols into empty arrays
export const castArray = (arg) => {
    if (Array.isArray(arg)) return Array.from(arg);

    if (typeof arg === `function` || typeof arg === `object` || typeof arg === `undefined` || typeof arg === `symbol`) return [];

    return [arg];
}

// I return:
//   the constructor name of an object defined with `class` (for React components defined with class)
//   the name of a function passed in (for React stateless functional components)
//   undefined otherwise
export const getComponentName = (obj) => {
    const functionNameRegex = /function\s(\w+)\(/;
    const classNameRegex = /class\s(\w+)/;
    let results;

    switch (typeof obj) {
        case `function`:
            results = functionNameRegex.exec(obj.toString());
            return results ? results[1] : `anonymous`;
        case `object`:
            if (obj === null) return undefined;
            // Check for `class` pattern as constructor
            results = classNameRegex.exec(obj.constructor.toString());
            // If not found, try `function` pattern as constructor
            if (!results) {
                results = functionNameRegex.exec(obj.constructor.toString());
            }
            return results[1];
        default:
            return undefined;
    }
}
