import React from 'react';
import t from './styles/App.scss';
import RouteWithSubRoutes from './route-with-sub-routes.js';
// import ReactDom from 'react-dom';

console.log(t);
// console.log(styles);
export default function App({ routes }) {
    // const t2 = '123';
    console.log(routes);
    return (<div className={t.test}>
        12312 {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>);
}
