import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';
import './i18n';
import routes from './routes';
import RouteWithSubRoutes from './route-with-sub-routes.js';
// import ReactDom from 'react-dom';

class App extends React.PureComponent {
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
        console.log(this);
        return (
            <I18n>
                {(t, { i18n }) => (<Router>
                    <div>
                        {t('age.label')}
                        <button onClick={() => { this.props.dispatch({ type: 'test' }); i18n.changeLanguage('zhCN'); }}>
                            {this.state.tt.test} {this.state.t2} {this.props.todos.id}
                        </button>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </div>
                </Router>)}
            </I18n>);
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return state;
}
// Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//             onIncreaseClick: () => dispatch(increaseAction)
//     }
// }

export default connect(mapStateToProps)(App);
