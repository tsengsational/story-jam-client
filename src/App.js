import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import JamForm from './components/JamForm'
import JamsAdapter from './adapters/JamsAdapter'
import CardsAdapter from './adapters/CardsAdapter'
import TypesAdapter from './adapters/TypesAdapter'
import StoriesAdapter from './adapters/StoriesAdapter'
import './App.css';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
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
      story: {
        title: '',
        content: ''
      },
      currentJam: {},
      currentStory: {}
    }
  }

  componentDidMount() {
    TypesAdapter.index()
      .then(json => this.setState({
        types: json
      }, ()=>{console.log(this.state.types)})
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

  onChangeStoryField = (event) => {
    this.setState({
      story: {
        ...this.state.story,
        [event.target.name]: event.target.value
      }
    }, ()=>{console.log(this.state)})
  }

  onSubmitJamForm = (event, history) => {
    event.preventDefault()
    console.log(event, history)

    const data = {jam: {
      name: this.state.jam.name,
      description: this.state.jam.description,
      spread: this.state.spread
    } }

    JamsAdapter.post(data)
      .then((json)=>{this.setState({
        currentJam: json

      },
      () => {history.push(`/jams/${this.state.currentJam.jam.id}`)
        console.log(this.state, history)}
    )
    })
  }

  onSubmitStoryForm = (event) => {
    event.preventDefault()
    const data = {story: {
      title: this.state.story.title,
      content: this.state.story.content,
      jam: {id: this.state.currentJam.jam.id}
    } }

    StoriesAdapter.post(data)
      .then((json)=>{this.setState({
        currentStory: json
      })
    })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.deck)}
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/jams/new' render={(props)=>{
            return  <JamForm
            history={props.history}
            jam={this.state.jam}
            spread={this.state.spread}
            onChangeJamField={this.onChangeJamField}
            onChangeSpreadField={this.onChangeSpreadField}
            onSubmitJamForm={this.onSubmitJamForm}
            types={this.state.types}
            />}
          } />
          <Route exact path='/jams/:id' render={()=>{
            return <Jam types={this.state.types}
            currentUser={this.state.currentUser}
            currentJam={this.state.currentJam}
            story={this.state.story}
            onChangeStoryField={this.onChangeStoryField}
            />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
