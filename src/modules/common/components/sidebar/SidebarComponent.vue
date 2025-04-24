<template>
  <div class="flex h-full">
    <!-- Sidebar -->
    <aside class="w-full bg-body border-r flex flex-col h-full">
      <!-- Navigation -->
      <NavigationMenu />
    </aside>
  </div>
</template>

<script setup lang="ts">
import NavigationMenu from '../navigation/NavigationMenu.vue';
</script>
