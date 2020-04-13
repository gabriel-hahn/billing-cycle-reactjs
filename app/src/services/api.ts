import axios from 'axios';

import store from '../store';
import { UserStateInterface } from '../interfaces/user';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const { data } = (store.getState().users as UserStateInterface);
  const headers = { ...config.headers };

  if (data) {
    headers.Authorization = `Bearer ${data.token}`;
    headers.UserId = data.id;
  }

  return { ...config, headers };
});

export default api;
