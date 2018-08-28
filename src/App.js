import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//Person can be any keyword as per your convenienece

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <Person name="Ankit" age="28"/>
        <Person name="Anil" age="50">My Hobbies: Racing</Person>
        <Person name="Vikas" age="30"/>
      </div>
    );
  }
}

export default App;


