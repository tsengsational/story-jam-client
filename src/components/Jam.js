import React from 'react'
import JamsAdapter from '../adapters/JamsAdapter'
import Spread from './Spread'
import StoryContainer from './StoryContainer'

export default class Jam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentJam: {},
      currentUser: ""
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    if (id) {
      this.props.onLoadJam(id)
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      const id = this.props.match.params.id
          this.setState({
            currentJam: nextProps.currentJam,
            currentUser: nextProps.currentUser
          }, ()=>{console.log(this.state)})
    }
  }

  render(){

    return(
      <div>
        <Spread spread={this.props.currentJam.spread} types={this.props.types} />

        <div>
          <StoryContainer
          currentUser={this.props.currentUser}
          currentJam={this.props.currentJam}
          storyFields={this.props.storyFields}
          currentStory={this.props.currentStory}
          onChangeStoryField={this.props.onChangeStoryField}
          onSubmitStoryForm={this.props.onSubmitStoryForm}
          />
        </div>
      </div>
    )
  }
}
