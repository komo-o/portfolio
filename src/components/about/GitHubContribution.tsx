import { useSyncExternalStore } from 'react';
import GitHubCalendar from 'react-github-calendar';

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

function GitHubContribution() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );
  const isDarkMode = theme === 'dark';

  const explicitTheme = {
    light: ['#f8e9d8', '#f2d4b4', '#ebbe8f', '#e5a96e', '#e09952'],
    dark: ['#fff', '#0c7bbd', '#2798d6', '#42b6f0', '#77cbf7'],
  };

  return (
    <div className="w-full">
      <GitHubCalendar
        username="komo-o"
        theme={explicitTheme}
        colorScheme={isDarkMode ? 'dark' : 'light'}
        fontSize={14}
        blockSize={12.38}
        style={{ width: '10px' }}
      />
    </div>
  );
}

export default GitHubContribution;
