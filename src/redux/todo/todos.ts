import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

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
      // TODO: length 기능 검색하여 tools utils 함수로 만들기
      return [...state, { id: state.length + 1, content: todo.content }];
    },
    removeTodo(state, { payload: { id } }: PayloadAction<{ id: number; }>) {
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const loadTodos = () => async (dispatch: Dispatch<PayloadAction<Todo[]>>) => {
  try {
    const todos = await fetchTodos() || [];
    dispatch(actions.setTodos(todos));
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const {
  setTodos,
  setAddNewTodo,
  removeTodo,
} = actions;

export default reducer;
