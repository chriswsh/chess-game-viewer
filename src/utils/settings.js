// I set certain settings by currying functions.

import { curry } from 'lodash';
import { BEMcombine as baseCombine } from './utils';

// The BEM domain to prefix
const BEM_DOMAIN = `wsh`;

export const BEMcombine = curry(baseCombine)(BEM_DOMAIN);
export const getBEMDomain = () => BEM_DOMAIN;
