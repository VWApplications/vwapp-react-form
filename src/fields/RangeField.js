import React from "react";
import { Form } from "react-bootstrap";
import { toString } from "../utils";

export const RangeField = field => {
  const { error, touched } = field.meta;

  let classList = ["flex-row"];
  if (field.column) classList = ["flex-column"];

  return (
    <div className={toString(["d-flex", ...classList])}>
      {field.label && <Form.Label className='pr-2'>{field.label}</Form.Label>}
      <div className='flex-column flex-grow-1'>
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
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};
