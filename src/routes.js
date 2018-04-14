import React from 'react';
import Loadable from 'react-loadable';

function loadableHandler(componentLoad) {
    return Loadable({
        loader: componentLoad,
        loading: () => <div></div>
    });
}
// const App = loadableHandler(() => import('./App.js'));
const home = loadableHandler(() => import('./pages/home'));

module.exports = [{
    path: '/',
    component: home
}];
