import React from "react";
import { Form } from "react-bootstrap";
import { toString } from "../utils";

export const TextAreaField = field => {
  const { error, touched } = field.meta;

  let classList = ["flex-row"];
  let labelClassList = ["pr-3", "align-self-center"];
  if (field.column) {
    labelClassList = ["pr-2"];
    classList = ["flex-column"];
  }

  return (
    <div className={toString(["d-flex", ...classList])}>
      {field.label && <Form.Label className={toString([...labelClassList])}>{field.label}</Form.Label>}
      <div className='flex-column flex-grow-1'>
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
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};
