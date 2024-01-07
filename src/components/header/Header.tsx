import './Header.css';
import { useDarkMode } from '../../utils/DarkModeContext';
import { UserIcon, MoonIcon, SunIcon, BriefcaseIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

const Header: React.FC<any> = ({ onHeaderClick }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const handleClick = (component: string) => {
    if (onHeaderClick) {
      onHeaderClick(component);
    }
  };
  return (
    <div className='header-container'>
    <div className={`header-sub-container ${isDarkMode ? 'dark-container' : 'light-container'}`} onClick={toggleDarkMode}>
      <div className='header-top-nav'>
        {isDarkMode ? (
          <SunIcon className="header-top-icon" /> // Show the sun icon for light mode
        ) : (
          <MoonIcon className="header-top-icon" /> // Show the moon icon for dark mode
        )}
      </div>
    </div>

    <div className={`header-sub-container ${isDarkMode ? 'dark-container' : 'light-container'}`}>
      <div className={`header-nav ${isDarkMode ? 'dark-divider' : 'light-divider'}`} onClick={() => handleClick('About')}>
        <UserIcon className="header-nav-icon" />
        <p>About</p>
      </div>
      <div className={`header-nav ${isDarkMode ? 'dark-divider' : 'light-divider'}`}  onClick={() => handleClick('Projects')}>
        <BriefcaseIcon className="header-nav-icon" />
        <p>Projects</p>
      </div>
      <div className={`header-nav ${isDarkMode ? 'dark-divider' : 'light-divider'}`}  onClick={() => handleClick('Resume')}>
        <DocumentTextIcon className="header-nav-icon" />
        <p>Resume</p>
      </div>
      <div className={`header-nav ${isDarkMode ? 'dark-divider' : 'light-divider'} no-border`}  onClick={() => handleClick('Contact')}>
        <EnvelopeIcon className="header-nav-icon" />
        <p>Contact</p>
      </div>
    </div>
  </div>
  );
};

export default Header;