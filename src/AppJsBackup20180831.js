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
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons ? <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.swithNameHandler.bind(this,'Max!')}>My Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;


