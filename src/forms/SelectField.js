import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const SelectField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label>{field.label}</Form.Label>}
      <Form.Control
        {...field.input}
        custom
        as='select'
        disabled={field.disabled || false}
        className={field.className}
        size={field.size}
        id={field.input.name}
        isInvalid={touched && error && !field.disabled}
        isValid={touched && !error && !field.disabled}>
        {!field.input.multiple && <option value=''>{field.placeholder ? field.placeholder : 'Selecione uma opção'}</option>}
        {field.options.map((option, index) => (
          <option key={index} value={option.value}>{option.title}</option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
