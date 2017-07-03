// I do the BEM thing
import React, { Component } from 'react';
import { curry } from 'lodash';
import { castArray, getDisplayName, getComponentName } from './utils';

// I am the BEM domain to prefix
const BEM_DOMAIN = `wsh`;
export const getBEMDomain = () => BEM_DOMAIN;

// I am a combining function for BEM names
// <... class="domain-Parent-Child domain-Parent-Child--modifier1 domain-Parent-Child--modifier2" .../>
export const BEMFullCombine = (domain, components, states) => {
    // Supply default values/typing here to not mess with currying
    domain = domain || ``;
    components = castArray(components) || [];
    states = castArray(states) || [];

    // cast domain to a string
    domain = domain.toString();

    // insist that there are at least components
    if (!components.length) return undefined;

    let baseClass = domain ? domain + `-` + components.join(`-`) : components.join(`-`);

    return states.reduce((finalClass, state) => `${finalClass} ${baseClass}--${state}`, baseClass);
};

// I am a curried version of BEMFullCombine which already has the domain prefixed
export const BEMCombineClassState = curry(BEMFullCombine)(BEM_DOMAIN);

// I wrap a component with 
export function withBEM(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        BEMCombineState() {
            // Get the wrapped component's name
            let parentChain = getComponentName(WrappedComponent);

            if (this.props) {
                if (this.props.BEMparents && Array.isArray(this.props.BEMparents)) {
                    parentChain = this.props.BEMparents.concat(parentChain);
                }
            }

            return BEMCombineClassState(parentChain);
        }

        BEMFullClass() {
            if (this.props) {
                if (this.props.BEMmodifiers && Array.isArray(this.props.BEMmodifiers)) return this.BEMCombineState()(this.props.BEMmodifiers);
            }
            return this.BEMCombineState()([]);
        }

        render() {
            const { BEMparents, BEMmodifiers, ...otherProps } = this.props;
            return (
                <WrappedComponent BEMclass={this.BEMFullClass()} {...otherProps} />
            );
        }
    }
}
