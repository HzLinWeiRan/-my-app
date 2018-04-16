import React from 'react';
import Loadable from 'react-loadable';

// 实现页面组件按需引入
export default function loadableHandler(componentLoad) {
    return Loadable({
        loader: componentLoad,
        loading: () => <div></div>
    });
}

module.exports = [{
    path: '/',
    exact: true,
    component: loadableHandler(() => import('./pages/home'))
}, {
    path: '/news',
    component: loadableHandler(() => import('./pages/news')),
    routes: [{
        path: '/news/features',
        component: loadableHandler(() => import('./pages/news/features')),
    }]
}];
