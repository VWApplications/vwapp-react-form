import React, { Fragment } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export const InputGroupField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel}>{field.label}</Form.Label>}
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          {field.left}
        </InputGroup.Prepend>
        <Fragment>
          <Form.Control
            {...field.input}
            as='input'
            type='text'
            placeholder={field.placeholder}
            disabled={field.disabled || false}
            className={field.className}
            id={field.input.name}
            isInvalid={touched && error && !field.disabled}
            isValid={touched && !error && !field.disabled}
          />
        </Fragment>
        <InputGroup.Append>
          {field.right}
        </InputGroup.Append>
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </InputGroup>
    </Fragment>
  )
}
