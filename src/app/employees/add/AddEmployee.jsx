'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AddEmployee() {
  const [parent, setParent] = useState([]);
  const [positions, setPositions] = useState([]);
  const [employee, setEmployee] = useState({
    name: '',
    parent: null,
    position: null,
  });

  async function fetchParent() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/employees');
      setParent(response.data.results);
    } catch (error) {
      console.error('Error fetching parent data:', error);
    }
  }

  async function fetchPositions() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/positions');
      setPositions(response.data.results);
    } catch (error) {
      console.error('Error fetching positions data:', error);
    }
  }

  useEffect(() => {
    fetchPositions();
  }, []);

  useEffect(() => {
    fetchParent();
  }, [employee.position]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/employees/', employee, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        alert('Employee added successfully');
      } else {
        alert('Error adding employee');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Error adding employee');
    }
  };

  return (
    <form
      className='max-w-xl mx-auto my-10 p-5 bg-white border rounded-lg shadow-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-bold mb-6'>Employee Registration Form</h2>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
          Name:
        </label>
        <div className='relative mb-3' data-twe-input-wrapper-init>
          <input
            type='text'
            className='peer block min-h-[auto] w-full rounded-lg border-1 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none'
            id='exampleFormControlInput1'
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <label
            htmlFor='exampleFormControlInput1'
            className={`${
              employee.name ? '-translate-y-[0.9rem] scale-[0.8]' : ''
            } absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
          >
            Employee Name
          </label>
        </div>
        <div>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='position'>
            Position:
          </label>
          <select
            id='position'
            className='bg-gray-100 border border-1 border-gray-300 text-gray-700 text-md rounded-lg block w-full p-2.5'
            value={employee.position}
            onChange={(e) =>
              setEmployee({ ...employee, position: parseInt(e.target.value) })
            }
          >
            <option value={0}>Choose a Position</option>
            {positions &&
              positions.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.name}
                </option>
              ))}
          </select>
        </div>
        <div className='my-3'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='parent'>
            Parent:
          </label>
          <select
            id='parent'
            className='bg-gray-100 border border-1 border-gray-300 text-gray-700 text-md rounded-lg block w-full p-2.5'
            value={employee.parent}
            onChange={(e) =>
              setEmployee({ ...employee, parent: parseInt(e.target.value) })
            }
          >
            <option value={0}>Choose a Position</option>
            {parent &&
              parent.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.name}
                </option>
              ))}
          </select>
        </div>
        <button
          type='submit'
          className='text-white bg-gray-700 hover:scale-105 font-medium rounded-lg text-md px-3 py-2.5 mt-2 text-center active:bg-gray-800'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
