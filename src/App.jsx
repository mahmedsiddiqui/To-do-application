

import React, { useState } from 'react';
import './index.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) => 
        index === editIndex ? inputValue : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <div className="bar">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        className="todo-input" 
        
      />
       <button onClick={handleAddTodo}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      </div>
     
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
