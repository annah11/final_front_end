'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const TreeNode = ({ node, expanded, toggleExpand, onEdit, onDelete }) => {
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
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#666666'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#808080'}
            onClick={() => onEdit(node)}
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
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
            onClick={() => onDelete(node.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {expanded && node.children && node.children.length > 0 && (
        <ul style={{ paddingLeft: '1rem', borderLeft: '1px solid #d1d5db' }}>
          {node.children.map((child) => (
            <TreeNodeContainer key={child.id} node={child} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeNodeContainer = ({ node, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return <TreeNode node={node} expanded={expanded} toggleExpand={toggleExpand} onEdit={onEdit} onDelete={onDelete} />;
};

const HierarchicalTree = () => {
  const [data, setData] = useState([]);
  const [editingNode, setEditingNode] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', position_name: '' });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employee-hierarchic');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (node) => {
    setEditingNode(node);
    setEditForm({ name: node.name, position_name: node.position_name });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/employees/${id}`, editForm);
      const updatedNode = response.data;
      setData((prevData) =>
        prevData.map((node) => (node.id === updatedNode.id ? updatedNode : node))
      );
      setEditingNode(null);
      alert('Employee information updated successfully!');
    } catch (error) {
      alert('Failed to update employee information.');
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`);
        setData((prevData) => prevData.filter((node) => node.id !== id));
        alert('Employee deleted successfully!');
      } catch (error) {
        alert('Failed to delete employee.');
        console.error('Error deleting data:', error.response || error.message);
      }
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Position Hierarchy</h1>
      <ul style={{ marginTop: '0.5rem' }}>
        {data.map((rootNode) => (
          <TreeNodeContainer key={rootNode.id} node={rootNode} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </ul>

      {editingNode && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Edit Employee</h2>
          <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                style={{ padding: '0.5rem', marginBottom: '1rem' }}
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position_name"
                value={editForm.position_name}
                onChange={handleEditChange}
                style={{ padding: '0.5rem', marginBottom: '1rem' }}
              />
            </label>
            <button type="submit" style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              backgroundColor: 'gray',
              color: 'white'
            }}>
              update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HierarchicalTree;
