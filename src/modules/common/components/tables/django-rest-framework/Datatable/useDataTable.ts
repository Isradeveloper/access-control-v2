// composables/useDataTableLogic.ts
import { ref, computed, type ComputedRef } from 'vue';
import type { DataTableSortEvent } from 'primevue/datatable';
import type { PageState } from 'primevue';
import { useDuenoProceso } from '../../../../../procesos/composables/useDuenoProceso';
import type { FiltersDRF } from '@/modules/common/interfaces';

type Structure = {
  header: string;
  field: string;
};

interface SkeletonData {
  [key: string]: string;
}

interface UseDataTableLogicProps<T> {
  structure: Structure[];
  data: T[];
  isLoading: boolean;
  total: number;
  page: number;
  pageSize: number;
  filters: Record<string, FiltersDRF>;
}

export const useDataTable = <T>(props: UseDataTableLogicProps<T>) => {
  const { setPage } = useDuenoProceso();

  const filtersRef = ref({
    ...props.filters,
  });

  const showFilters = ref(false);

  const toggleFilters = () => {
    showFilters.value = !showFilters.value;
  };

  const computedData: ComputedRef<T[] | SkeletonData[]> = computed(() => {
    if (props.isLoading) {
      const fakeItem: SkeletonData = props.structure.reduce(
        (acc, { field }) => ({ ...acc, [field]: '---' }),
        {} as SkeletonData,
      );

      return Array.from({ length: props.pageSize }, () => fakeItem);
    }
    return props.data;
  });

  const onSort = (event: DataTableSortEvent) => {
    console.log('Sort event:', event);
  };

  const onPage = (event: PageState) => {
    setPage(event.page + 1, event.rows);
  };

  return {
    filtersRef,
    showFilters,
    toggleFilters,
    computedData,
    onSort,
    onPage,
  };
};
