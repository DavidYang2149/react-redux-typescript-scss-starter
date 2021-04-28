import todos from 'fixtures/todos';

import { Todo } from 'src/types/todo';

export async function fetchTodos(): Promise<Todo[]> {
  return Promise.resolve(todos);
}

export function XXX() {
  // TODOS: Add function & Remove This funciton
}
