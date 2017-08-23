import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const StoryForm = (props) => {

  return(
    <div>
    <Form onSubmit={props.onSubmitStoryForm} >
        <h3>Start a New Story!</h3>
        
        <Form.Field>
          <label>Story Title</label>
          <input value={props.story.title} onChange={props.onChangeStoryField} name="title" placeholder='Title' />
        </Form.Field>
        <Form.TextArea value={props.story.content} onChange={props.onChangeStoryField} name="content"
        placeholder='Start your story here...'>
        </Form.TextArea>
        <Button type='submit'>Start New Story</Button>
      </Form>
    </div>
  )
}

export default StoryForm
