import App from './App.js';
import App1 from './App.1.js';

module.exports = [{
    path: '/test2',
    component: App,
    routes: [{
        path: '/test2/test',
        component: App1
    }]
}];
