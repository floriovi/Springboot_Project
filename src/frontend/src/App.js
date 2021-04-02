import React from 'react';
import { Button } from 'antd';
import './App.css';
import './App.css';

function App() {
  const age = 23;
  let name = "Vincenzo";
  return (
    <div className="App">
        <p>Hello React</p>
        <p>My name is {name} and I am {age} years old!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Button type="primary">Antd Button </Button>
    </div>
  );
}

export default App;
