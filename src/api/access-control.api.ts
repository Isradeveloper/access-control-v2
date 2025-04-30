import axios from 'axios';

export const accessControlApi = axios.create({
  baseURL: '/api', // Usa el proxy configurado en vite.config.ts
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'token 35549bce126b02891f47bcb24db7b93dedd83b7b',
  },
});
