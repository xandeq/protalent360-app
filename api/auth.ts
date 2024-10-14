import axios from 'axios';

export const signup = async (data: any) => {
  return await axios.post('http://localhost:3000/api/auth/signup', data);
};

export const login = async (data: any) => {
  return await axios.post('http://localhost:3000/api/auth/login', data);
};