import React from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const SelectField = field => {
  const { error, touched } = field.meta;

  let classList = ['flex-row'];
  let labelClassList = ['pr-2', 'align-self-center'];
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
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  )
}
