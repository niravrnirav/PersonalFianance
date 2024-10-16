import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <span onClick={toggleDarkMode} className="cursor-pointer">
      {isDarkMode ? (
        <MoonIcon className="h-6 w-6 text-white-500" aria-label="Dark Mode" />
      ) : (
        <SunIcon className="h-6 w-6 text-black-500" aria-label="Light Mode" />
      )}
    </span>
  );
};

export default DarkModeToggle;