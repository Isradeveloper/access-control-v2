<template>
  <div>
    <div v-if="item.children" class="group mt-1">
      <button
        @click.stop="toggle"
        type="button"
        :class="[
          baseClass,
          'w-full text-left flex items-center justify-between cursor-pointer',
          { 'text-sky-600 dark:text-sky-100 active-item': hasActiveDescendant },
        ]"
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

    <RouterLink
      @click="commonStore.isSidebarOpen = false"
      v-else
      :to="{ name: item.name }"
      :class="[baseClass, 'block', { 'text-sky-600 dark:text-sky-100 active-item': isActive }]"
    >
      <i v-if="item.icon" :class="[item.icon, 'mr-2']"></i>
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, watch } from 'vue';
import type { MenuItem } from '@/modules/common/interfaces';
import { RouterLink, useRouter } from 'vue-router';
import useCommonStore from '@/modules/common/store/commonStore';

const commonStore = useCommonStore();

const props = defineProps<{ item: MenuItem }>();

const baseClass =
  'text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-sky-900 dark:hover:text-sky-100 rounded-md px-2 py-1 mb-2';

const isOpen = ref(false);
const contentRef = ref<HTMLElement | null>(null);
const style = ref({ maxHeight: '0px' });
const userInteracted = ref(false);

const router = useRouter();

const isActive = computed(() => router.currentRoute.value.name === props.item.name);

const hasDescendantWithName = (item: MenuItem, name: string): boolean => {
  if (item.name === name) return true;
  return item.children?.some((child) => hasDescendantWithName(child, name)) || false;
};

const hasActiveDescendant = computed(() => {
  return hasDescendantWithName(props.item, String(router.currentRoute.value.name) || '');
});

const applyOpenStyle = async () => {
  if (contentRef.value) {
    style.value = { maxHeight: contentRef.value.scrollHeight + 'px' };
    await nextTick();
    setTimeout(() => {
      style.value = { maxHeight: 'none' };
    }, 300);
  }
};

const applyCloseStyle = () => {
  style.value = { maxHeight: '0px' };
};

const toggle = async () => {
  userInteracted.value = true;
  isOpen.value = !isOpen.value;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  isOpen.value ? await applyOpenStyle() : applyCloseStyle();
};

const updateAccordion = async () => {
  if (userInteracted.value) return;

  if (hasActiveDescendant.value) {
    isOpen.value = true;
    await applyOpenStyle();
  } else {
    isOpen.value = false;
    applyCloseStyle();
  }
};

onMounted(updateAccordion);

watch(
  () => router.currentRoute.value.name,
  () => updateAccordion(),
);
</script>

<style scoped>
.text-sm {
  font-size: 0.95rem;
}

.active-item {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    height: 100%;
    background-color: #0086d2;
    border-radius: 5px;
  }
}
</style>
