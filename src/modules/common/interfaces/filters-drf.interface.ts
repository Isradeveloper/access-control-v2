export interface FiltersDRF {
  value: string;
  param: string;
}

export type AdditionalFilters = {
  id: string;
  label: string;
  optionLabel: string;
  optionValue: string;
  placeholder: string;
  data: Record<string, unknown>[];
};
