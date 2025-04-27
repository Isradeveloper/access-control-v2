<template>
  <NestedMenu :items="menu" label="MENÚ" />
</template>

<script setup lang="ts">
import NestedMenu from './NestedMenu.vue';
import { menu } from './navigationList';
</script>
