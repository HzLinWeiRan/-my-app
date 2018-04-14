import App from './App.js';
import App1 from './App.1.js';

module.exports = [{
    path: '/',
    component: App,
    routes: [{
        path: '/test',
        component: App1
    }]
}];
