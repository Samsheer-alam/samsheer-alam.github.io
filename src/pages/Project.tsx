import { useDarkMode } from '../utils/DarkModeContext';
function Project() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      This is project page
    </div>
  );
}

export default Project;
