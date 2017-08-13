import React, { Component } from 'react';
import './App.css';

import Child from './components/Child';
import SleepingFamily from './components/SleepingFamily';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SleepingFamily/>
        <Child name="Sheldon"/>
        <Child name="Penny"/>
        <Child name="Haward"/>
      </div>
    );
  }
}

export default App;
