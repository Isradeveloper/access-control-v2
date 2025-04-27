<template>
  <DatatableDrfComponent />
</template>

<script setup lang="ts">
import DatatableDrfComponent from '@/modules/common/components/drf/DatatableDrfComponent.vue';
import { onMounted } from 'vue';
import useDuenosProcesoStore from '@/modules/procesos/stores/duenos-proceso.store';

const duenosProcesoStore = useDuenosProcesoStore();

onMounted(async () => {
  const data = await duenosProcesoStore.getDuenosProcesos();
  console.log(data);
});
</script>
