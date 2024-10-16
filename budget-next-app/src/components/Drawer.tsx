import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleDrawer} className="p-4">Close</button>
      <div className="p-4">
        {/* Drawer content goes here */}
        <p>Drawer Content</p>
      </div>
    </div>
  );
};

export default Drawer;