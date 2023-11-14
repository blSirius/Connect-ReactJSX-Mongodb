import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updatedTodo, setUpdatedTodo] = useState('');

  // example

  // useEffect(() => {
  //   fetchTodo()
  // });

  // const fetchTodo = () => {
  //   axios.get('/api/getTodos')
  //     .then((response) => setTodos(response.data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // };

  return (
    <div>
      Hello
    </div>
  );
}
export default App;