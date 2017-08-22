import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const JamForm = (props) => {
  console.log(props)
  const typeNames = props === null ? null : props.types.map((type)=>{
    return {text: type.type.name, value: type.type.id}
  })
  return(
    <div>
    <Form onSubmit={props.onSubmitJamForm} >
        <Form.Field>
          <label>Jam Name</label>
          <input onChange={props.onChangeJamField} name="name" placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Jam Description</label>
          <input onChange={props.onChangeJamField} name="description" placeholder='Jam Description' />
        </Form.Field>
        <Form.Field>
          <label>Spread Title</label>
          <input onChange={props.onChangeSpreadField} name="title" placeholder='Spread Description' />
        </Form.Field>
        <Form.Field>
          <label>Spread Description</label>
          <input onChange={props.onChangeSpreadField} name="description" placeholder='Spread Description' />
        </Form.Field>
        <Form.Select label='Type' options={typeNames} placeholder='Select Spread Type' />
        <Button type='submit'>Start Jam</Button>
      </Form>
    </div>
  )
}

export default JamForm
