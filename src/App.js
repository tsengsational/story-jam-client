import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import JamForm from './components/JamForm'
import JamsAdapter from './adapters/JamsAdapter'
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
      types: [],
      spread: {
        title: '',
        description: '',
        type_id: 0
      },
      jam: {
        name: '',
        description: ''
      },
      currentJam: {}
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

  onChangeJamField = (event) => {
    this.setState({
      jam:{
        ...this.state.jam,
        [event.target.name]: event.target.value
      }
    }, ()=>{console.log(this.state)})
  }

  onChangeSpreadField = (event, option) => {
    let value = option ? option.value : event.target.value
    let name = option ? option.name : event.target.name
    this.setState({
      spread:{
        ...this.state.spread,
        [name]: value
      }
    }, ()=>{console.log(this.state)})
  }

  onSubmitJamForm = (event) => {
    event.preventDefault()
    const data = {jam: {
      name: this.state.jam.name,
      description: this.state.jam.description,
      spread: this.state.spread
    } }
    console.log(data)
    JamsAdapter.post(data)
      .then((json)=>{this.setState({
        currentJam: json
      })
    })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.deck)}
        <Navbar />
        <LoginForm />
        <JamForm
        jam={this.state.jam}
        spread={this.state.spread}
        onChangeJamField={this.onChangeJamField}
        onChangeSpreadField={this.onChangeSpreadField}
        onSubmitJamForm={this.onSubmitJamForm}
        types={this.state.types}
        />
        <Jam types={this.state.types}
        currentUser={this.state.currentUser}
        currentJam={this.state.currentJam}
        />
      </div>
    );
  }
}

export default App;
