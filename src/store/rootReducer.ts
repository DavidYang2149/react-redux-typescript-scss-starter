import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from 'src/store/todo/todo';
import todosReducer from 'src/store/todo/todos';

const rootReducer = combineReducers({
  todo: todoReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
