import React, { Fragment, Component } from 'react';
import { Form } from 'react-bootstrap';
import { FileLabel } from '../styles';

export class FileField extends Component {
  __handleChange(event, input) {
    event.preventDefault();
    const file = event.target.files[0];
    input.onChange(file);
  }

  render() {
    const { input, className, placeholder, disabled, label, attrLabel } = this.props;
    const { error, invalid } = this.props.meta;

    return (
      <Fragment>
        {label && <FileLabel {...attrLabel}>{label}</FileLabel>}
        <Fragment>
          <Form.File
            custom
            name={input.name}
            type={input.type}
            label={input.value ? input.value.name : placeholder}
            disabled={disabled || false}
            className={className}
            onChange={event => this.__handleChange(event, input)}
            feedback={error}
            isInvalid={invalid && error && !disabled}
            isValid={invalid && !error && !disabled}
          />
          <Form.Control.Feedback type='valid' />
          <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        </Fragment>
      </Fragment>
    )
  }
}
