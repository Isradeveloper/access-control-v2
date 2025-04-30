<script setup lang="ts">
import DataTable from './Datatable/DataTable.vue';
import PaginationComponent from '../PaginationComponent.vue';
import type { AdditionalFilters, FiltersDRF } from '@/modules/common/interfaces';
import type { DataTableSortEvent } from 'primevue/datatable';

type Structure = {
  header: string;
  field: string;
};

type Props<T = unknown> = {
  structure: Structure[];
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  isLoading: boolean;
  filters: Record<string, FiltersDRF>;
  aditionalFilters?: AdditionalFilters[];
  onSearch?: () => void;
  onFilter?: () => void;
  onSort?: (event: DataTableSortEvent) => void;
};

const emits = defineEmits(['page']);
const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-auto h-[90vh] md:h-[70vh] 2xl:h-[82vh]">
      <DataTable
        :structure="props.structure"
        :data="props.data"
        :total="props.total"
        :page="props.page"
        :pageSize="props.pageSize"
        :isLoading="props.isLoading"
        :filters="props.filters"
        :aditionalFilters="props.aditionalFilters"
        @search="props.onSearch"
        @filter="props.onFilter"
        @sort="props.onSort"
      >
        <template #actions>
          <slot name="actions"></slot>
        </template>
      </DataTable>
    </div>

    <PaginationComponent
      :pageSize="props.pageSize"
      :total="props.total"
      @page="emits('page', $event)"
    />
  </div>
</template>

<style scoped></style>
