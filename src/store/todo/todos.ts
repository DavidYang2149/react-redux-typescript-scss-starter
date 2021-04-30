import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { Todo } from 'src/types/todo';
import { fetchTodos } from 'src/services/todo/todos';

export type TodosState = ReturnType<typeof reducer>;

const initialState: Todo[] = [];

const { actions, reducer } = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, { payload }: PayloadAction<Todo[]>) {
      return [
        ...state,
        ...payload,
      ];
    },
    setAddNewTodo(state, { payload: { todo } }: PayloadAction<{ todo: Todo; }>) {
      return [...state, { id: state.length + 1, content: todo.content }];
    },
  },
});

export function loadTodos() {
  return async (dispatch: Dispatch<PayloadAction<Todo[]>>) => {
    const todos = await fetchTodos() || [];

    dispatch(actions.setTodos(todos));
  };
}

export const {
  setTodos,
  setAddNewTodo,
} = actions;

export default reducer;
