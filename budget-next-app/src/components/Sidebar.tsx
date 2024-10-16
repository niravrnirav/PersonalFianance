"use client";

import { FiHome, FiDollarSign, FiBriefcase, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-50 dark:bg-gray-900 p-5 shadow-lg">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600">Budget App</h2>
      </div>

      {/* Navigation Items */}
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
            <FiHome size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/transactions" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
            <FiDollarSign size={20} />
            <span>Transactions</span>
          </Link>
        </li>
        <li>
          <Link href="/accounts" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
            <FiBriefcase size={20} />
            <span>Accounts</span>
          </Link>
        </li>
      </ul>

      {/* Settings Section */}
      <div className="mt-12">
        <ul>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-md">
              <FiSettings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
