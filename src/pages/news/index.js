import React, { Component } from 'react';
import RouteWithSubRoutes from '@/components/routeWithSubRoutes';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 1
        };
    }
    render() {
        console.log(this);
        console.log(RouteWithSubRoutes);
        return (<div>
            {this.state.test} 222
            {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>);
    }
}
