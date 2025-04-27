import axios from 'axios';

/**
 * Cliente HTTP para comunicarse con la API de control de acceso.
 * Utiliza el proxy configurado en Vite para evitar problemas de CORS.
 */
export const accessControlApi = axios.create({
  baseURL: '/api', // Usa el proxy configurado en vite.config.ts
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
