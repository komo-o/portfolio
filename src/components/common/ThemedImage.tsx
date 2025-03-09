// テーマによって画像を切り替えるコンポーネント
import useTheme from '@/hooks/useTheme';

interface Props {
  lightThemeImageSrc: string;
  darkThemeImageSrc: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
}

function ThemedImage({
  lightThemeImageSrc,
  darkThemeImageSrc,
  alt,
  width,
  height,
  className,
}: Props) {
  const theme = useTheme();

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

export default ThemedImage;
