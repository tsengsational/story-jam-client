import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import './App.css';

const baseUrl = "http://localhost:3000/api/v1"

class App extends Component {
  constructor(){
    super()
    this.state = {
      deck: [],
      currentUser: {
        username: "sarah",
        id: 2
      },
      types: []
    }
  }

  componentDidMount() {
    fetch(`${baseUrl}/cards`)
      .then(resp => resp.json())
      .then(json => this.setState({
        deck: json
      }))
      .then(
        fetch(`${baseUrl}/types`)
          .then(resp => resp.json())
          .then(json => this.setState({
            types: json
          })
        )
      )
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.deck)}
        <LoginForm />
        <Jam deck={this.state.deck} types={this.state.types} url={baseUrl}
        currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
