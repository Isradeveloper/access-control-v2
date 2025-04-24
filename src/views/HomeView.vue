<template>
  <div class="layout h-screen">
    <HeaderComponent class="header" />
    <SidebarComponent class="nav" />
    <div class="main flex justify-center items-center">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warn" severity="warn" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
    </div>
    <div class="footer flex justify-center items-center border-t border-color">
      Isradeveloper - 2025
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/modules/common/components/header/HeaderComponent.vue';
import SidebarComponent from '@/modules/common/components/sidebar/SidebarComponent.vue';
import Button from 'primevue/button';
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
}
</style>
