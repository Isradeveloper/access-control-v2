<template>
  <!-- User Profile -->
  <div class="border-t border-gray-200 p-4 flex items-center">
    <div class="flex-shrink-0">
      <div
        class="w-8 h-8 rounded-full bg-sky-800 flex items-center justify-center text-white text-sm font-medium"
      >
        {{ username.charAt(0).toUpperCase() }}
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-sky-700">{{ name }}</p>
      <p class="text-xs text-gray-500">{{ username }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  username: string;
}>();
</script>
