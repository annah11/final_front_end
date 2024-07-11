'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddPosition() {
  const [parent, setParent] = useState([]);
  const initialValues = {
    name: '',
    parent: 0, // Default value for select
  };

  async function fetchParent() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/positions');
      setParent(response.data.results);
    } catch (error) {
      console.error('Error fetching parent data:', error);
    }
  }

  useEffect(() => {
    fetchParent();
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      parent: Yup.number().min(1, 'Please select a parent').required('Parent is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/positions/', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 201) {
          alert('Position added successfully');
          formik.resetForm();
        } else {
          alert('Error adding position');
        }
      } catch (error) {
        console.error('Error adding position:', error);
        alert('Error adding position');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form
      className='max-w-xl mx-auto my-10 p-5 bg-white border rounded-lg shadow-lg'
      onSubmit={formik.handleSubmit}
    >
      <h2 className='text-2xl font-bold mb-6'>Position Registration Form</h2>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
          Name:
        </label>
        <div className='relative mb-3' data-twe-input-wrapper-init>
          <input
            type='text'
            className={`peer block min-h-[auto] w-full rounded-lg border-1 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : ''
            }`}
            id='exampleFormControlInput1'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor='exampleFormControlInput1'
            className={`${
              formik.values.name ? '-translate-y-[0.9rem] scale-[0.8]' : ''
            } absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
          >
            Position Name
          </label>
          {formik.touched.name && formik.errors.name ? (
            <div className='text-red-500 text-sm'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='my-3'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='parent'>
            Parent:
          </label>
          <select
            id='countries'
            name='parent'
            className={`bg-gray-100 border border-1 border-gray-300 text-gray-700 text-md rounded-lg block w-full p-2.5 ${
              formik.touched.parent && formik.errors.parent ? 'border-red-500' : ''
            }`}
            value={formik.values.parent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={0}>Choose a Parent</option>
            {parent &&
              parent.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {pos.name}
                </option>
              ))}
          </select>
          {formik.touched.parent && formik.errors.parent ? (
            <div className='text-red-500 text-sm'>{formik.errors.parent}</div>
          ) : null}
        </div>
        <button
          type='submit'
          className='text-white bg-gray-700 hover:scale-105 font-medium rounded-lg text-md px-3 py-2.5 mt-2 text-center active:bg-gray-800'
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
