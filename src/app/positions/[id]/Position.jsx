'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Position({ id }) {
  const [position, setPosition] = useState({});

  async function fetchPosition() {
    const response = await axios(`http://127.0.0.1:8000/api/positions/${id}`);
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    const data = await response.json();
    setPosition(data);
  }

  useEffect(() => {
    fetchPosition();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center bg-gray-150 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  mt-4 mb-10 mx-auto'>
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src='https://picsum.photos/id/1/200/300'
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            {position && position.name}
          </h5>
          <p className='mb-3 text-gray-500'>
            Parent: {position && position.parent_name}
          </p>
          <p className='mb-3 font-normal text-gray-600'>
            Here are the biggest enterprise technology acquisitions of 2024 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </>
  );
}
