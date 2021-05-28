import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  setTodos,
  setAddNewTodo,
  removeTodo,
  loadTodos,
  TodosState,
} from 'src/redux/todo/todos';
import { Todo } from 'src/types/todo';
import todos from 'src/services/__mocks__/fixtures/todos';
import { fetchTodos } from 'src/services/todo/todos';

jest.mock('src/services/todo/todos');

const middlewares = [thunk];
const mockStore = configureStore<TodosState, ThunkDispatch<TodosState, void, AnyAction>>(middlewares);

describe('todos reducer', () => {
  const initialState: Todo[] = [];

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setTodos', () => {
    it('setTodos', () => {
      const state = reducer(initialState, setTodos(todos));

      expect(state).toEqual(todos);
    });
  });

  describe('setAddNewTodo', () => {
    it('Add NewTodo', () => {
      const newTodo: Todo = { id: 1, content: '새로운 할일들' };
      const state = reducer(initialState, setAddNewTodo({ todo: newTodo }));

      expect(state).toEqual([newTodo]);
    });
  });

  describe('removeTodo', () => {
    it('Remove Todo', () => {
      const state = reducer(todos, removeTodo({ id: 1 }));

      expect(state).toEqual(todos.splice(1));
    });
  });
});

describe('todos actions', () => {
  describe('loadTodos', () => {
    context('without Error', () => {
      context('with fetchTodos / return todos: []', () => {
        it('runs setTodos', async () => {
          const store = mockStore([]);

          (fetchTodos as jest.Mock).mockImplementation(() => {
            return { todos: [] };
          });

          await store.dispatch(loadTodos());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setTodos([]));
        });
      });

      context('with fetchTodos / return todos: null', () => {
        it('runs setTodos', async () => {
          const store = mockStore([]);

          (fetchTodos as jest.Mock).mockImplementation(() => {
            return { todos: null };
          });

          await store.dispatch(loadTodos());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setTodos([]));
        });
      });
    });

    context('with Error', () => {
      it('fetchTodos action failure to return error', async () => {
        const store = mockStore([]);

        (fetchTodos as jest.Mock).mockImplementation(() => {
          throw new Error('fetchTodos error');
        });

        try {
          await store.dispatch(loadTodos());
        } catch (error) {
          expect(error).toEqual(new Error('fetchTodos error'));
        }
      });
    });
  });
});
