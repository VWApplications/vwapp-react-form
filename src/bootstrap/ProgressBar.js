import React, { Component } from 'react';
import { Progress } from '../styles';
import { toString } from '../constants';

export const ProgressBar = props => (
  <Progress {...props} className={toString(['progress', props.className || ''])}>
    {props.children}
  </Progress>
)

export class ProgressBarSlice extends Component {
  constructor(props) {
    super(props);
    this.classList = ['progress-bar', 'progress-bar-striped', 'progress-bar-animated'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { type } = this.props;

    this.type = type ? `bg-${type}` : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.type) this.classList.push(this.type);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.type;
    delete this.attributes.progress;
  }

  render() {
    const { progress, children } = this.props;

    return (
      <span
        {...this.attributes}
        className={toString([...this.classList])}
        style={{ width: `${progress}%` }}>
        {children}
      </span>
    )
  }
}
