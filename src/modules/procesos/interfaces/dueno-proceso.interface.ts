import type { PaginatedResponse } from '@/modules/common/interfaces';

export interface DuenoProceso {
  id: number;
  id_empleado_th: number | null;
  nombre: string;
  identificacion: string;
  cargo: string;
  area: string;
  email: string;
  observacion: string;
  aplica_control_sod: boolean;
  solicitar_aprobar_cotizaciones: boolean;
  aprobar_compras: boolean;
  aprobador: number | null;
  procesos: ProcesoL[];
  empresas: number[];
}

export interface ProcesoL {
  id: number;
  nombre: string;
  descripcion: string;
  control: number;
  empresas: number[];
  roles: number[];
}

export type DuenoProcesoListViewset = PaginatedResponse<DuenoProceso>;
