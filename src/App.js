import React, { Component } from 'react';
import Jam from './components/Jam'
import './App.css';

const baseUrl = "http://localhost:3000/api/v1"

class App extends Component {
  constructor(){
    super()
    this.state = {
      deck: []
    }
  }

  componentDidMount() {
    fetch(`${baseUrl}/cards`)
      .then(resp => resp.json())
      .then(json => this.setState({
        deck: json
      }))
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.deck)}
        <Jam deck={this.state.deck} url={baseUrl} />
      </div>
    );
  }
}

export default App;
