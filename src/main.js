import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import RouteWithSubRoutes from './route-with-sub-routes.js';
import apis from './fetch';
// import './styles/testcss.css';

console.log(apis);
apis.list({
    test: 1,
    test2: 2
});
apis.list2({
    test: 1,
    test2: 2
});
ReactDom.render(
    <Router>
        <div>
            11
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>,
    document.getElementById('app-box')
);
