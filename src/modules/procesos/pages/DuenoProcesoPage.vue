<template>
  <div class="h-50 2xl:h-[90%] w-full">
    <DataTable :structure="structure" :data="tableData">
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
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/modules/common/components/tables/django-rest-framework/Datatable/DataTable.vue';
import useDuenosProcesoStore from '@/modules/procesos/stores/duenos-proceso.store';
import { storeToRefs } from 'pinia';
import { onMounted, ref, computed } from 'vue';
import { Button } from 'primevue';

const duenosProcesoStore = useDuenosProcesoStore();
const { duenosProceso } = storeToRefs(duenosProcesoStore);

const tableData = computed(() => duenosProceso.value?.data.results || []);

onMounted(async () => {
  await duenosProcesoStore.getDuenosProcesos();
});

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
