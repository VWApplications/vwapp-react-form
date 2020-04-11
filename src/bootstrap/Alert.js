import React from 'react';
import { toString } from '../constants';

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['alert'];
    this.childrens = props.children;
    this.closeButton = null;
    this.attributes = { ...props };

    const type = props.type ? `alert-${props.type}` : '';
    const dismissible = props.dismissible ? 'alert-dismissible fade show' : '';

    if (props.className) this.classNames.push(props.className);
    if (type) this.classNames.push(type);
    if (dismissible) {
      this.closeButton = <button type='button' className='close' data-dismiss='alert'>&times;</button>;
      this.classNames.push(dismissible);
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
