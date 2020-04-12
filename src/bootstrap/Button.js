import React, { Component } from 'react';
import { toString } from '../constants';

export class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.classList = [];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
  }

  __setAttributes = () => {
    const { vertical, size } = this.props;

    this.type = vertical ? 'btn-group-vertical' : 'btn-group';
    this.size = size ? `btn-group-${size}` : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    this.classList.push(this.type);
    if (this.size) this.classList.push(this.size);
    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
    this.classList = ['btn'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { type, outline, disabled, size } = this.props;

    this.type = type;
    this.outline = outline;
    this.disabled = disabled ? 'disabled' : '';
    this.size = size ? `btn-${size}` : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.disabled) this.classList.push(this.disabled);
    if (this.size) this.classList.push(this.size);
    if (this.type) {
      if (this.outline) {
        this.classList.push(`btn-outline-${this.type}`);
      } else {
        this.classList.push(`btn-${this.type}`);
      }
    }

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.type;
    delete this.attributes.disabled;
    delete this.attributes.size;
    delete this.attributes.outline;
  }

  render() {
    const { children } = this.props;

    return (
      <button {...this.attributes} className={toString([...this.classList])}>
        {children}
      </button>
    );
  }
}
