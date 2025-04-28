// Respuesta genérica
export interface Response<T> {
  data: T;
  success: boolean;
}

// Datos de paginación
export interface PaginatedData<T> {
  count: number;
  next: string;
  previous: string | null;
  results: T[];
}

// Respuesta paginada, extendiendo Response pero con data específico
export type PaginatedResponse<T> = Response<PaginatedData<T>>;
