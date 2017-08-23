import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

const JamForm = (props) => {
  console.log(props)
  const typeNames = props === null ? null : props.types.map((type)=>{
    return {text: type.type.name, value: type.type.id}
  })
  return(
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Form onSubmit={props.onSubmitJamForm} >
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Jam Name</label>
                <input value={props.jam.name} onChange={props.onChangeJamField} name="name" placeholder='Name' />
              </Form.Field>
              <Form.Field>
                <label>Jam Description</label>
                <input value={props.jam.description} onChange={props.onChangeJamField} name="description" placeholder='Jam Description' />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Spread Title</label>
                <input value={props.spread.title} onChange={props.onChangeSpreadField} name="title" placeholder='Spread Description' />
              </Form.Field>
              <Form.Field>
                <label>Spread Description</label>
                <input value={props.spread.description} onChange={props.onChangeSpreadField} name="description" placeholder='Spread Description' />
              </Form.Field>
            </Form.Group>
            <Form.Select label='Type' options={typeNames} name="type_id" placeholder='Select Spread Type' onChange={props.onChangeSpreadField} />
            <Button type='submit'>Start Jam</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default JamForm
