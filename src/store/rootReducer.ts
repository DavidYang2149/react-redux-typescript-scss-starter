import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from 'src/store/todo/todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
