import React, { useEffect, useState } from "react";
import '../index.css'

const API = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      // Fetch todos from API
      fetch('https://dummyjson.com/todos')
        .then((response) => response.json())
        .then((data) => setTodos(data.todos))
        .catch((error) => console.error('Error fetching todos:', error));
    }, []);
  
    return (
      <div className="container">
        <h1>Todos List</h1>
        <div className="todos">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-card">
              <h2>Todo ID: {todo.id}</h2>
              <p><strong>Title:</strong> {todo.todo}</p>
              <p className={todo.completed ? 'completed' : 'not-completed'}>
                <strong>Status:</strong> {todo.completed ? 'Completed' : 'Not Completed'}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default API;
