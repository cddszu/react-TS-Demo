import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global'
import createStore from './store/createStore';


import './index.css';
import App from './App';
import reducer from './store/reducers';
import * as serviceWorker from './serviceWorker';


const store = createStore(window.__INITIAL_STATE__);

ReactDOM.render(// 2、然后使用react-redux的Provider将props与容器连通起来
  <Provider store={ store }>
      <App />
  </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
