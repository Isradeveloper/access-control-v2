import { defineStore } from 'pinia';
import { accessControlApi } from '@/api';
import type { DuenoProcesoListViewset } from '../interfaces';
import { ref } from 'vue';

const useDuenosProcesoStore = defineStore('duenos-proceso', () => {
  const duenosProceso = ref<DuenoProcesoListViewset | null>(null);

  const getDuenosProcesos = async () => {
    try {
      const response = await accessControlApi.get<DuenoProcesoListViewset>('/dueno_procesos');
      duenosProceso.value = response.data;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    duenosProceso,
    getDuenosProcesos,
  };
});

export default useDuenosProcesoStore;
