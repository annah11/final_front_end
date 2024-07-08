'use client';
import { useEffect, useState } from 'react';

import getPositions from '@/api/getPositions';

export default function AddPosition() {
  const [positions, setPositions] = useState([]);

  const getData = async () => {
    try {
      const data = await getPositions();
      console.log(data, 'data');
      setPositions(data.results);
    } catch (error) {
      console.log(error, 'err');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const positions = await getData();
  console.log(positions, 'pos');
  return (
    <div>
      <form className='lg:w-[23rem] md:w-[20rem] sm:w-[26rem] mt-5 mx-auto p-4 border rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6'>Position Form</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='parent'
          >
            Parent:
          </label>
          <select
            name='parent'
            id='parent'
            className='w-full font-semibold text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
          >
            {positions.map((position) => (
              <option key={position.id} value={position.name}>
                {position.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
            Name:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='feedback'
          >
            Description:
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='feedback'
            rows='5'
            placeholder='Enter description'
          ></textarea>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

