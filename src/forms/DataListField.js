import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export const DataListField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel}>{field.label}</Form.Label>}
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
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      <datalist id={field.input.name}>
        {field.options.map((option, index) => (
          <option key={index} value={option.value}>{option.title}</option>
        ))}
      </datalist>
    </Fragment>
  )
}
