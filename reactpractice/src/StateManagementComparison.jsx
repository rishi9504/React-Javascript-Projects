import React, { useState, useReducer } from 'react';

// Simple Counter Example with useState
function CounterWithUseState() {
  // Basic state management with useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Same Counter Example with useReducer
function CounterWithUseReducer() {
  // Reducer function defines state transitions
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'INCREMENTBYFOUR':
        return { count: state.count + 4 };  
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      case 'SET':
        return { count: action.payload };
      default:
        return state;
    }
  };

  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'INCREMENTBYFOUR' })}>Increment by 4</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>Set to 10</button>
    </div>
  );
}

// Complex State Management Example
function TodoListWithUseReducer() {
  // More complex reducer for todo list
  // This reducer takes a state and an action and returns a new state
  const todoReducer = (state, action) => {
    // Action type can be one of the following
    switch (action.type) {
      // ADD_TODO adds a new todo to the state.todos array
      case 'ADD_TODO':
        // Spread operator (...) is used to create a shallow copy of the state
        // The new todo is added to the end of the state.todos array
        return {
          ...state,
          todos: [
            ...state.todos,
            { 
              // Generate a unique id for the new todo
              id: Date.now(), 
              // Use the payload of the action as the text for the new todo
              text: action.payload, 
              // Completed is initially set to false for new todos
              completed: false 
            }
          ]
        };
      // TOGGLE_TODO toggles the completed status of a todo
      case 'TOGGLE_TODO':
        // Spread operator (...) is used to create a shallow copy of the state
        // The completed status of the todo with the matching id is toggled
        return {
          ...state,
          todos: state.todos.map(todo => 
            todo.id === action.payload 
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      // REMOVE_TODO removes a todo with the given id from the state.todos array
      case 'REMOVE_TODO':
        // Spread operator (...) is used to create a shallow copy of the state
        // The todo with the matching id is removed from the state.todos array
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      // If the action type is not recognized, return the original state
      default:
        return state;
    }
  };

  // Initial state with multiple properties
  // The initial state is an object with two properties: todos and filter
  // The todos property is an array that is initially empty
  // The filter property is a string that is initially set to 'all'
  const initialState = {
    todos: [],
    filter: 'all'
  };

  // useReducer hook
  // The useReducer hook takes a reducer and an initial state as arguments
  // The hook returns an array with two elements: the current state and a dispatch function
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // The dispatch function can be used to dispatch actions to the reducer
  // The reducer will then return a new state based on the action and the current state

  // Local state for the new todo text
  const [newTodoText, setNewTodoText] = React.useState('');
  // The newTodoText state is used to store the text of the new todo
  // The setNewTodoText function can be used to update the newTodoText state

  // Function to add a new todo
  const addTodo = () => {
    // If the new todo text is not empty, dispatch an ADD_TODO action
    if (newTodoText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodoText });
      // Reset the new todo text to an empty string
      setNewTodoText('');
    }
  };

  // JSX
  return (
    <div>
      <h2>Todo List with useReducer</h2>
      {/* Input field for new todo text */}
      <input 
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Enter a new todo"
      />
      {/* Button to add a new todo */}
      <button onClick={addTodo}>Add Todo</button>
      {/* List of todos */}
      <ul>
        {/* Map over the state.todos array and render a list item for each todo */}
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            // If the todo is completed, add a line-through style
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              // Make the list item clickable
              cursor: 'pointer'
            }}
            // When the list item is clicked, dispatch a TOGGLE_TODO action
            onClick={() => dispatch({ 
              type: 'TOGGLE_TODO', 
              payload: todo.id 
            })}
          >
            {/* Show the text of the todo */}
            {todo.text}
            {/* Button to delete the todo */}
            <button 
              // When the button is clicked, dispatch a REMOVE_TODO action
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ 
                  type: 'REMOVE_TODO', 
                  payload: todo.id 
                });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Demonstration Component
function StateManagementComparison() {
  return (
    <div>
      <CounterWithUseState />
       <CounterWithUseReducer />
      <TodoListWithUseReducer /> 
    </div>
  );
}

export default StateManagementComparison;