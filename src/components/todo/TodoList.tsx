import React from 'react';

import { Todo } from 'src/types/todo';
import { isEmpty } from 'src/utils/tools';
import TodoItem from './TodoItem';

const TodoList = ({ todos }: { todos: Todo[]; }) => {
  // TODO: length 기능 검색하여 tools utils 함수로 만들기
  if (isEmpty(todos.length)) {
    return (
      <>
        <p>Todo List Empty</p>
      </>
    );
  }

  return (
    <>
      <h4>TodoList</h4>
      {
        todos.map(({ id, content }) => (
          <TodoItem
            key={id}
            id={id}
            content={content}
          />
        ))
      }
    </>
  );
};

export default TodoList;
