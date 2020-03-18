import axios from 'axios';

import store from '../store';
import { UserStateInterface } from '../interfaces/user';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const { data } = (store.getState().users as UserStateInterface);
  const headers = { ...config.headers };

  if (data) {
    headers.Authorization = `Bearer ${data.token}`;
  }

  return { ...config, headers };
});

export default api;
