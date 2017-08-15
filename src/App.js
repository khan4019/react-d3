import React, { Component } from 'react';
import './App.css';

import Child from './components/Child';
import SleepingFamily from './components/SleepingFamily';
import BadBar from './components/BadBar';
import WorldBubble from './components/WorldBubble';
import PieChart from './components/PieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieChart data={[5, 2, 7, 1, 1, 3, 4, 9]} width="200" height="200"/>
        <SleepingFamily/>
        <BadBar data={[12,3,4,5,12,6]} height="200"/>
        <WorldBubble/>  
        <Child name="Sheldon"/>
        <Child name="Penny"/>
        <Child name="Haward"/>
      </div>
    );
  }
}

export default App;
