import React, { Component } from 'react';
import { toString } from '../constants';

export class Alert extends Component {
  constructor(props) {
    super(props);
    this.classList = ['alert'];
    this.closeButton = null;
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { type, dismissible } = this.props;

    this.type = type ? `alert-${type}` : '';
    this.dismissible = dismissible ? 'alert-dismissible fade show' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.type) this.classList.push(this.type);
    if (this.dismissible) {
      this.closeButton = <button type='button' className='close' data-dismiss='alert'>&times;</button>;
      this.classList.push(this.dismissible);
    }

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.type;
    delete this.attributes.dismissible;
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {this.closeButton}
        {children}
      </div>
    )
  }
}
