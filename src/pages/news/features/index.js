import React, { Component } from 'react';

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            t: 1
        };
    }
    render() {
        console.log(this);
        return (<div>{this.state.t}321321212123</div>);
    }
}
