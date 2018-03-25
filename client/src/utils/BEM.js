// I do the BEM thing
import React, { Component } from "react";
import { curry } from "lodash";
import { castArray } from "./utils";

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

    let baseClass = domain
        ? domain + `-` + components.join(`-`)
        : components.join(`-`);

    return states.reduce(
        (finalClass, state) => `${finalClass} ${baseClass}--${state}`,
        baseClass
    );
};

// I am a curried version of BEMFullCombine which already has the domain prefixed
export const BEMCombineClassState = curry(BEMFullCombine)(BEM_DOMAIN);

// I wrap a component with BEM functionality
export function withBEM(WrappedComponent, componentName = "noName") {
    return class extends Component {
        BEMCombineState() {
            // Pass the wrapped component's name in to deal with minified code
            let parentChain = componentName; // getComponentName(WrappedComponent);

            if (this.props) {
                // handle arrays
                if (
                    this.props.BEMparents &&
                    Array.isArray(this.props.BEMparents)
                ) {
                    parentChain = this.props.BEMparents.concat(parentChain);
                }
                // handle space-separated lists
                if (
                    this.props.BEMparents &&
                    !Array.isArray(this.props.BEMparents)
                ) {
                    parentChain = this.props.BEMparents.toString()
                        .split(` `)
                        .concat(parentChain);
                }
            }

            return BEMCombineClassState(parentChain);
        }

        BEMFullClass() {
            if (this.props) {
                // handle arrays
                if (
                    this.props.BEMmodifiers &&
                    Array.isArray(this.props.BEMmodifiers)
                )
                    return this.BEMCombineState()(this.props.BEMmodifiers);
                // handle space-separated lists
                if (
                    this.props.BEMmodifiers &&
                    !Array.isArray(this.props.BEMmodifiers)
                )
                    return this.BEMCombineState()(
                        this.props.BEMmodifiers.toString().split(` `)
                    );
            }
            return this.BEMCombineState()([]);
        }

        render() {
            const { BEMparents, BEMmodifiers, ...otherProps } = this.props;
            return (
                <WrappedComponent
                    BEMclass={this.BEMFullClass()}
                    {...otherProps}
                />
            );
        }
    };
}
