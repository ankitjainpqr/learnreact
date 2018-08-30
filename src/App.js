import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//Person can be any keyword as per your convenienece

class App extends Component {
  state = {
    persons:[
      { name: "Max", age: 28 },
      { name: "Manu", age: 29},
      { name: "Stephanie", age: 26 }
    ]
  }

  swithNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState ({
      persons:[
        { name: newName, age: 28 },
        { name: "Manuu", age: 29},
        { name: "Stephanie", age: 25 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button onClick={this.swithNameHandler.bind(this,'Maxmilian')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.swithNameHandler.bind(this,'Max!')}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;


