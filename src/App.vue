<template>
  <div class="layout h-screen">
    <HeaderComponent class="header" :isSidebarVisible="isSidebarVisible" />
    <SidebarComponent class="nav" v-if="isSidebarVisible" />
    <MobileSidebarComponent class="nav" v-else />
    <div class="main overflow-auto">
      <RouterView />
    </div>
    <div class="footer flex justify-center items-center border-t border-color">
      Isradeveloper - 2025
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/modules/common/components/header/HeaderComponent.vue';
import SidebarComponent from '@/modules/common/components/sidebar/SidebarComponent.vue';
import MobileSidebarComponent from '@/modules/common/components/sidebar/MobileSidebarComponent.vue';
import useCommonStore from '@/modules/common/store/commonStore';
import { onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { RouterView } from 'vue-router';

const commonStore = useCommonStore();
const { breakpoints } = storeToRefs(commonStore);

const isSidebarVisible = computed(
  () => breakpoints.value.lg || breakpoints.value.xl || breakpoints.value.xxl,
);

onMounted(() => {
  commonStore.initResize();
});

onUnmounted(() => {
  commonStore.destroyResize();
});
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 64px 1fr 1fr 40px;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'header header header'
    'nav main main'
    'nav main main'
    'footer footer footer';
  height: 100vh;
  overflow: hidden;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.nav {
  grid-area: nav;
}

.main {
  grid-area: main;
  overflow-y: auto;
  height: 100%;
}

@media (max-width: 1024px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 64px 1fr 40px;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      'header header header'
      'main main main'
      'footer footer footer';
    height: 100vh;
    overflow: hidden;
  }
}
</style>
