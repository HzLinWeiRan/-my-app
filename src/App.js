import React from 'react';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { I18n } from 'react-i18next';
// import './i18n';
import './styles/App.scss';
import routes from './routes';
import RouteWithSubRoutes from './components/routeWithSubRoutes';
// import ReactDom from 'react-dom';

// function add() {
//     return {
//         type: 'test',
//         id: 300
//     };
// }

// function ifAdd() {
//     return async (dispatch) => {
//         dispatch(add());
//     };
// }

// function Layout() {
//     return (<div></div>);
// }
// class App extends React.PureComponent {
//     render() {
//         return (
//             <div>
//                 {this.props.children}
//             </div>
//         );
//     }
// }
console.log(Redirect);
function App() {
    return (<Router>
        <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            <Redirect from="/news" to="/news/features" />
        </Switch>
    </Router>);
}

// Map Redux state to component props
// function mapStateToProps(state) {
//     return state;
// }
// Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//             onIncreaseClick: () => dispatch(increaseAction)
//     }
// }

export default connect()(App);
