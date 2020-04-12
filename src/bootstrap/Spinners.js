import React, { Component } from 'react';
import { toString } from '../constants';

export class Spinner extends Component {
  constructor(props) {
    super(props);
    this.classList = [];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { grow, type } = this.props;

    this.grow = grow ? 'spinner-grow spinner-grow-sm' : 'spinner-border spinner-border-sm';
    this.type = type ? `text-${type}` : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    this.classList.push(this.grow);
    this.classList.push(this.type);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.grow;
    delete this.attributes.type;
  }

  render() {
    return (
      <div {...this.attributes} className={toString([...this.classList])} />
    )
  }
}
