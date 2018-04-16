import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './i18n';
import App from './App.js';
import reducers from './reducers';
import apis from './fetch';
// import './styles/testcss.css';

// rem 定义根节点font-size
(function setFontSize(cw) {
    function setRootFontSize() {
        let w = document.documentElement.getBoundingClientRect().width;
        w = w > cw ? cw : w;
        document.documentElement.style.fontSize = `${w / cw * 100}px`;
    }
    setRootFontSize();
    window.onreset = setRootFontSize;
}(750));
window.fetchApis = apis;

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);
