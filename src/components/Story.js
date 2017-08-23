import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const Story = (props) => {

  return(
    <div>
      <h3>{props ? props.story.title : null}</h3>
      <div>
        <Form>
          <Form.TextArea value={props.story.content} onChange={props.onChangeStoryField} name="content"
          placeholder='Your story is waiting for you...'>
          </Form.TextArea>
        </Form>
      </div>
    </div>
  )
}

export default Story
