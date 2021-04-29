import React from 'react';

import { Todo } from 'src/types/todo';

export type TodoAddProps = {
  todo: Todo;
  onChange: (event: { target: HTMLInputElement }) => void;
};

const TodoAdd = ({ todo: { id, content }, onChange }: TodoAddProps) => {
  return (
    <div>
      <label
        htmlFor="newTodo"
      >
        New Todo
      </label>
      {' '}
      <input
        id="newTodo"
        type="text"
        name="content"
        value={content}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoAdd;
