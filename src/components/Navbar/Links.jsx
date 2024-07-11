'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Links() {
  const [dropRegister, setDropRegister] = useState(false);
  const [dropList, setDropList] = useState(false);

  return (
    <ul className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700'>
      <li>
        <Link
          href='/'
          className='block py-2 px-3 text-gray-800 hover:scale-105 rounded md:bg-transparent md:p-0 font-semibold text-lg transition-all duration-300'
          aria-current='page'
        >
          Home
        </Link>
      </li>
      <li onMouseLeave={() => setDropList(false)}>
        <button
          id='dropdownNavbarLink'
          data-dropdown-toggle='dropdownNavbar'
          className='flex font-semibold items-center justify-between w-full py-2 px-3 text-gray-800 rounded  md:p-0 md:w-auto text-lg hover:scale-105  transition-all duration-300'
          onClick={() => setDropList((pre) => !pre)}
        >
          List{' '}
          <svg
            className='w-2.5 h-2.5 ms-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='dropdownNavbar'
          className={`z-20 ${
            dropList ? '' : 'hidden'
          } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
          <div className='divide-y-2 w-full bg-gray-100 text-lg text-gray-800 font-medium'>
            <div className='p-2 hover:scale-105 transition-all duration-300'>
              <Link href='/employees'>Employees</Link>
            </div>
            <div className='p-2 hover:scale-105 transition-all duration-300'>
              <Link href='/positions'>Position</Link>
            </div>
            <div className='p-2 hover:scale-105 transition-all duration-300'>
              <Link href='/hierarchical'>Hierarchical</Link>
            </div>
          </div>
        </div>
      </li>
      <li onMouseLeave={() => setDropRegister(false)}>
        <button
          id='dropdownNavbarLink'
          data-dropdown-toggle='dropdownNavbar'
          className='flex font-semibold items-center justify-between w-full py-2 px-3 text-gray-800 rounded  md:p-0 md:w-auto text-lg hover:scale-105  transition-all duration-300'
          onClick={() => setDropRegister((pre) => !pre)}
        >
          Register{' '}
          <svg
            className='w-2.5 h-2.5 ms-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='dropdownNavbar'
          className={`z-20 ${
            dropRegister ? '' : 'hidden'
          } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
        >
          <div className='divide-y-2 w-full bg-gray-100 text-lg text-gray-800 font-medium'>
            <div className='p-2 hover:scale-105 transition-all duration-300'>
              <Link href='/employees/add'>Add Employees</Link>
            </div>
            <div className='p-2 hover:scale-105 transition-all duration-300'>
              <Link href='/positions/add'>Add Position</Link>
            </div>
  
          </div>
        </div>
      </li>
      <li>
        <Link
          href='/about'
          className='block py-2 px-3 text-gray-800  hover:scale-105 rounded md:bg-transparent md:p-0 font-semibold text-lg transition-all duration-300'
          aria-current='page'
        >
          About
        </Link>
      </li>
    </ul>
  );
}
