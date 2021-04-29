import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoAdd from 'src/components/todo/TodoAdd';
import TodoList from 'src/components/todo/TodoList';
import { RootState } from 'src/store/rootReducer';
import { changeTodo } from 'src/store/todo/todo';

const TodosContainer = () => {
  const dispatch = useDispatch();

  const { todo, todos: { todos } } = useSelector((state: RootState) => ({
    todo: state.todo,
    todos: state.todos,
  }));

  const onChangeTodoAdd = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    dispatch(changeTodo({ name, value }));
  };

  return (
    <>
      <h3>TodosContainer</h3>
      <TodoAdd
        todo={todo}
        onChange={onChangeTodoAdd}
      />
      <TodoList
        todos={todos}
      />
    </>
  );
};

export default TodosContainer;
