<template>
  <DataTable
    class="w-full h-full"
    :value="customers"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
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
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
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

const customers = [
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company A',
    representative: { name: 'Representative A' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company B',
    representative: { name: 'Representative B' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company C',
    representative: { name: 'Representative C' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company D',
    representative: { name: 'Representative D' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company E',
    representative: { name: 'Representative E' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company F',
    representative: { name: 'Representative F' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company G',
    representative: { name: 'Representative G' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company H',
    representative: { name: 'Representative H' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company I',
    representative: { name: 'Representative I' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company J',
    representative: { name: 'Representative J' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company K',
    representative: { name: 'Representative K' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company L',
    representative: { name: 'Representative L' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company M',
    representative: { name: 'Representative M' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company N',
    representative: { name: 'Representative N' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company O',
    representative: { name: 'Representative O' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company P',
    representative: { name: 'Representative P' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company Q',
    representative: { name: 'Representative Q' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company R',
    representative: { name: 'Representative R' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company S',
    representative: { name: 'Representative S' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company T',
    representative: { name: 'Representative T' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company U',
    representative: { name: 'Representative U' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company V',
    representative: { name: 'Representative V' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company W',
    representative: { name: 'Representative W' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company X',
    representative: { name: 'Representative X' },
  },
  {
    name: 'John Doe',
    country: { name: 'United States' },
    company: 'Company Y',
    representative: { name: 'Representative Y' },
  },
  {
    name: 'Jane Doe',
    country: { name: 'United States' },
    company: 'Company Z',
    representative: { name: 'Representative Z' },
  },
];
</script>
