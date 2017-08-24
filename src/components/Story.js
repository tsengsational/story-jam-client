import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const Story = (props) => {

  return(
    <div>
      <h4>{props ? props.story.title : null}</h4>
        {props.story.content}
    </div>
  )
}

export default Story
