import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import CardsAdapter from './adapters/CardsAdapter'
import TypesAdapter from './adapters/TypesAdapter'
import './App.css';

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
    CardsAdapter.index()
      .then(json => this.setState({
        deck: json
      }))
      .then(
        TypesAdapter.index()
          .then(json => this.setState({
            types: json
          }, ()=>{console.log(this.state.types)})
        )
      )
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.deck)}
        <Navbar />
        <LoginForm />
        <Jam deck={this.state.deck} types={this.state.types}
        currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
