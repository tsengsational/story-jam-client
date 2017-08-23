import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

const LoginForm = (props) => {


  const handleSubmit = (event) => {
    props.onSubmitLoginForm(event, props.history)

  }

  return(
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Form onSubmit={handleSubmit} >
            <Form.Field name="username" onChange={props.onChangeLoginField}>
              <label>Username</label>
              <input name="username" placeholder='Username' />
            </Form.Field>
            <Form.Field name="password" onChange={props.onChangeLoginField}>
              <label>Password</label>
              <input name="password" type="password" placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default LoginForm
