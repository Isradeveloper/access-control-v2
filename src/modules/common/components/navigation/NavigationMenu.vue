<template>
  <NestedMenu :items="menu" label="MENÚ" />
</template>

<script setup lang="ts">
import type { MenuItem } from '@/modules/common/interfaces';
import NestedMenu from './NestedMenu.vue';

const menu: MenuItem[] = [
  { label: 'Inicio', icon: 'pi pi-home', name: 'home' },
  {
    label: 'Procesos',
    children: [{ label: 'Dueños de Proceso', icon: 'pi pi-eye', name: 'duenos-proceso' }],
  },
];
</script>
