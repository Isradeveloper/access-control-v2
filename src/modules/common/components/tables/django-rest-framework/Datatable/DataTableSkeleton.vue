<template>
  <div class="card">
    <Column v-for="({ header }, index) in structure" :key="index">
      <template #header>
        <div class="font-bold w-full text-center text-md uppercase">{{ header }}</div>
      </template>

      <template #body>
        <Skeleton></Skeleton>
      </template>
    </Column>

    <!-- Columna adicional para acciones si hasActions es true -->
    <Column v-if="hasActions">
      <template #header>
        <div class="font-bold w-full text-center text-md uppercase">Acciones</div>
      </template>
      <template #body>
        <Skeleton></Skeleton>
      </template>
    </Column>
  </div>
</template>

<script setup lang="ts">
import Column from 'primevue/column';
import Skeleton from 'primevue/skeleton';

defineProps<{
  structure: {
    field: string;
    header: string;
  }[];
  hasActions?: boolean;
}>();
</script>
