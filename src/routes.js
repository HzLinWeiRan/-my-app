import React from 'react';
import Loadable from 'react-loadable';

function loadableHandler(componentLoad) {
    return Loadable({
        loader: componentLoad,
        loading: () => <div></div>
    });
}
// const App = loadableHandler(() => import('./App.js'));

module.exports = [{
    path: '/home',
    component: loadableHandler(() => import('./pages/home'))
}, {
    path: '/news',
    component: loadableHandler(() => import('./pages/news')),
    routes: [{
        path: '/news/features',
        component: loadableHandler(() => import('./pages/news/features')),
    }]
}];
