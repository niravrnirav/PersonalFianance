"use client"

import React, { useState } from 'react';
import DarkModeToggle from "@/components/DarkModeToggle";
import Drawer from "@/components/Drawer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Keep the drawer always open

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between p-4">
        <div></div> {/* Empty div to push the toggle to the right */}
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="flex">
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-4xl font-bold">Welcome to your Budget App!</h1>
        </div>
      </div>
    </div>
  );
}