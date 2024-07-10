'use client';
import React, { useEffect, useState } from 'react';

const TreeNode = ({ node }) => {
  const handleEdit = () => {
    // Logic for editing the node
    console.log('Edit:', node.id);
  };

  const handleDelete = () => {
    // Logic for deleting the node
    console.log('Delete:', node.id);
  };

  return (
    <li style={{ position: 'relative', paddingLeft: '1rem', marginBottom: '0.5rem' }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#edf2f7',
        padding: '0.5rem',
        borderRadius: '0.375rem'
      }}>
        {node.position_name} - {node.name}
        <div style={{ marginTop: '0.5rem' }}>
          <button
            style={{
              padding: '0.25rem 0.5rem',
              marginRight: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              backgroundColor: '#4caf50',
              color: 'white'
            }}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            style={{
              padding: '0.25rem 0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              backgroundColor: '#f44336',
              color: 'white'
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <ul style={{ paddingLeft: '1rem', borderLeft: '1px solid #d1d5db' }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const HierarchicalTree = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:8000/api/employee-hierarchic',
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Position Hierarchy</h1>
      <ul style={{ marginTop: '0.5rem' }}>
        {data.map((rootNode) => (
          <TreeNode key={rootNode.id} node={rootNode} />
        ))}
      </ul>
    </div>
  );
};

export default HierarchicalTree;
