import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DateTimePickerField from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { toString } from '../utils';

export class DateTimePicker extends Component {
  render() {
    const { label, input, className, id, maxDate, minDate, disabled, column } = this.props;
    const { error, invalid } = this.props.meta;

    let classList = ['flex-row'];
    if (column) classList = ['flex-column'];

    switch (input.type) {
      case 'time':
        return (
          <div className={toString(['d-flex', ...classList])}>
            {label && <Form.Label className='pr-2'>{label}</Form.Label>}
            <div className='flex-column flex-grow-1'>
              <TimePicker
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                id={id}
              />
              <p className='text-danger'>{invalid && error}</p>
            </div>
          </div>
        );
      case 'date':
        return (
          <div className={toString(['d-flex', ...classList])}>
            {label && <Form.Label className='pr-2'>{label}</Form.Label>}
            <div className='flex-column flex-grow-1'>
              <DatePicker
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                minDate={minDate}
                maxDate={maxDate}
                id={id}
              />
              <p className='text-danger'>{invalid && error}</p>
            </div>
          </div>
        );
      default:
        return (
          <div className={toString(['d-flex', ...classList])}>
            {label && <Form.Label className='pr-2'>{label}</Form.Label>}
            <div className='flex-column flex-grow-1'>
              <DateTimePickerField
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                disabled={disabled || false}
                locale='pt-BR'
                className={className}
                minDate={minDate}
                maxDate={maxDate}
                id={id}
              />
              <p className='text-danger'>{invalid && error}</p>
            </div>
          </div>
        )
    }
  }
}
