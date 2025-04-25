<template>
  <Button
    :icon="!isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
    rounded
    outlined
    severity="contrast"
    size="small"
    @click="changeMode"
    v-tooltip.bottom="tooltipText"
  />
</template>

<script setup lang="ts">
import useCommonStore from '@/modules/common/store/commonStore';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import { computed } from 'vue';

const commonStore = useCommonStore();
const { isDarkMode, breakpoints } = storeToRefs(commonStore);

const tooltipText = computed(() => {
  if (!breakpoints.value.lg && !breakpoints.value.xl && !breakpoints.value.xxl) return '';
  return !isDarkMode.value ? 'Modo oscuro' : 'Modo claro';
});

const changeMode = () => {
  commonStore.toggleDarkMode();
};
</script>
