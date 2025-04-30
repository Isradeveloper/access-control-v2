import type { FiltersDRF } from '../interfaces';

export const paramsToUrl = (filters: Record<string, FiltersDRF>): string => {
  let stringParams: string = '';
  Object.entries(filters).forEach(([, { param, value }]) => {
    if (value) {
      stringParams += `${param}=${value}&`;
    }
  });

  return `&${stringParams}`.slice(0, -1);
};
