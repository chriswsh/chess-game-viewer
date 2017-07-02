// I am a virtual component which wraps BEM class naming functionality

import React, { Component } from 'react';

import { BEMcombine, getBEMDomain } from '../../utils/settings';
import { getComponentName } from '../../utils/utils';

export default class BEMComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const BEMclass = this.getBEMClass();
        const finalClass = Array.isArray(this.props.modifiers) ? [BEMclass([]), BEMclass(this.props.modifiers)].join(` `) : BEMclass([]);
        
        return (
            <div className={this.finalClass}>BEM Component is a virual component that should always be extended, never rendered. Please instantiate and override the render() method in the extended component.</div>
        );
    }

    // I return a function that only needs
    getBEMClass() {
        let parentChain = getComponentName(this);

        if (this.props) {
            if (this.props.parents && Array.isArray(this.props.parents)) {
                parentChain = this.props.parents.concat(parentChain);
            }
        }

        return BEMcombine(parentChain);
    }

    getBEMDomain() {
        return getBEMDomain();
    }
}
