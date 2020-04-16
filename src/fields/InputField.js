import React from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const InputField = field => {
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
          type={field.input.type ? field.input.type : 'text'}
          placeholder={field.placeholder}
          disabled={(field.disabled || field.readOnly) || false}
          className={toString(['form-control', field.className || ''])}
          size={field.size}
          plaintext={field.readOnly || false}
          readOnly={field.readOnly || false}
          id={field.input.name}
          isInvalid={touched && error && !field.readOnly && !field.disabled}
          isValid={touched && !error && !field.readOnly && !field.disabled}
        />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  )
}
