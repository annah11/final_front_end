import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function Employee({ data }) {
  const [warning, setWarning] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios(`http://127.0.0.1:8000/api/employees/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        alert('Failed to delete employee');
        return;
      }
      setWarning(false);
      alert('Employee Deleted Successfully');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <div className='max-w-xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
        <Link href={`/employees/${data.id}`}>
          <div className='rounded-t-lg h-32 overflow-hidden'>
            <img
              className='object-cover object-top w-full'
              src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
              alt='Mountain'
            />
          </div>
          <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
            <img
              className='object-cover object-center h-32'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt='Woman looking front'
            />
          </div>
          <div className='text-center mt-2'>
            <h2 className='font-semibold text-lg'>{data.name}</h2>
            <p className='text-gray-500'>{data.position_name}</p>
          </div>
        </Link>
        <div className='p-4 border-t mx-8 mt-2 flex'>
          <button className='block w-1/3 mx-auto rounded-lg bg-gray-700 hover:shadow-lg font-semibold text-white px-6 py-2 hover:bg-gray-800 hover:scale-105 transition-all duration-300'>
            <Link href={`/employees/edit/${data.id}`}>Edit</Link>
          </button>
          <button
            className='w-1/3 block mx-auto rounded-lg bg-red-600 hover:shadow-lg font-semibold text-gray-50 px-6 py-2 hover:scale-105 hover:bg-red-700 transition-all duration-300'
            onClick={() => setWarning(true)}
          >
            Delete
          </button>
        </div>
        {warning && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md'
            onClick={() => setWarning(false)}
          >
            <div
              className='w-full max-w-sm bg-gray-100 rounded-lg shadow-lg p-5'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex flex-col items-center'>
                <img
                  className='w-24 h-24 mb-3 rounded-full shadow-lg'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt='Bonnie image'
                />
                <h5 className='mb-1 text-xl font-semibold text-gray-800'>
                  {data.name}
                </h5>
                <span className='text-sm text-gray-600'>
                  {data.position_name}
                </span>
                <div
                  className='flex items-center p-4 my-2 text-md text-red-600 rounded-lg bg-gray-200'
                  role='alert'
                >
                  <svg
                    className='flex-shrink-0 inline w-4 h-4 me-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                  </svg>
                  <div>
                    <span className='font-bold'>Are You Sure! </span>
                    DELETING {data.name}.
                  </div>
                </div>
                <div className='flex my-2'>
                  <p
                    className='inline-flex items-center px-4 py-2 text-md font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:scale-105'
                    onClick={() => setWarning(false)}
                  >
                    No
                  </p>
                  <p
                    className='py-2 px-4 ms-2 text-md font-semibold text-gray-50 rounded-lg hover:scale-105 bg-red-600 hover:bg-red-700'
                    onClick={() => handleDelete(data.id)}
                  >
                    Yes
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
