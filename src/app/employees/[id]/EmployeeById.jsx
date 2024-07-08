'use client';

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EmployeeById({ id }) {
  const [employee, setEmployee] = useState({});

  async function fetchEmployee() {
    const response = await axios(`http://127.0.0.1:8000/api/employees/${id}`);
    if (!response.ok) console.log('error');
    else {
      const data = await response.json();
      setEmployee(data);
    }
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div>
      <div className='px-2 py-20 w-full flex justify-center'>
        <div className='bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg'>
          <div className='lg:w-1/2'>
            <div
              className='lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg'
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')`,
              }}
            ></div>
          </div>
          <div className='py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg'>
            <h2 className='text-3xl text-gray-800 font-bold'>
              {employee.name}
            </h2>
            <h3 className='font-semibold text-md'>{employee.position_name}</h3>
            <p className='mt-4 text-gray-600'>
              The Eco-Tracker project aims to create a web-based platform that
              encourages individuals to adopt sustainable lifestyle choices and
              actively contribute to environmental conservation. The platform
              will provide users with personalized tracking, education, and
              engagement features to empower them to make eco-friendly decisions
              in various aspects of their lives.
            </p>
            <div className='space-x-2'>
              <div className='mt-8 inline-block'>
                <Link
                  href='#'
                  className='bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded'
                >
                  Edit
                </Link>
              </div>
              <div className='mt-8 inline-block'>
                <Link
                  href='#'
                  className='bg-red-600 text-gray-100 px-5 py-3 font-semibold rounded'
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
