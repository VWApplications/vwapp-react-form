import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { toString } from '../utils';

export class FileField extends Component {
  __handleChange(event, input) {
    event.preventDefault();
    const file = event.target.files[0];
    input.onChange(file);
  }

  render() {
    const { input, className, placeholder, disabled, label, column } = this.props;
    const { error, invalid } = this.props.meta;

    let classList = ['flex-row'];
    let labelClassList = ['pr-3', 'mt-2', 'align-self-start'];
    if (column) {
      labelClassList = ['pr-2'];
      classList = ['flex-column'];
    }

    return (
      <div className={toString(['d-flex', ...classList])}>
        {label && <Form.Label className={toString([...labelClassList])}>{label}</Form.Label>}
        <div className='flex-column flex-grow-1'>
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
          <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        </div>
      </div>
    )
  }
}
