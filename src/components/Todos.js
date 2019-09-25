import React from 'react';
import TodoItem from './TodoItem';


const Todos = ({
    input,      // 인풋에 입력되는 텍스트
    todos,      // 할 일 목록이 들어 있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
  }) => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;