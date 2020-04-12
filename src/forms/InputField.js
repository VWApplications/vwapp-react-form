import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const InputField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label>{field.label}</Form.Label>}
      <Form.Control
        {...field.input}
        placeholder={field.placeholder}
        className={field.className}
        id={field.input.name}
        isInvalid={touched && error}
        isValid={touched && !error}
      />
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
