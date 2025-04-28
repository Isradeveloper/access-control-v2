<template>
  <DataTable
    class="w-full h-full"
    :value="props.data"
    paginator
    :rows="pageSize"
    :rowsPerPageOptions="[pageSize * 1, pageSize * 2, pageSize * 4, pageSize * 8]"
    @sort="onSort"
    @page="onPage"
  >
    <template #empty> No customers found. </template>
    <template #header>
      <div class="flex flex-col-reverse md:flex-col">
        <div class="flex justify-end">
          <div
            class="flex gap-2 w-full md:w-100 flex-col md:flex-row mt-2 md:mt-0 border-t border-color pt-5 md:pt-0 md:border-none"
          >
            <InputText
              v-model="filters.search.value"
              placeholder="Búsqueda por cualquier campo"
              class="w-full"
            />
            <Button type="button" icon="pi pi-search" label="Buscar" class="w-full md:w-40" />
          </div>
        </div>
        <Panel header="Filtros adicionales" toggleable class="mt-5">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3 py-3">
            <SelectComponent
              id="country"
              v-model="selectedCountry"
              :options="countries"
              label="País"
              placeholder="Seleccione un país"
              optionLabel="name"
              class="w-full"
            />
          </div>
        </Panel>
      </div>
    </template>

    <Column
      v-for="({ field, header }, index) in props.structure"
      :key="index"
      sortable
      :sort-field="field"
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
          class="items-center w-[100px] md:w-[150px] justify-center grid grid-cols-2 md:grid-cols-3 place-items-center gap-x-5 gap-y-2"
        >
          <slot name="actions"></slot>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable, { type DataTableSortEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import SelectComponent from '@/modules/common/components/SelectComponent.vue';
import Panel from 'primevue/panel';

const filters = ref({
  search: {
    value: null,
  },
});

const onPage = (event: unknown) => {
  const { originalEvent } = event as { originalEvent: unknown };
  console.log(originalEvent);
};

const onSort = (event: DataTableSortEvent) => {
  console.log(event);
};

type Structure = {
  header: string;
  field: string;
};

interface Props {
  structure: Structure[];
  data: unknown[];
}

const props = defineProps<Props>();

const selectedCountry = ref(null);
const countries = [
  { name: 'United States', code: 'us' },
  { name: 'United Kingdom', code: 'uk' },
  { name: 'Germany', code: 'de' },
  { name: 'Spain', code: 'es' },
  { name: 'France', code: 'fr' },
  { name: 'Italy', code: 'it' },
  { name: 'Brazil', code: 'br' },
  { name: 'Canada', code: 'ca' },
  { name: 'Australia', code: 'au' },
  { name: 'New Zealand', code: 'nz' },
];

const pageSize = ref(25);
</script>

<style scoped>
.holaa {
  background-color: red !important;
}
</style>
;
