import { defineStore } from 'pinia';
import { accessControlApi } from '@/api';

const useDuenosProcesoStore = defineStore('duenos-proceso', () => {
  const getDuenosProcesos = async () => {
    try {
      const response = await accessControlApi.get('/dueno_procesos');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getDuenosProcesos,
  };
});

export default useDuenosProcesoStore;
