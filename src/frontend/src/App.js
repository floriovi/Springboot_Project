import React from 'react';
import {Button, Radio} from 'antd';
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
            <br/>

            <Radio.Group value='large'>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
        </div>
    );
}

export default App;
