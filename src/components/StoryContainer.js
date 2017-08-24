import React from 'react'
import Story from './Story'
import StoryForm from './StoryForm'
import { Table, Grid } from 'semantic-ui-react'

export default class StoryContainer extends React.Component {
  // TODO change story to currentStory here and in parent components' props, along with property in state for App?
  // TODO add a button and function to allow saving of story updates and modify the return data so we only show the form if currentUser is one of the users associated with the Jam?
  // TODO sockets?!!!
  // NOTE discuss author alias etc


  list = () => {

   return this.props.currentJam.stories.map((story) => {return (
        <Story story={story} onChangeStoryField={story} />
      )
    })
  }

  render(){

    return(
      <div>
        <div>
          <h3>Stories In This Jam</h3>
            {this.props.currentJam.stories ? this.list() : null}
        </div>
        <div>
          <StoryForm
          jam={this.props.currentJam}
          user={this.props.currentUser}
          fields={this.props.storyFields}
          currentStory={this.props.currentStory}
          onChangeStoryField={this.props.onChangeStoryField}
          onSubmitStoryForm={this.props.onSubmitStoryForm}
          />
        </div>
      </div>
    )
  }
}
