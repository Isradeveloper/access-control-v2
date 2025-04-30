import { defineStore } from 'pinia';
import type { DuenoProceso, DuenoProcesoListViewset } from '../interfaces';
import { ref } from 'vue';

const useDuenosProcesoStore = defineStore('duenos-proceso', () => {
  const duenosProceso = ref<DuenoProceso[]>([]);
  const total = ref<number>(0);
  const page = ref<number>(1);
  const pageSize = ref<number>(25);
  const filtersParams = ref('');
  const order = ref('');

  const structure = ref([
    {
      field: 'nombre',
      header: 'Nombre',
      sortable: true,
      sortField: 'nombre',
    },
    {
      field: 'identificacion',
      header: 'Identificacion',
      sortable: true,
      sortField: 'identificacion',
    },
    {
      field: 'cargo',
      header: 'Cargo',
      sortable: true,
      sortField: 'cargo',
    },
    {
      field: 'area',
      header: 'Area',
      sortable: true,
      sortField: 'area',
    },
  ]);

  const setListData = (data: DuenoProcesoListViewset) => {
    const { count, results } = data.data;

    duenosProceso.value = results;
    total.value = count;
  };

  const setPage = (pageToAssign: number, pageSizeToAssign: number) => {
    if (pageToAssign > 0 && pageToAssign) {
      page.value = pageToAssign;
    }
    if (pageSizeToAssign > 0) {
      pageSize.value = pageSizeToAssign;
    }
  };

  const setFiltersParams = (filtersParamsToAssign: string) => {
    filtersParams.value = filtersParamsToAssign;
  };

  const setOrder = (orderToAssign: string) => {
    order.value = orderToAssign;
  };

  return {
    duenosProceso,
    total,
    page,
    pageSize,
    structure,
    filtersParams,
    order,
    setListData,
    setPage,
    setFiltersParams,
    setOrder,
  };
});

export default useDuenosProcesoStore;
