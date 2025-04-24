import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCommonStore = defineStore('common', () => {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark');
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
});

export default useCommonStore;
