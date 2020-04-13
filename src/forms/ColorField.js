import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const ColorField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel} block>{field.label}</Form.Label>}
      <Form.Control
        {...field.input}
        custom
        as='input'
        type='color'
        disabled={field.disabled || false}
        className={toString(['form-control', field.className || ''])}
        id={field.input.name}
        isInvalid={touched && error && !field.disabled}
        isValid={touched && !error && !field.disabled}
      />
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
