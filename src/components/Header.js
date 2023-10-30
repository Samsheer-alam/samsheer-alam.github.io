import React from 'react'
import { UserIcon, MoonIcon, SunIcon, BriefcaseIcon, DocumentTextIcon, EnvelopeIcon  } from '@heroicons/react/20/solid';

function Header(props) {
  const isDarkMode = true;
  return (
    
<div className='h-full flex flex-col items-end justify-center w-28'>

      <div className='bg-gray-800 p-1 py-5 w-24 text-white divide-y divide-gray-400 rounded-md mb-10'>
        <div className='flex items-center flex-col'>
          {isDarkMode ? (
            <SunIcon className="h-8 w-8" /> // Show the sun icon for light mode
          ) : (
            <MoonIcon className="h-6 w-6" /> // Show the moon icon for dark mode
          )}
        </div>
      </div>

      <div className='bg-gray-800 p-1 w-24 text-white divide-y divide-gray-400 rounded-md'>
        <div className="bg-gray-700 flex items-center justify-center flex-col text-white py-3 pt-5">
          <UserIcon className="h-5 w-5" />
          <p>About</p>
        </div>
        <div className="bg-gray-700 flex items-center justify-center flex-col text-white py-3">
          <BriefcaseIcon className="h-5 w-5" />
          <p>Projects</p>
        </div>
        <div className="bg-gray-700 flex items-center justify-center flex-col text-white py-3">
          <DocumentTextIcon className="h-5 w-5" />
          <p>Resume</p>
        </div>
        <div className="bg-gray-700 flex items-center justify-center flex-col text-white py-3 pb-5">
          <EnvelopeIcon  className="h-5 w-5" />
          <p>Contact</p>
        </div>
      </div>

    </div>
  )
}

export default Header
