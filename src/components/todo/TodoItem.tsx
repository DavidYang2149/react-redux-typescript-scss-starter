import React from 'react';

import { Todo } from 'src/types/todo';
import { isEmpty } from 'src/utils/tools';

const TodoItem = ({ id, content }: Todo) => {
  if (isEmpty(id)) {
    return (
      <></>
    );
  }

  return (
    <p>{content}</p>
  );
};

export default TodoItem;
