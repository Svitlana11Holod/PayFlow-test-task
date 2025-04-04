import axios from 'axios';

const path = `https://jsonplaceholder.typicode.com/users`;

export const getUsers = async () => {
  const res = await axios.get(path);

  return res.data;
};