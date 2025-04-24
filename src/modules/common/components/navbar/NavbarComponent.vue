<template>
  <header
    class="w-full border-r border-gray-200 flex h-14 justify-between items-center pl-2 pr-10 border-b-1"
  >
    <div class="flex items-center">
      <div class="w-8 h-8 bg-gray-200 rounded"></div>
      <div class="ml-2 font-bold text-sky-700">
        <div>ACCESS CONTROL</div>
      </div>
    </div>
    <UserNavbar name="Carlos Daniel Visbal Atencia" username="carlos.visbal" />
  </header>
</template>

<script setup lang="ts">
import UserNavbar from './UserNavbar.vue';
</script>
