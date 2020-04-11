import React from 'react';
import { toString } from '../constants';

export class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['badge'];
    this.childrens = props.children;
    this.attributes = { ...props };

    const type = props.type ? `badge-${props.type}` : '';
    const rounded = props.rounded ? 'badge-pill' : '';

    if (type) this.classNames.push(type);
    if (rounded) this.classNames.push(rounded);
    if (props.className) this.classNames.push(props.className);

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
