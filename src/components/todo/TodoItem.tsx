import React from 'react';

import { isEmpty } from 'src/utils/tools';

export type TodoItemProps = {
  id: number;
  content: string;
  onRemove: (event: { target: HTMLButtonElement }) => void;
};

const TodoItem = ({ id, content, onRemove }: TodoItemProps) => {
  if (isEmpty(id)) {
    return (
      <></>
    );
  }

  return (
    <>
      <p>{content}</p>
      <button
        type="button"
        onClick={onRemove}
        value={id}
      >
        remove
      </button>
    </>
  );
};

export default TodoItem;
