import React from 'react';

import { TodosProps } from 'src/types/todo';
import { isEmpty } from 'src/utils/tools';
import TodoItem from './TodoItem';

const TodoList = ({ todos }: TodosProps) => {
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
