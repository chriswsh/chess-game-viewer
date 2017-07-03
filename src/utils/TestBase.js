import React, { Component } from 'react';

export default class TestBase extends Component {
    constructor() {
        super();
        this.displayName = `Test Component`;
    }

    render() {
        return (<div>TestBase</div>);
    }
}
