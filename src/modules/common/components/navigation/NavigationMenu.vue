<template>
  <NestedMenu :items="menu" label="MENÚ" />
</template>

<script setup lang="ts">
import type { MenuItem } from '@/modules/common/interfaces';
import NestedMenu from './NestedMenu.vue';

const menu: MenuItem[] = [
  { label: 'Inicio', href: '#', icon: 'pi pi-home' },
  {
    label: 'Procesos',
    children: [
      { label: 'Monitoreo', href: '#', icon: 'pi pi-eye' },
      {
        label: 'Gestión de Procesos',
        children: [
          { label: 'Crear Proceso', href: '#', icon: 'pi pi-plus' },
          { label: 'Editar Proceso', href: '#', icon: 'pi pi-pencil' },
          {
            label: 'Configuración Avanzada',
            children: [
              { label: 'Parámetros', href: '#', icon: 'pi pi-cog' },
              { label: 'Automatización', href: '#', icon: 'pi pi-cog' },
              { label: 'Alertas', href: '#', icon: 'pi pi-cog' },
            ],
          },
        ],
      },
      { label: 'Reportes', href: '#' },
      {
        label: 'Configuración',
        href: '#',
        children: [
          { label: 'Parámetros', href: '#', icon: 'pi pi-cog' },
          { label: 'Automatización', href: '#', icon: 'pi pi-cog' },
          { label: 'Alertas', href: '#', icon: 'pi pi-cog' },
          {
            label: 'Roles',
            href: '#',
            icon: 'pi pi-cog',
            children: [
              { label: 'Crear Rol', href: '#', icon: 'pi pi-plus' },
              { label: 'Editar Rol', href: '#', icon: 'pi pi-pencil' },
            ],
          },
        ],
      },
    ],
  },
];
</script>
