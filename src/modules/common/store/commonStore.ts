import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Breakpoints } from '../interfaces';

const useCommonStore = defineStore('common', () => {
  const isDarkMode = ref(false);
  const breakpoints = ref<Breakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });
  const isSidebarOpen = ref(false);

  const updateBreakpoints = () => {
    const width = window.innerWidth;
    breakpoints.value = {
      xs: width < 640,
      sm: width >= 640 && width < 768,
      md: width >= 768 && width < 1024,
      lg: width >= 1024 && width < 1280,
      xl: width >= 1280 && width < 1536,
      xxl: width >= 1536,
    };
  };

  const initResize = () => {
    updateBreakpoints();
    window.addEventListener('resize', updateBreakpoints);
  };

  const destroyResize = () => {
    window.removeEventListener('resize', updateBreakpoints);
  };

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  return {
    isDarkMode,
    breakpoints,
    isSidebarOpen,
    toggleDarkMode,
    toggleSidebar,
    initResize,
    destroyResize,
  };
});

export default useCommonStore;
