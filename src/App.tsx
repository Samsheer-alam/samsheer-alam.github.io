import React, { useState } from 'react';
import './App.css';
import { About } from './pages';
import Project from './pages/Project';
import {Header, ParticleEffect, Profile} from './components';
import { useDarkMode } from './utils/DarkModeContext';

function App() {
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(<About />);
  const { isDarkMode } = useDarkMode();

  const handleHeaderClick = (component: any) => {
    if (component === 'About') {
      setCurrentComponent(<About />);
    } else if (component === 'Projects') {
      setCurrentComponent(<Project />);
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} full-screen `}>
      {/* <ParticleEffect /> */}
      <div className='container'>
        <Profile />
        <div className='sub-container'>
          {currentComponent}
        </div>
        <Header onHeaderClick={handleHeaderClick} />
      </div>
    </div>
  );
}

export default App;
