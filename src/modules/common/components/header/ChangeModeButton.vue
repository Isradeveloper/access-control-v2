<template>
  <Button
    :icon="!isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
    rounded
    outlined
    severity="contrast"
    size="small"
    @click="changeMode"
    v-tooltip.bottom="!isDarkMode ? 'Modo oscuro' : 'Modo claro'"
  />
</template>

<script setup lang="ts">
import useCommonStore from '@/modules/common/store/commonStore';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';

const commonStore = useCommonStore();
const { isDarkMode } = storeToRefs(commonStore);

const changeMode = () => {
  commonStore.toggleDarkMode();
};
</script>
