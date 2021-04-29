import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { RootState } from 'src/store/rootReducer';

import todo from 'fixtures/todo';
import todos from 'fixtures/todos';

jest.mock('react-redux');

describe('TodosContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      todo: Todo,
      ...todos,
    }));
  });
});
