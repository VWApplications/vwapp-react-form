import React, { Component } from 'react';
import { toString } from '../constants';

export class Container extends Component {
  constructor(props) {
    super(props);
    this.classList = [];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { screen, fluid } = this.props;

    this.screen = screen ? `-${screen}` : '';
    this.fluid = fluid && !screen ? '-fluid' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    this.classList.push(`container${this.screen}${this.fluid}`);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.screen;
    delete this.attributes.fluid;
  }

  render() {
    const { children } = this.props;

    return (
      <main {...this.attributes} className={toString([...this.classList])}>
        {children}
      </main>
    );
  }
}
