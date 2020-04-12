import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const FileField = field => {
  const { error, touched } = field.meta;

  return (
    <Fragment>
      {field.label && <Form.Label {...field.attrLabel}>{field.label}</Form.Label>}
      <Form.File
        {...field.input}
        custom
        id={field.input.name}
        label={field.input.value ? field.input.value : field.placeholder}
        className={field.className}
        disabled={field.disabled || false}
        feedback={error}
        isInvalid={touched && error && !field.disabled}
        isValid={touched && !error && !field.disabled}
      />
      <Form.Control.Feedback type='valid' />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Fragment>
  )
}
