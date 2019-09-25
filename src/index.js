import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
// 드디어 리액트 애플리케이션에,  리덕스를 적용하는 단계.!!! 

// 스토어 생성하기.
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.unregister();

// 크롬 확장프로그램 ReduxDevtools 설치후
// yarn add redux-devtools-extension 해주기.