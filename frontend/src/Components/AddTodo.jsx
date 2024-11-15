import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending'); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4002/home/add', {
        description,
        status,
      });

      console.log('Todo added successfully:', response.data);
      setDescription('');
      setStatus('pending');
      window. location. reload()
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className='add-todo-form'>
    <form onSubmit={handleSubmit}>
        <h3>Add Task Here!!</h3>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
    </div>

  );
};

export default AddTodo;