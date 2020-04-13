import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import {
  InputField, CheckField, TextAreaField, SelectField, RangeField,
  ImageField, InputGroupField, DateTimePicker, Json, Fieldset,
  ColorField, DataListField, FileField
} from 'vwapp-react-form';
import { Container, Col, Form, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

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

    if (values.range > 70) {
      errors.range = "Passou de 70";
    }

    if (values.file && values.file.width > 300) {
      errors.file = "Arquivo com tamanho muito grande!";
    }

    return errors;
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">React Final Form + VWApp React Components</h1>
        <hr />
        <FinalForm
          onSubmit={this.__onSubmit}
          initialValues={{multiselect: []}}
          validate={this.__validate}
          render={({ handleSubmit, submitting, pristine, values }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="formFirstName">
                  <Field
                    column
                    name="first_name"
                    placeholder="Primeiro Nome"
                    label="Primeiro Nome"
                    component={InputField}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formLastName">
                  <Field
                    column
                    name="last_name"
                    placeholder="Último Nome"
                    label="Último Nome"
                    left={<InputGroup.Text>$</InputGroup.Text>}
                    right={
                      <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1">
                        <Dropdown.Item onClick={() => console.log("Action 1")}>Action 1</Dropdown.Item>
                        <Dropdown.Item onClick={() => console.log("Action 2")}>Action 2</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => console.log("Action 3")}>Action 3</Dropdown.Item>
                      </DropdownButton>
                    }
                    component={InputGroupField}
                  />
                </Form.Group>
              </Form.Row>

              <Fieldset title="Formulário de escolhas">
                <Form.Row className="d-flex flex-row">
                  <Form.Group as={Col} md="4" controlId="formCheckbox" className="d-flex flex-column justify-content-between">
                    <Field
                      name="check"
                      type="checkbox"
                      label="Teste Checkbox"
                      id="check"
                      component={CheckField}
                    />
                    <Field
                      name="switch"
                      type="switch"
                      label="Teste Switch"
                      id="switch"
                      component={CheckField}
                    />
                    <Field
                      column
                      name="color"
                      label="Teste Color"
                      component={ColorField}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="formRadioButton" className="d-flex flex-column justify-content-between">
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
                    <Field
                      column
                      name="browsers"
                      label="Data List"
                      placeholder="Insira um navegador."
                      options={[
                        {title: "Internet Explore", value: "Internet Explore"},
                        {title: "Firefox", value: "Firefox"},
                        {title: "Chrome", value: "Chrome"},
                        {title: "Safari", value: "Safari"},
                      ]}
                      component={DataListField}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="formSelect">
                    <Field
                      column
                      multiple
                      name="multiselect"
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
                    <hr />
                    <Field
                      name="select"
                      type="select"
                      placeholder="Selecione a melhor opção"
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
              </Fieldset>

              <Fieldset title="Formulário de datas">
                <Form.Row className="d-flex flew-row justify-content-center">
                  <Form.Group as={Col} md="4" controlId="formDateTime" className="d-flex flew-row justify-content-center">
                    <Field
                      name="datetime"
                      label="Date e Hora:"
                      type="datetime"
                      minDate={new Date()}
                      component={DateTimePicker}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formDate" className="d-flex flew-row justify-content-center">
                    <Field
                      name="date"
                      label="Data:"
                      type="date"
                      minDate={new Date()}
                      component={DateTimePicker}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formTime" className="d-flex flew-row justify-content-center">
                    <Field
                      name="time"
                      label="Hora:"
                      type="time"
                      component={DateTimePicker}
                    />
                  </Form.Group>
                </Form.Row>
              </Fieldset>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="formDescription">
                  <Field
                    name="description"
                    placeholder="Descrição"
                    rows={5}
                    component={TextAreaField}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row className="d-flex flex-row">
                <Form.Group as={Col} md="8" controlId="formRange" className="d-flex flex-column justify-content-between">
                  <Field
                    column
                    name="range"
                    label="Range"
                    max={80}
                    component={RangeField}
                  />
                  <Field
                    name="file"
                    label="Arquivo:"
                    type='file'
                    placeholder="Clique para inserir o arquivo."
                    component={FileField}
                  />
                  <Json values={values} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="formFile">
                  <Field
                    name="image"
                    type='file'
                    label="Imagem"
                    placeholder="Clique aqui para inserir a imagem."
                    component={ImageField}
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="dark" type="submit" disabled={submitting || pristine}>Enviar</Button>
            </Form>
          )}
        />
        <br />
      </Container>
    )
  }
}

export default App;
