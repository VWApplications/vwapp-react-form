import React, { Component } from 'react';
import { toString } from '../constants';

export const Row = props => (
  <div {...props} className={toString(['row', props.className || ''])}>
    {props.children}
  </div>
)

export class Col extends Component {
  constructor(props) {
    super(props);
    this.classList = ['col'];
    this.attributes = { ...props };

    this.__populateClassList();
    this.__deleteAttributes();
  }

  __configureGrid = () => {
    const { screens, sizes } = this.props;
    this.classList = [];

    this.className = '';
    let firstScreen = screens[0];
    for (let i = 0; i < screens.length; i++) {
      if (screens[i] === firstScreen) {
        if (i !== 0) { this.className += ' '; }
        if (screens[i] === 'xs') {
          this.className += `col-${sizes[i]}`;
        } else {
          this.className += `col-${screens[i]}-${sizes[i]}`;
        }
      }

      firstScreen = screens[i + 1];
    }
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.screens;
    delete this.attributes.sizes;
  }

  render() {
    const { children, screens, sizes } = this.props;

    if (!screens || !sizes) {
      return <div {...this.attributes} className={toString([...this.classList])}>{children}</div>;
    }

    if (screens.length !== sizes.length) {
      return <div {...this.attributes} className={toString([...this.classList])}>{children}</div>;
    }

    this.__configureGrid();
    return <div {...this.attributes} className={toString([this.className, ...this.classList])}>{children}</div>;
  }
}
