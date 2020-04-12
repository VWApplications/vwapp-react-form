import React from 'react'
import { Form as FinalForm, Field } from 'react-final-form';
import { InputField, CheckField, TextAreaField, SelectField } from 'vwapp-react-components';
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

    if (!values.select) {
      errors.select = "Selecione uma opcão.";
    }

    return errors;
  }

  render() {
    return (
      <Container>
        <h1>React Final Form + VWApp React Components</h1>
        <hr />
        <FinalForm
          onSubmit={this.__onSubmit}
          initialValues={{select: []}}
          validate={this.__validate}
          render={({ handleSubmit, submitting, pristine, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="formFirstName">
                  <Field
                    name="first_name"
                    placeholder="Primeiro Nome"
                    label="Primeiro Nome"
                    component={InputField}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formLastName">
                  <Field
                    name="last_name"
                    placeholder="Último Nome"
                    label="Último Nome"
                    component={InputField}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="3" controlId="formCheckbox">
                  <Field
                    name="check"
                    type="checkbox"
                    label="Teste Checkbox"
                    id="check"
                    component={CheckField}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="formRadioButton">
                  <Field
                    name="choice"
                    type="radio"
                    label="Teste Radio 01"
                    value="teste01"
                    id="radio1"
                    component={CheckField}
                  />
                  <Field
                    name="choice"
                    type="radio"
                    label="Teste Radio 02"
                    value="teste02"
                    id="radio2"
                    component={CheckField}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="formSwitch">
                  <Field
                    name="switch"
                    type="switch"
                    label="Teste Switch"
                    id="switch"
                    component={CheckField}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="formSelect">
                  <Field
                    multiple
                    name="select"
                    type="select"
                    label="Selecione as melhores opções"
                    options={[
                      {title: "1", value: 1},
                      {title: "2", value: 2},
                      {title: "3", value: 3},
                      {title: "4", value: 4},
                    ]}
                    component={SelectField}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="formDescription">
                  <Field
                    name="description"
                    placeholder="Descrição"
                    component={TextAreaField}
                  />
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
