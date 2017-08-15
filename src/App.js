import React, { Component } from 'react';
import './App.css';

import Child from './components/Child';
import SleepingFamily from './components/SleepingFamily';
import BadBar from './components/BadBar';
import WorldBubble from './components/WorldBubble';
import Pie from './components/Pie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pie data={[5, 2, 7, 1, 1, 3, 4, 9]} width="200" height="200"/>
        <SleepingFamily/>
        <BadBar data={[5,10,1,3]} size={[250,250]}/>
        <WorldBubble/>  
        <Child name="Sheldon"/>
        <Child name="Penny"/>
        <Child name="Haward"/>
      </div>
    );
  }
}

export default App;
