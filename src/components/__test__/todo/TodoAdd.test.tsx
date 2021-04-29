import React from 'react';
import { render } from '@testing-library/react';

import TodoAdd from 'src/components/todo/TodoAdd';
import { Todo } from 'src/types/todo';

describe('TodoAdd', () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });

  const renderTodoAdd = ({ id, content }: Todo) => render((
    <TodoAdd
      todo={{ id, content }}
      onChange={onChange}
    />
  ));

  context('with value', () => {
    it('render TodoAdd', () => {
      const { getByLabelText } = renderTodoAdd({ id: 0, content: 'Todo 할일' });

      expect(getByLabelText('New Todo')).toHaveValue('Todo 할일');
    });
  });

  context('without value', () => {
    it('render TodoAdd', () => {
      const { getByLabelText } = renderTodoAdd({ id: 0, content: '' });

      expect(getByLabelText('New Todo')).toHaveValue('');
    });
  });
});
