import React, { Component } from 'react';
import featuresStyles from './features.scss';

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (<div className={featuresStyles.main}>
            <h2>热点新闻</h2>
        </div>);
    }
}
