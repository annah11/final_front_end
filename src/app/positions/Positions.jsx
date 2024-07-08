'use client';
import { useState, useEffect } from 'react';
import Position from './Position';
import axios from 'axios';

export default function Positions() {
  const [positions, setPositions] = useState([]);

  async function fetchPositions() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/positions');
      setPositions(response.data.results);
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  }
  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <div className='my-3 mx-3 flex flex-wrap justify-center space-x-4'>
      {positions.map((position) => (
        <Position key={position.id} data={position} />
      ))}
    </div>
  );
}
