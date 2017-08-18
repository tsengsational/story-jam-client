import React, { Component } from 'react';
import CardData from './components/CardData'
import Jam from './components/Jam'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    this.setState({
      cards: CardData
    })
  }

  render() {
    return (
      <div className="App">
        <Jam cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
