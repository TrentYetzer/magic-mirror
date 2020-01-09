import React from 'react';
import Clock from './Clock';
import Weather from './Weather';
import './main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default App;