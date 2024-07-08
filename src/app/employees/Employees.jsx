'use client';
import axios from 'axios';
import Employee from './Employee';
import { useEffect, useState } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  async function fetchEmployees() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/employees');
      setEmployees(response.data.results);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <ul
      role='list'
      className='shadow-lg py-5 rounded-md bg-gray-100 space-y-2 flex flex-wrap space-x-4 items-center justify-center'
    >
      {employees &&
        employees.map((employee) => (
          <Employee key={employee.id} value={employee.id} data={employee} />
        ))}
    </ul>
  );
}
