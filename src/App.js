import React, { Component } from 'react';
import Jam from './components/Jam'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import JamForm from './components/JamForm'
import JamsAdapter from './adapters/JamsAdapter'
import TypesAdapter from './adapters/TypesAdapter'
import StoriesAdapter from './adapters/StoriesAdapter'
import Auth from './adapters/AuthAdapter'
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
      auth: {
        isLoggedIn: false,
        user: {
          username: "",
          id: 0
        }
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
        username: '',
        password: ''
      }
    }
  }

  componentWillMount(){
      if (localStorage.getItem('jwt')) {
       Auth.currentUser()
         .then(user => {
           if (!user.error) {
             console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: user
               }
             })
           }
         })
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

  onLoadJam = (id) => {
    JamsAdapter.get(id)
      .then((json) =>  {this.setState({
            currentJam: json
          }, () => {console.log("load jam", this.state)}
        )
      }
    )
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
        currentStory: json.story,
        story: {
          ...this.state.story,
          title: '',
          content: ''
        }
      },
      () => {console.log(this.state)}
    )
    })
  }

  onSubmitLoginForm = (event, history) => {
    event.preventDefault()
    const username = this.state.login.username
    const password = this.state.login.password
    const loginParams = {
      username: username,
      password: password
    }
    this.logIn(loginParams)
      .then(json => {        history.push(`/users/${this.state.currentUser.id}`)
      })
    }

  logIn = (loginParams) => {
    return (Auth.login(loginParams)
      .then( user => {
        console.log(user)
        if (!user.error) {
          this.setState({
            auth: { isLoggedIn: true, user: user}
          })
          localStorage.setItem('jwt', user.jwt )
        }
      }) )
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.setState({ auth: { isLoggedIn: false, user:{}}})
  }

  render() {
    return (
      <div className="App">
        <Navbar logout={this.logout} currentUser={this.state.auth} />
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

            return <Jam types={this.state.types}
            match={props.match}
            history={props.history}
            currentUser={this.state.currentUser}
            currentJam={this.state.currentJam}
            storyFields={this.state.story}
            currentStory={this.state.currentStory}
            onLoadJam={this.onLoadJam}
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
