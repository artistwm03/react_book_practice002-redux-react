import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

// 리듀서 여러개 만들었지?
// createStore 함수 사용해서 스토어 만들때 리듀서 하나만 사용해야 돼.
// 앞에 2개 만들었던거 하나로 합쳐주면 되거든?
// 리덕스에서 제공해주는 유틸 함수 중에서 combineReducers 라는 함수가 있어. 이걸 쓰면 간단해.

// 폴더 이름은 index.js 로 만든 이유는
// import rootReducer from './modules'; 이렇게 쓸 수 있어
// 경로를 디렉터리 이름까지만 입력하면 되니까 간단해서? 이렇게 만든거 같아..