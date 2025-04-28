<template>
  <DataTable :structure="structure" :data="duenosProceso?.data.results">
    <template #actions>
      <Button
        icon="pi pi-pencil"
        class="p-button-rounded p-button-info"
        @click="() => console.log('Edit')"
        size="small"
      />
      <Button
        icon="pi pi-pencil"
        class="p-button-rounded p-button-danger"
        @click="() => console.log('Edit')"
        size="small"
      />
      <Button
        icon="pi pi-pencil"
        class="p-button-rounded p-button-hola"
        @click="() => console.log('Edit')"
        size="small"
      />
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/tables/django-rest-framework/Datatable/DataTable.vue';
import useDuenosProcesoStore from '@/modules/procesos/stores/duenos-proceso.store';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { Button } from 'primevue';

const duenosProcesoStore = useDuenosProcesoStore();
const { duenosProceso } = storeToRefs(duenosProcesoStore);

const structure = ref([
  {
    field: 'nombre',
    header: 'Nombre',
  },
  {
    field: 'nombre',
    header: 'Nombre',
  },
  {
    field: 'cargo',
    header: 'Cargo',
  },
  {
    field: 'area',
    header: 'Area',
  },
]);

onMounted(async () => {
  await duenosProcesoStore.getDuenosProcesos();
});
</script>

<style scoped>
.p-button-hola {
  background-color: #59ff00;
  border-color: #33ff00;
}
</style>
