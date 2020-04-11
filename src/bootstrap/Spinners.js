import React from 'react';
import { toString } from '../constants';

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.className = props.className;

    this.grow = props.grow ? 'spinner-grow spinner-grow-sm' : 'spinner-border spinner-border-sm';
    this.type = props.type ? `text-${props.type}` : '';

    this.classNames = [this.grow, this.type];
    if (this.className) this.classNames.push(this.className);

    delete this.attributes.grow;
    delete this.attributes.type;
  }

  render() {
    return (
      <div {...this.attributes} className={toString([...this.classNames])} />
    )
  }
}
