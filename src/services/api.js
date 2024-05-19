// api.js

import axios from 'axios';
import Cookies from 'js-cookie';
const api = axios.create({
  baseURL: 'https://uni-backend-xepm.onrender.com/api',
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
