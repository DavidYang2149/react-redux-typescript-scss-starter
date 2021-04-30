import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoAdd from 'src/components/todo/TodoAdd';
import TodoList from 'src/components/todo/TodoList';
import { RootState } from 'src/store/rootReducer';
import { changeTodo } from 'src/store/todo/todo';
import { setAddNewTodo } from 'src/store/todo/todos';

const TodosContainer = () => {
  const dispatch = useDispatch();

  const { todo, todos } = useSelector((state: RootState) => ({
    todo: state.todo,
    todos: state.todos,
  }));

  // XXX: onChangeTodoAdd는 불변성과 순수함수를 지키는 함수
  const onChangeTodoAdd = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    dispatch(changeTodo({ name, value }));
  };

  // XXX: onClickTodoAdd는 순수함수가 아님
  // TODO: setAddNewTodo 실행 후 input id="newTodo" value를 비우기
  const onClickTodoAdd = () => {
    dispatch(setAddNewTodo({ todo }));
  };

  return (
    <>
      <h3>TodosContainer</h3>
      <TodoAdd
        todo={todo}
        onChange={onChangeTodoAdd}
        onClick={onClickTodoAdd}
      />
      <TodoList
        todos={todos}
      />
    </>
  );
};

export default TodosContainer;
