<template>
  <details class="group">
    <summary
      class="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-purple-900 cursor-pointer"
    >
      <component :is="icon" class="h-5 w-5 mr-3" />
      {{ title }}
      <ChevronDownIcon class="h-4 w-4 ml-auto" />
    </summary>
    <div :class="`pl-${level * 4} space-y-1 mt-1`">
      <template v-for="(item, index) in items" :key="index">
        <a
          v-if="item.type === 'link'"
          :href="item.href"
          :class="`block px-2 py-1 text-${item.textSize || 'sm'} text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md`"
        >
          {{ item.label }}
        </a>
        <NestedMenu
          v-else-if="item.type === 'menu'"
          :title="item.label"
          :items="item.children"
          :level="level + 1"
          :icon="item.icon"
        />
      </template>
    </div>
  </details>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface MenuItem {
  type: 'link' | 'menu';
  label: string;
  href?: string;
  children?: MenuItem[];
  icon?: string;
  textSize: string;
}

defineProps<{
  title: string;
  items: Array<MenuItem>;
  level: {
    type: number;
    default: 1;
  };
  icon: {
    type: [object, string];
    default: () => {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      `;
    };
  };
}>();
</script>
