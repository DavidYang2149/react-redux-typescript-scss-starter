import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TodosContainer from 'src/containers/todo/TodosContainer';
import { loadTodos } from 'src/redux/todo/todos';

const TodosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  });

  return (
    <>
      <h2>TodosPage</h2>
      <TodosContainer />
    </>
  );
};

export default TodosPage;
