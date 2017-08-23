import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import JamForm from './components/JamForm'
import JamsAdapter from './adapters/JamsAdapter'
import TypesAdapter from './adapters/TypesAdapter'
import StoriesAdapter from './adapters/StoriesAdapter'
import UsersAdapter from './adapters/UsersAdapter'
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
      currentStory: {},
      login: {
        username: ''
      }
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

  onChangeLoginField = (event) => {
    this.setState({
      login: {
        ...this.state.login,
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
      jam_id: this.state.currentJam.jam.id}
    }

    StoriesAdapter.post(data)
      .then((json)=>{console.log(json, this.state)
        this.setState({
        currentJam: json.jam,
        currentStory: json.story
      },
      () => {console.log(this.state)}
    )
    })
  }

  onSubmitLoginForm = (event, history) => {
    event.preventDefault()

    UsersAdapter.show()
      .then(json => {this.setState({
        currenUser: json
      }, ()=>{
        history.push(`/users/${this.state.currentUser.id}`)
        console.log(this.state)
    })
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/login' render={(props)=>{return <LoginForm onChangeLoginField={this.onChangeLoginField} history={props.history} onSubmitLoginForm={this.onSubmitLoginForm} />} } />
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
          <Route exact path='/jams/:id' render={(props)=>{
            return <Jam history={props.history} types={this.state.types}
            currentUser={this.state.currentUser}
            currentJam={this.state.currentJam}
            story={this.state.story}
            onChangeStoryField={this.onChangeStoryField}
            onSubmitStoryForm={this.onSubmitStoryForm}
            />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
