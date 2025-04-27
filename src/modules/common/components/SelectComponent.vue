<template>
  <div class="flex flex-col">
    <label :for="id" class="font-bold text-sm mb-1">{{ label }}</label>
    <Select
      :id="id"
      v-model="selectedOption"
      :options="options"
      filter
      :optionLabel="optionLabel"
      :placeholder="placeholder"
      :showClear="true"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';
import { computed } from 'vue';

const props = defineProps<{
  id: string;
  modelValue: unknown;
  options: unknown[];
  label: string;
  placeholder: string;
  optionLabel: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: unknown): void;
}>();

const selectedOption = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});
</script>
