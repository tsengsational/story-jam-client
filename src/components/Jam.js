import React from 'react'
import Spread from './Spread'
import StoryForm from './StoryForm'
import StoryContainer from './StoryContainer'

export default class Jam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentJam: {},
      currentUser: ""
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        currentJam: nextProps.currentJam,
        currentUser: nextProps.currentUser
      }, ()=>{console.log(this.state)})
    }
  }

  render(){

    return(
      <div>
        <Spread spread={this.state.currentJam.spread} types={this.props.types} />
        <div>
          <StoryForm
          jam={this.props.currentJam}
          user={this.props.currentUser}
          story={this.props.story}
          onChangeStoryField={this.props.onChangeStoryField}
          onSubmitStoryForm={this.onSubmitStoryForm}
          />
        </div>
        <div>
        <h3> Current Stories </h3>
          <StoryContainer
          currentUser={this.props.currentUser}
          currentJam={this.props.currentJam}
          story={this.props.story}
          onChangeStoryField={this.props.onChangeStoryField}
          />
        </div>
      </div>
    )
  }
}
