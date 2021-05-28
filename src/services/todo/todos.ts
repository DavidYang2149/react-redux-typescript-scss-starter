import axios from 'axios';

import { ResponseTodos } from 'src/types/response';

export const fetchTodos = async () => {
  const response = await axios.get<ResponseTodos>('src/assets/db/sampleDB.json');
  return response.data;
};

export function XXX() {
  // TODO: Add function & Remove This funciton
}
