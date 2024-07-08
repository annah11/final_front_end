import { useState } from 'react';
export default function Search({ dropDown, setDropDown }) {
  const [search, setSearch] = useState('');

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className='flex md:order-2'>
      <button
        type='button'
        aria-controls='navbar-search'
        aria-expanded={dropDown}
        className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-200 outline-none active:bg-gray-300 rounded-lg text-sm p-2.5 me-1'
        onClick={toggleDropDown}
      >
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
        <span className='sr-only'>Search</span>
      </button>
      {/* search when hidden */}
      <div className='relative hidden md:block'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
          <span className='sr-only'>Search icon</span>
        </div>
        <input
          type='text'
          id='search-navbar'
          className='block w-10/12 p-2 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-400'
          placeholder='Search...a'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* end search when hidden */}
      <button
        data-collapse-toggle='navbar-search'
        type='button'
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none   dark:text-gray-400 active:bg-gray-300'
        aria-controls='navbar-search'
        aria-expanded={dropDown}
        onClick={toggleDropDown}
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
    </div>
  );
}
