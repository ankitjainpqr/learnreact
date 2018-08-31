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

    let persons = null;
    if(this.state.showPersons){
      persons= (
        <div>
          {
            this.state.persons.map(person =>{
              return <Person name={person.age} age={person.age}/>
            })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        
      </div>
    );
  }
}

export default App;


