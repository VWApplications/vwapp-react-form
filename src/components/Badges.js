import React from 'react';
import { toString } from '../constants';

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;
    this.className = props.className;

    this.type = props.type ? `badge-${props.type}` : '';
    this.rounded = props.rounded ? 'badge-pill' : '';

    this.classNames = ['badge'];
    if (this.type) this.classNames.push(this.type);
    if (this.rounded) this.classNames.push(this.rounded);
    if (this.className) this.classNames.push(this.className);

    delete this.attributes.type;
    delete this.attributes.rounded;
  }

  render() {
    return (
      <span {...this.attributes} className={toString([...this.classNames])}>
        {this.childrens}
      </span>
    )
  }
}
