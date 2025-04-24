<template>
  <div>
    <div v-if="item.children" class="group mt-1">
      <button
        @click="toggle"
        type="button"
        :class="[baseClass, 'w-full text-left flex items-center justify-between cursor-pointer']"
      >
        <span>{{ item.label }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-2 transform transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        ref="contentRef"
        :style="style"
        class="pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <RecursiveItem v-for="(child, index) in item.children" :key="index" :item="child" />
      </div>
    </div>

    <a v-else :href="item.href || '#'" :class="[baseClass, 'block']">
      <i v-if="item.icon" :class="[item.icon, 'mr-2']"></i>
      {{ item.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import type { MenuItem } from '@/modules/common/interfaces';

const props = defineProps<{ item: MenuItem }>();

const baseClass = computed(() =>
  props.item.children
    ? 'text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-sky-900 dark:hover:text-sky-100 rounded-md px-2 py-1'
    : props.item.href
      ? 'text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-sky-900 dark:hover:text-sky-100 rounded-md px-2 py-1'
      : '',
);

const isOpen = ref(false);
const contentRef = ref<HTMLElement | null>(null);
const style = ref({ maxHeight: '0px' });

const toggle = async () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    await nextTick();
    setTimeout(() => {
      if (contentRef.value) {
        style.value = {
          maxHeight: contentRef.value.scrollHeight + 'px',
        };
        // después de animar, quitar el maxHeight para permitir crecimiento dinámico
        setTimeout(() => {
          style.value = { maxHeight: 'none' };
        }, 300); // mismo tiempo que la transición
      }
    }, 50); // pequeño delay para esperar a los hijos
  } else {
    // cerrar: volver a poner maxHeight 0
    style.value = {
      maxHeight: contentRef.value?.scrollHeight + 'px',
    };
    // forzar reflujo antes de cambiar a 0 para animación suave
    requestAnimationFrame(() => {
      style.value = { maxHeight: '0px' };
    });
  }
};
</script>

<style scoped>
.text-sm {
  font-size: 0.95rem;
}
</style>
