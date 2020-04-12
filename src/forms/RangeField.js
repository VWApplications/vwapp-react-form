import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const RangeField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel}>{field.label}</Form.Label>}
      <Form.Control
        {...field.input}
        custom
        as='input'
        type='range'
        min={field.min || 0}
        max={field.max || 100}
        disabled={field.disabled || false}
        className={field.className}
        id={field.input.name}
        isInvalid={touched && error && !field.disabled}
        isValid={touched && !error && !field.disabled}
      />
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
