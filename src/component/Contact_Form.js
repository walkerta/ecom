import React from 'react';
import {Container, Form, FormGroup, Input, Label, FormText, Navbar} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    let textStyle = {
      color: 'slategray',
    }
    return (
      <Container style={{marginTop: '30px'}}>

        <h1 style={{color: 'slategray'}}>Get in Touch</h1>

        <Form>

          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="Name" name="Name" id="Name" placeholder="with a placeholder"/>
          </FormGroup>

          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="Email" name="Email" id="Email" placeholder="with a placeholder"/>
          </FormGroup>

          <FormGroup>
            <Label for="Message">Message</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>


        </Form>

      </Container>

    )
  }
}
