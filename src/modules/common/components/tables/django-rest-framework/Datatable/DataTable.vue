<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { computed, useSlots } from 'vue';
import SelectComponent from '@/modules/common/components/SelectComponent.vue';
import DataTableSkeleton from './DataTableSkeleton.vue';
import { useDataTable } from './useDataTable';
import type { FiltersDRF } from '@/modules/common/interfaces';
import type { AdditionalFilters } from '@/modules/common/interfaces';
import type { DataTableSortEvent } from 'primevue/datatable';

type Structure = {
  header: string;
  field: string;
  sortable?: boolean;
  sortField?: string;
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

const props = defineProps<Props>();

const { filtersRef, showFilters, toggleFilters, computedData } = useDataTable(props);

const slots = useSlots();
const hasActionsSlot = computed(() => !!slots.actions);
const height = computed(() =>
  props.aditionalFilters ? 'calc(100vh - 20rem)' : 'calc(100vh - 15rem)',
);
</script>

<template>
  <DataTable
    class="w-full h-full sticky-header-table"
    :value="computedData"
    scrollable
    :scrollHeight="height"
    @sort="props.onSort"
  >
    <template #empty>
      <div class="w-full text-center text-md">No hay datos disponibles</div>
    </template>

    <template #header>
      <div class="flex flex-col">
        <div class="mb-5" v-if="props.aditionalFilters">
          <div class="flex justify-end">
            <Button
              type="button"
              icon="pi pi-filter"
              :label="showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'"
              @click="toggleFilters"
              class="md:w-auto mb-2 p-button-secondary"
              :class="{ 'p-button-outlined': !showFilters }"
            />
          </div>
          <div
            v-if="showFilters"
            class="grid grid-cols-1 md:grid-cols-4 gap-3 py-2 border-t border-neutral-200 pt-2"
          >
            <SelectComponent
              v-for="(
                { label, data, optionLabel, optionValue, placeholder, id }, index
              ) in props.aditionalFilters"
              :key="index"
              :id="id"
              v-model="filtersRef[id].value"
              :options="data"
              :label="label"
              :option-label="optionLabel"
              :option-value="optionValue"
              :placeholder="placeholder"
              class="w-full"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <div
            class="flex gap-2 w-full md:w-110 flex-col md:flex-row mt-2 md:mt-0 border-t border-color pt-2 md:pt-0 md:border-none"
          >
            <InputText
              v-model="filtersRef.search.value"
              placeholder="Búsqueda por cualquier campo"
              class="w-full"
            />
            <Button
              type="button"
              icon="pi pi-search"
              label="Buscar"
              class="w-full md:w-70"
              @click="props.onSearch?.()"
            />
          </div>
        </div>
      </div>
    </template>

    <DataTableSkeleton
      :structure="props.structure"
      :has-actions="hasActionsSlot"
      v-if="props.isLoading"
    />

    <template v-else>
      <Column
        v-for="({ field, header, sortable, sortField }, index) in props.structure"
        :key="index"
        :sortable="sortable"
        :sort-field="sortField || field"
      >
        <template #header>
          <div class="font-bold w-full text-center text-md uppercase">{{ header }}</div>
        </template>
        <template #body="slotProps">
          <div class="w-full text-center text-md">{{ slotProps.data[field] }}</div>
        </template>
      </Column>

      <Column>
        <template #header>
          <div class="font-bold w-full text-center text-md uppercase">Acciones</div>
        </template>
        <template #body="">
          <div
            class="flex items-center w-[100px] md:w-[150px] justify-center gap-x-5 gap-y-2 flex-wrap"
          >
            <slot name="actions"></slot>
          </div>
        </template>
      </Column>
    </template>
  </DataTable>
</template>

<style scoped>
.sticky-header-table :deep(.p-datatable-thead) {
  position: sticky;
  top: 0;
  z-index: 1;
}

.sticky-header-table :deep(.p-datatable-thead > tr > th) {
  background-color: rgb(var(--neutral-100));
  border-bottom: 1px solid rgb(var(--neutral-200));
}
</style>
