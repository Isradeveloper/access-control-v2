<template>
  <div v-if="!error">
    <DataTablePaginated
      :structure="structure"
      :data="duenosProceso"
      :isLoading="isLoading"
      :filters="filters"
      :total="total"
      :page="page"
      :pageSize="pageSize"
      :onSearch="onSearch"
      :onFilter="onSearch"
      :onSort="setOrder"
      @page="setPage($event.page + 1, $event.rows)"
    >
      <template #actions>
        <Button
          icon="pi pi-pencil"
          class="p-button-rounded p-button-info"
          @click="() => console.log('Edit')"
          size="small"
        />
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-danger"
          @click="() => console.log('Delete')"
          size="small"
        />
      </template>
    </DataTablePaginated>
  </div>
  <div v-else>
    <p>{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import DataTablePaginated from '@/modules/common/components/tables/django-rest-framework/DataTablePaginated.vue';
import { Button } from 'primevue';
import { useDuenoProceso } from '../composables/useDuenoProceso';
import { watch } from 'vue';

const {
  duenosProceso,
  structure,
  isLoading,
  total,
  page,
  pageSize,
  setPage,
  filters,
  setFiltersParams,
  setOrder,
  error,
} = useDuenoProceso();

const onSearch = () => {
  setFiltersParams();
};

watch(error, () => {
  console.log(error);
});

// const aditionalFilters: AdditionalFilters[] = [
//   {
//     id: 'abc',
//     label: 'ABC',
//     optionLabel: 'label',
//     optionValue: 'value',
//     placeholder: 'Seleccione un abc',
//     data: [
//       { value: '1', label: 'abc' },
//       { value: '2', label: 'def' },
//       { value: '3', label: 'ghi' },
//     ],
//   },
// ];
</script>

<style scoped>
.p-button-hola {
  background-color: #59ff00;
  border-color: #33ff00;
}
</style>
