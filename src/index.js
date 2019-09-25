import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
// 드디어 리액트 애플리케이션에,  리덕스를 적용하는 단계.!!! 

// 스토어 생성하기.
const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
