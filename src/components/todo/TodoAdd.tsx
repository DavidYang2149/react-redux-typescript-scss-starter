import React from 'react';

import { Todo } from 'src/types/todo';

export type TodoAddProps = {
  todo: Todo;
  onChange: (event: { target: HTMLInputElement }) => void;
  onClick: () => void;
};

const TodoAdd = ({
  todo: { content },
  onChange, onClick,
}: TodoAddProps) => {
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
      {' '}
      <button
        type="button"
        onClick={onClick}
      >
        Add Button
      </button>
    </div>
  );
};

export default TodoAdd;
