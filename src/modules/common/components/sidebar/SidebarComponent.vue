<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <!-- Navigation -->
      <NavigationMenu />
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-semibold text-gray-900">Contenido Principal</h1>
      <p class="mt-4 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia esse officiis natus
        accusamus ipsum architecto, aliquam, dolor quo est facilis, quidem totam repellendus
        laboriosam optio. Nam illo cumque nulla. Vel?
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationMenu from '../navigation/NavigationMenu.vue';
</script>
