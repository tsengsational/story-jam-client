import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const JamForm = (props) => {

  const typeNames = props === null ? null : props.types.map((type)=>{
    return {text: type.type.name, value: type.type.id}
  })

  return(
    <div>
    <Form onSubmit={props.onSubmitJamForm} >
        <Form.Field>
          <label>Jam Name</label>
          <input value={props.jam.name} onChange={props.onChangeJamField} name="name" placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Jam Description</label>
          <input value={props.jam.description} onChange={props.onChangeJamField} name="description" placeholder='Jam Description' />
        </Form.Field>
        <Form.Field>
          <label>Spread Title</label>
          <input value={props.spread.title} onChange={props.onChangeSpreadField} name="title" placeholder='Spread Description' />
        </Form.Field>
        <Form.Field>
          <label>Spread Description</label>
          <input value={props.spread.description} onChange={props.onChangeSpreadField} name="description" placeholder='Spread Description' />
        </Form.Field>
        <Form.Select label='Type' options={typeNames} name="type_id" placeholder='Select Spread Type' onChange={props.onChangeSpreadField} />
        <Button type='submit'>Start Jam</Button>
      </Form>
    </div>
  )
}

export default JamForm
