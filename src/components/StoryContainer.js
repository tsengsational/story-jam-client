import React from 'react'
import Story from './Story'

export default class StoryContainer extends React.Component {
  // TODO change story to currentStory here and in parent components' props, along with property in state for App?
  // TODO add stories property to Jam and shovel story in?
  // TODO persist stories to database (finish updating controllers)
  // TODO add a button and function to allow saving of story updates and modify the return data so we only show the form if currentUser is one of the users associated with the Jam?
  // TODO sockets?!!!
  // NOTE discuss author alias etc

  render(){
    console.log(this.props)

    return(
      <div>
        <Story story={this.props.story} onChangeStoryField={this.props.onChangeStoryField} />
      </div>
    )
  }
}
