import { storeToRefs } from 'pinia';
import useDuenosProcesoStore from '../stores/duenos-proceso.store';
import { accessControlApi } from '@/api';
import { useQuery } from '@tanstack/vue-query';
import type { DuenoProcesoListViewset } from '../interfaces/dueno-proceso.interface';
import { computed, watch } from 'vue';
import { ref } from 'vue';
import type { FiltersDRF } from '@/modules/common/interfaces';
import { paramsToUrl } from '@/modules/common/helpers';
import type { DataTableSortEvent } from 'primevue/datatable';

export const useDuenoProceso = () => {
  const duenosProcesoStore = useDuenosProcesoStore();
  const { duenosProceso, total, page, pageSize, structure, filtersParams, order } =
    storeToRefs(duenosProcesoStore);

  const filters = ref<Record<string, FiltersDRF>>({
    search: {
      value: '',
      param: 'search',
    },
    abc: {
      value: '',
      param: 'abc',
    },
  });

  const queryKey = computed(
    () => `duenos-proceso-${page.value}-${pageSize.value}-${filtersParams.value}-${order.value}`,
  );

  const getDuenosProcesos = async (
    page: number,
    pageSize: number,
    filtersParams: string,
    order: string,
  ): Promise<DuenoProcesoListViewset> => {
    const { data } = await accessControlApi.get<DuenoProcesoListViewset>(
      `/dueno_procesos/?page=${page}&page_size=${pageSize}${filtersParams}${order}`,
    );
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getDuenosProcesos(page.value, pageSize.value, filtersParams.value, order.value),
  });

  watch(data, () => {
    if (data.value) {
      duenosProcesoStore.setListData(data.value);
    }
  });

  return {
    duenosProceso,
    total,
    page,
    pageSize,
    isLoading,
    error,
    structure,
    filters,
    setPage: (pageToAssign: number, pageSizeToAssign: number) => {
      duenosProcesoStore.setPage(pageToAssign, pageSizeToAssign);
    },
    setFiltersParams: () => {
      duenosProcesoStore.setFiltersParams(paramsToUrl(filters.value));
    },
    setOrder: ({ sortField, sortOrder }: DataTableSortEvent) => {
      duenosProcesoStore.setOrder(`&ordering=${sortOrder === 1 ? '' : '-'}${sortField}`);
    },
  };
};
