'use client';

import React, { useEffect, useState } from 'react';

// Icon component for expand/collapse
const IconChevronDown = ({ expanded, onClick }) => (
  <span
    style={{
      display: 'inline-block',
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    ▼
  </span>
);

const TreeNode = ({ node, expanded, toggleExpand }) => {
  const handleEdit = () => {
    console.log('Edit:', node.id);
  };

  const handleDelete = () => {
    console.log('Delete:', node.id);
  };

  return (
    <li style={{ position: 'relative', paddingLeft: '1rem', marginBottom: '0.5rem' }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#edf2f7',
        padding: '0.5rem',
        borderRadius: '0.375rem',
      }}>
        {node.children && node.children.length > 0 && (
          <IconChevronDown expanded={expanded} onClick={toggleExpand} />
        )}
        <span style={{ marginLeft: node.children && node.children.length > 0 ? '0.5rem' : '0' }}>
          {node.position_name} - {node.name}
        </span>
        <div style={{ marginLeft: 'auto', display: 'inline-block' }}>
          <button
            style={{
              padding: '0.25rem 0.5rem',
              marginRight: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              backgroundColor: '#808080',
              color: 'white',
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
              color: 'white',
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {expanded && node.children && node.children.length > 0 && (
        <ul style={{ paddingLeft: '1rem', borderLeft: '1px solid #d1d5db' }}>
          {node.children.map((child) => (
            <TreeNodeContainer key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeNodeContainer = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return <TreeNode node={node} expanded={expanded} toggleExpand={toggleExpand} />;
};

const HierarchicalTree = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/api/employee-hierarchic');
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
          <TreeNodeContainer key={rootNode.id} node={rootNode} />
        ))}
      </ul>
    </div>
  );
};

export default HierarchicalTree;
