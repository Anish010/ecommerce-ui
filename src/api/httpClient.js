import axios from 'axios';
import { tokenStorage } from '../utils/tokenStorage';

import { normalizeError } from '../utils/normalizeError';


export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
        const token = tokenStorage.get();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
);

httpClient.interceptors.response.use(
  (response) => response,
    (error) => {
      if(error.response && error.response.status === 401) {
        // Handle unauthorized error
          tokenStorage.clear();
        window.dispatchEvent(new Event('auth:logout')); //AuthContext will listen to this event and update the state accordingly
        }
        return Promise.reject(normalizeError(error));
  }
);