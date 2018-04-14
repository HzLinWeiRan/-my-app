import React from 'react';
import t from './styles/App.scss';
import RouteWithSubRoutes from './route-with-sub-routes.js';
// import ReactDom from 'react-dom';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tt: {
                test: 111
            },
            t2: 444
        };
        this.updateTt = this.updateTt.bind(this);
    }
    updateTt(d) {
        this.state.tt.test = 444;
        this.state.t2 = 333;
        setTimeout(() => {
            console.log(this.state);
            console.log(d);
            this.setState({
                test: d
            });
        }, 1000);
    }
    render() {
        const { routes } = this.props;
        return (<div className={t.test} >
            <button onClick={() => { this.updateTt(1); }}>
                {this.state.tt.test} {this.state.t2}
            </button>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>);
    }
}
