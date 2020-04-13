import React from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const DataListField = field => {
  const { error, touched } = field.meta;

  let classList = ['flex-row'];
  let labelClassList = ['pr-2', 'align-self-end'];
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
          disabled={field.disabled || false}
          className={toString(['form-control', field.className || ''])}
          list={field.input.name}
          size={field.size}
          id={field.id}
          isInvalid={touched && error && !field.disabled}
          isValid={touched && !error && !field.disabled}
        />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        <datalist id={field.input.name}>
          {field.options.map((option, index) => (
            <option key={index} value={option.value}>{option.title}</option>
          ))}
        </datalist>
      </div>
    </div>
  )
}
