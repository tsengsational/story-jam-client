import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

const LoginForm = (props) => {
  return(
    <div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Form >
            <Form.Field>
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
