"use client";

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow p-4 bg-[#E5E7EB] dark:bg-gray-800">
        <div className="flex justify-end">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">Welcome to your Budget App!</h1>
        </div>
      </div>
    </div>
  );
}
