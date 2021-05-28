import axios from 'axios';
import { fetchTodos, XXX } from 'src/services/todo/todos';

jest.mock('axios');

test('todos', async () => {
  (axios as jest.Mocked<typeof axios>).get.mockImplementation(() => Promise.resolve({ data: [] }));
  // (axios as jest.Mocked<typeof axios>).get.mockResolvedValue({ data: {} });
  const response = await fetchTodos();

  expect(response).toEqual([]);
});

// TODO: Add function & Remove This funciton
test('XXX', () => {
  XXX();
});
