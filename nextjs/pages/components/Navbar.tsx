import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // add logic to toggle dark mode styles here
  };

  return (
    <div>

    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                className={`${
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                } text-white font-medium px-4 py-2 rounded-md`}
                onClick={toggleDarkMode}
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;