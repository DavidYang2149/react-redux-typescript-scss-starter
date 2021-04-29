import React from 'react';
import { render } from '@testing-library/react';

import TodoItem from 'src/components/todo/TodoItem';
import { Todo } from 'src/types/todo';

describe('TodoItem', () => {
  const renderTodoItem = ({ id, content }: Todo) => render((
    <TodoItem
      id={id}
      content={content}
    />
  ));

  context('with value', () => {
    it('render TodoItem', () => {
      const { container } = renderTodoItem({ id: 1, content: 'Todo 할일' });

      expect(container).toHaveTextContent('Todo 할일');
    });
  });

  context('without value', () => {
    it('render TodoItem', () => {
      const { container } = renderTodoItem({ id: 0, content: '' });

      expect(container).not.toHaveTextContent('Todo 할일');
    });
  });
});
