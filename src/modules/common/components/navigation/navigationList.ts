import type { MenuItem } from '../../interfaces';

export const menu: MenuItem[] = [
  { label: 'Inicio', icon: 'pi pi-home', name: 'home' },
  {
    label: 'Procesos',
    children: [{ label: 'Dueños de Proceso', icon: 'pi pi-eye', name: 'duenos-proceso' }],
  },
];
