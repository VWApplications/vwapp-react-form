import React from 'react'
import { Form as FinalForm, Field } from 'react-final-form';
import { InputField } from 'vwapp-react-components';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';

class App extends React.Component {
  __onSubmit = data => {
    console.log(data);
  }

  __validate = values => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Nome é obrigatório.";
    }

    return errors;
  }

  render() {
    return (
      <Container>
        <FinalForm
          onSubmit={this.__onSubmit}
          initialValues={{}}
          validate={this.__validate}
          render={({ handleSubmit, submitting, pristine, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="formFirstName">
                  <Field name="first_name" type="text" placeholder="Primeiro Nome" label="Primeiro Nome" component={InputField} />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formLastName">
                  <Field name="last_name" type="text" placeholder="Último Nome" label="Último Nome" component={InputField} />
                </Form.Group>
              </Form.Row>

              <Button variant="dark" type="submit" disabled={submitting || pristine}>Enviar</Button>

              <Card body className="mt-3"><pre>{JSON.stringify(values, 0, 2)}</pre></Card>
            </Form>
          )}
        />
      </Container>
    )
  }
}

export default App;
