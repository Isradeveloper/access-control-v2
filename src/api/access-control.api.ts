import axios from 'axios';

export const accessControlApi = axios.create({
  baseURL: '/api', // Usa el proxy configurado en vite.config.ts
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'token e151255a06b1f9cbeef9e3e942375501221d2248',
  },
});
