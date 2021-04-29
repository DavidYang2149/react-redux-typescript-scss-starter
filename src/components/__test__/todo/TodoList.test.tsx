import React from 'react';
import { render } from '@testing-library/react';

import TodoList, { TodoListProps } from 'src/components/todo/TodoList';

describe('TodoList', () => {
  const renderTodoList = ({ todos }: TodoListProps) => render((
    <TodoList
      todos={todos}
    />
  ));

  context('with value', () => {
    it('render TodoList', () => {
      const { container } = renderTodoList({ todos: [{ id: 1, content: 'Todo 할일' }] });

      expect(container).toHaveTextContent('Todo 할일');
    });
  });

  context('without value', () => {
    it('render TodoList', () => {
      const { container } = renderTodoList({ todos: [] });

      expect(container).toHaveTextContent('Todo List Empty');
    });
  });
});
