import { useSyncExternalStore } from 'react';

const themeStore = {
  subscribe: (callback: () => void) => {
    if (typeof window === 'undefined') return () => {};

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          callback();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  },

  getSnapshot: () => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  },

  getServerSnapshot: () => {
    return 'light';
  },
};

const useTheme = () => {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  return theme;
};

export default useTheme;
