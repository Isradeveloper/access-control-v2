<template>
  <div class="flex-1 overflow-y-auto">
    <div class="px-4 py-2 text-sm text-gray-500 font-bold">{{ label }}</div>
    <nav class="space-y-1 px-2">
      <RecursiveItem v-for="(item, i) in items" :key="i" :item="item" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/modules/common/interfaces';
import RecursiveItem from './RecursiveItem.vue';

defineProps<{
  items: MenuItem[];
  label: string;
}>();
</script>
