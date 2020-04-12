import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const TextAreaField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel}>{field.label}</Form.Label>}
      <Form.Control
        {...field.input}
        as='textarea'
        type='text'
        placeholder={field.placeholder}
        disabled={(field.disabled || field.readOnly) || false}
        className={field.className}
        size={field.size}
        rows={field.rows}
        plaintext={field.readOnly || false}
        readOnly={field.readOnly || false}
        id={field.input.name}
        isInvalid={touched && error && !field.readOnly && !field.disabled}
        isValid={touched && !error && !field.readOnly && !field.disabled}
      />
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
