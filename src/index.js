import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Main from './component/Main/Main';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root')
);
