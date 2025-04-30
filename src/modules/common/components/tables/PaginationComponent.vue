<script setup lang="ts">
import Paginator from 'primevue/paginator';

defineProps<{
  pageSize: number;
  total: number;
}>();

const emits = defineEmits(['page']);
</script>

<template>
  <div>
    <Paginator
      :rows="pageSize"
      :totalRecords="total"
      :rowsPerPageOptions="[25 * 1, 25 * 2, 25 * 4, 25 * 8]"
      @page="emits('page', $event)"
    />
  </div>
</template>

<style scoped></style>
