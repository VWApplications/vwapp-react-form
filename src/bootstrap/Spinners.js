import React from 'react';
import { toString } from '../constants';

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };

    const grow = props.grow ? 'spinner-grow spinner-grow-sm' : 'spinner-border spinner-border-sm';
    const type = props.type ? `text-${props.type}` : '';

    this.classNames = [grow, type];
    if (props.className) this.classNames.push(props.className);

    delete this.attributes.grow;
    delete this.attributes.type;
  }

  render() {
    return (
      <div {...this.attributes} className={toString([...this.classNames])} />
    )
  }
}
