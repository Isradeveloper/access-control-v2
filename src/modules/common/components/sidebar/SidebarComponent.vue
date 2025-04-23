<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gray-200 rounded"></div>
          <div class="ml-2 font-bold text-purple-900">
            <div>ACCESS CONTROL</div>
          </div>
        </div>
        <button class="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <NavigationMenu />

      <!-- User Profile -->
      <div class="border-t border-gray-200 p-4 flex items-center">
        <div class="flex-shrink-0">
          <div
            class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-medium"
          >
            UA
          </div>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-700">Usuario Administrador</p>
          <p class="text-xs text-gray-500">Administrador</p>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-semibold text-gray-900">Contenido Principal</h1>
      <p class="mt-4 text-gray-600">
        Este ejemplo muestra un sidebar con múltiples niveles de anidación usando elementos details
        y summary.
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationMenu from '../navigation/NavigationMenu.vue';
</script>
