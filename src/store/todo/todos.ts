import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { Todo, TodosProps } from 'src/types/todo';
import { fetchTodos } from 'src/services/todo/todos';

const initialState: TodosProps = {
  todos: [],
};

const { actions, reducer } = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, { payload }: PayloadAction<Todo[]>) {
      return {
        ...state,
        todos: [...payload],
      };
    },
  },
});

export function loadTodos() {
  return async (dispatch: Dispatch<PayloadAction<Todo[]>>) => {
    const todos = await fetchTodos();

    dispatch(actions.setTodos(todos));
  };
}

export const {
  setTodos,
} = actions;

export default reducer;
