import React from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const ColorField = field => {
  const { error, touched } = field.meta;

  let classList = ['flex-row'];
  let labelClassList = ['pr-3', 'mt-2', 'align-self-start'];
  if (field.column) {
    labelClassList = ['pr-2'];
    classList = ['flex-column'];
  }

  return (
    <div className={toString(['d-flex', ...classList])}>
      {field.label && <Form.Label className={toString([...labelClassList])}>{field.label}</Form.Label>}
      <div className='flex-column flex-grow-1'>
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
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  )
}
