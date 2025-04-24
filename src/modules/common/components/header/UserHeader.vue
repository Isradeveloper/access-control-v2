<template>
  <!-- User Profile -->
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div
        class="w-[36px] h-[36px] rounded-full bg-ac-primary-700 flex items-center justify-center text-white text-sm font-medium"
      >
        {{ username.charAt(0).toUpperCase() }}
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-ac-primary-700">{{ name }}</p>
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
