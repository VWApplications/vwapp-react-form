import React, { Component } from 'react';
import { toString } from '../constants';

export class Badge extends Component {
  constructor(props) {
    super(props);
    this.classList = ['badge'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { type, rounded } = this.props;

    this.type = type ? `badge-${type}` : '';
    this.rounded = rounded ? 'badge-pill' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.type) this.classList.push(this.type);
    if (this.rounded) this.classList.push(this.rounded);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.type;
    delete this.attributes.rounded;
  }

  render() {
    const { children } = this.props;

    return (
      <span {...this.attributes} className={toString([...this.classList])}>
        {children}
      </span>
    )
  }
}
