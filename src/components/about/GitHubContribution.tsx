import GitHubCalendar from 'react-github-calendar';
import useTheme from '@/hooks/useTheme';

function GitHubContribution() {
  const theme = useTheme();
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
        fontSize={16}
        blockSize={12.38}
        style={{ width: '10px' }}
      />
    </div>
  );
}

export default GitHubContribution;
