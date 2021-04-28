import React from 'react';

import { Todo } from 'src/types/todo';

const TodoItem = ({ content }: Todo) => {
  return (
    <p>{content}</p>
  );
};

export default TodoItem;
