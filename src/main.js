import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.js';
import reducers from './reducers';
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

const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app-box')
);
