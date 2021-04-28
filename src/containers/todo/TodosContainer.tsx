import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store/rootReducer';
import TodoList from 'src/components/todo/TodoList';

const TodosContainer = () => {
  const { todos: { todos } } = useSelector((state: RootState) => ({
    todos: state.todos,
  }));

  return (
    <>
      <h3>TodosContainer</h3>
      <TodoList
        todos={todos}
      />
    </>
  );
};

export default TodosContainer;
