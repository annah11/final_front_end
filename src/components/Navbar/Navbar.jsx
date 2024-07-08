'use client';
import { useState, useEffect } from 'react';
import Links from './Links';
import Logo from './Logo';
import DropSearch from './DropSearch';
import Search from './Search';

function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`border-gray-200 dark:bg-gray-50 transition-all duration-200 ease-in ${
          isFixed ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''
        }`}
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Logo />
          <Search dropDown={dropDown} setDropDown={setDropDown} />

          <div
            className={`transition-all duration-500 ease-in-out items-center justify-between ${
              dropDown ? 'block max-h-screen opacity-100 ' : 'max-h-0 opacity-0'
            } overflow-hidden w-full md:flex md:w-auto md:order-1 min-[800px]:max-h-screen min-[800px]:opacity-100`}
            id='navbar-search'
          >
            <DropSearch />
            <Links />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
