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
    children: [
      { label: 'Monitoreo', icon: 'pi pi-eye', name: 'monitoreo' },
      {
        label: 'Gestión de Procesos',
        children: [
          { label: 'Crear Proceso', icon: 'pi pi-plus', name: 'crear' },
          { label: 'Editar Proceso', icon: 'pi pi-pencil' },
          {
            label: 'Configuración Avanzada',
            children: [
              { label: 'Parámetros', icon: 'pi pi-cog' },
              { label: 'Automatización', icon: 'pi pi-cog' },
              { label: 'Alertas', icon: 'pi pi-cog' },
            ],
          },
        ],
      },
      { label: 'Reportes' },
      {
        label: 'Configuración',
        children: [
          { label: 'Parámetros', icon: 'pi pi-cog' },
          { label: 'Automatización', icon: 'pi pi-cog' },
          { label: 'Alertas', icon: 'pi pi-cog' },
          {
            label: 'Roles',
            icon: 'pi pi-cog',
            children: [
              { label: 'Crear Rol', icon: 'pi pi-plus' },
              { label: 'Editar Rol', icon: 'pi pi-pencil' },
            ],
          },
        ],
      },
    ],
  },
];
</script>
