import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

const LoginForm = (props) => {

  const handleClick = (event) => {
    this.props.onSubmitLoginForm(event, props.history)
  }

  return(
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Form onSubmit={this.handleClick} >
            <Form.Field name="Username" onChange={props.onChangeLoginField}>
              <label>Username</label>
              <input placeholder='Username' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default LoginForm
