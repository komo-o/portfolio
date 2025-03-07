// テーマによって画像を切り替えるコンポーネント
import { useSyncExternalStore } from 'react';

interface Props {
  lightThemeImageSrc: string;
  darkThemeImageSrc: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
}

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

export function ThemedImage({
  lightThemeImageSrc,
  darkThemeImageSrc,
  alt,
  width,
  height,
  className,
}: Props) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  const isDarkMode = theme === 'dark';

  return (
    <img
      src={isDarkMode ? darkThemeImageSrc : lightThemeImageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
