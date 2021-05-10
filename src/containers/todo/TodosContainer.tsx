import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoAdd from 'src/components/todo/TodoAdd';
import TodoList from 'src/components/todo/TodoList';
import { RootState } from 'src/redux/rootReducer';
import { changeTodo, clearTodo } from 'src/redux/todo/todo';
import { removeTodo, setAddNewTodo } from 'src/redux/todo/todos';

const TodosContainer = () => {
  const dispatch = useDispatch();

  const { todo, todos } = useSelector((state: RootState) => ({
    todo: state.todo,
    todos: state.todos,
  }));

  // XXX: handleTodoAddChange 순수함수를 지키는 함수
  const handleTodoAddChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    dispatch(changeTodo({ name, value }));
  };

  // XXX: handleTodoAddClick 순수함수가 아님 (param: todo)
  const handleTodoAddClick = () => {
    dispatch(setAddNewTodo({ todo }));
    dispatch(clearTodo());
  };

  const handleTodoRemoveClick = ({ id }: { id: number }) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <>
      <h3>TodosContainer</h3>
      <TodoAdd
        todo={todo}
        onChange={handleTodoAddChange}
        onClick={handleTodoAddClick}
      />
      <TodoList
        todos={todos}
        onRemove={handleTodoRemoveClick}
      />
    </>
  );
};

export default TodosContainer;
