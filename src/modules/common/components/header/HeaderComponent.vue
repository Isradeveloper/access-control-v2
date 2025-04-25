<template>
  <header
    class="w-full border-r border-color flex h-full justify-between items-center px-5 border-b-1"
  >
    <div class="flex items-center">
      <div class="w-[4rem] h-10 rounded">
        <img
          src="../../../../assets/images/logo.webp"
          class="w-full h-full object-contain rounded"
          alt="logo"
        />
      </div>
      <div
        :class="[
          'ml-2 font-bold',
          { 'text-gray-600 dark:text-white': isDarkMode, 'text-ac-primary-600': !isDarkMode },
        ]"
      >
        <div class="md:text-lg text-sm">ACCESS CONTROL</div>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <ChangeModeButton />
      <UserHeader name="Carlos Daniel Visbal Atencia" username="carlos.visbal" v-if="isSidebarVisible"/>
      <div class="border-l border-color h-8">
        <Button v-if="isSidebarVisible"
          :icon="'pi pi-power-off'"
          rounded
          outlined
          severity="danger"
          size="small"
          class="ml-3"
          v-tooltip.bottom="'Cerrar sesión'"
        />
        <Button v-else
          :icon="'pi pi-bars'"
          rounded
          outlined
          severity="contrast"
          size="small"
          class="ml-3"
          @click="commonStore.toggleSidebar()"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import UserHeader from './UserHeader.vue';
import ChangeModeButton from './ChangeModeButton.vue';
import { ref } from 'vue';
import { Button } from 'primevue';
import useCommonStore from '../../store/commonStore';

defineProps<{
  isSidebarVisible: boolean;
}>();

const commonStore = useCommonStore();

const isDarkMode = ref(document.documentElement.classList.contains('dark-mode'));
</script>
