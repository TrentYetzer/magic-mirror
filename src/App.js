import React from 'react';
import Clock from './Clock';
import Weather from './Weather';
import ToDoList from './ToDoList';
import './main.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <ToDoList />
      </div>
    );
  }
}

export default App;
