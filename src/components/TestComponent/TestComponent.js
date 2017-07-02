import React, { Component } from 'react';
import BEMComponent from '../BEMComponent/BEMComponent';

export default class TestComponent extends BEMComponent {
    constructor() {
        super();
    }

    render() {
        const BEMclass = this.getBEMClass();
        const finalClass = Array.isArray(this.props.modifiers) ? [BEMclass([]), BEMclass(this.props.modifiers)].join(` `) : BEMclass([]);
        return (
            <div className={finalClass}>Test Component</div>
        );
    }
}