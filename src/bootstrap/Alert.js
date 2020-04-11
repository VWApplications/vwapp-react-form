import React from 'react';
import { toString } from '../constants';

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;
    this.className = props.className;

    this.type = props.type ? `alert-${props.type}` : '';
    this.dismissible = props.dismissible ? 'alert-dismissible fade show' : '';

    this.classNames = ['alert', this.type];
    this.closeButton = null;
    if (this.className) this.classNames.push(this.className);
    if (this.dismissible) {
      this.closeButton = <button type='button' className='close' data-dismiss='alert'>&times;</button>;
      this.classNames.push(this.dismissible);
    }

    delete this.attributes.type;
    delete this.attributes.dismissible;
  }

  render() {
    return (
      <div {...this.attributes} className={toString([...this.classNames])}>
        {this.closeButton}
        {this.childrens}
      </div>
    )
  }
}
