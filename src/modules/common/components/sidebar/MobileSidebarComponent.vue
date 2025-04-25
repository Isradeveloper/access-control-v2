<template>
  <Drawer v-model:visible="isSidebarOpen" :showCloseIcon="false">
    <template #header>
      <UserHeader
        name="Carlos Daniel Visbal Atencia"
        username="carlos.visbal"
        class="border-b border-color pb-4 w-full"
      />
    </template>
    <NavigationMenu />
    <template #footer>
      <div class="flex items-center gap-2 border-t border-color pt-4">
        <Button
          :class="['w-full']"
          :icon="'pi pi-power-off'"
          rounded
          outlined
          severity="danger"
          size="small"
          class="ml-3"
          label="Cerrar sesión"
          v-tooltip.bottom="'Cerrar sesión'"
        />
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import NavigationMenu from '../navigation/NavigationMenu.vue';
import { Drawer } from 'primevue';
import { Button } from 'primevue';
import useCommonStore from '@/modules/common/store/commonStore';
import { storeToRefs } from 'pinia';
import UserHeader from '../header/UserHeader.vue';

const commonStore = useCommonStore();
const { isSidebarOpen } = storeToRefs(commonStore);
</script>
