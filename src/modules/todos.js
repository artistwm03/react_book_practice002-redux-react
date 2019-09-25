const CHANGE_INPUT = 'todos/CHANGE_INPUT';   // 인풋 값을 변경.
const INSERT = 'todos/INSERT'                // 새로운 todo를 등록.
const TOGGLE = 'todos/TOGGLE'                // todo를 체크/체크해제.
const REMOVE = 'todos/REMOVE'                // todo를 제거.

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input 
});

let id = 3;                                // insert가 호출될 때마다 1씩 더해짐. , todo객체 2개를 미리 만들어 놓을꺼라 3으로 초기화 시킨것.!
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});