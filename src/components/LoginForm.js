import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const LoginForm = (props) => {
  return(
    <div>
    <Form >
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm
