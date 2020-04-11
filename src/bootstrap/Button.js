import React from 'react';
import { toString } from '../constants';

export const ButtonGroup = props => {
  const type = props.vertical ? 'btn-group-vertical' : 'btn-group';
  const size = props.size ? `btn-group-${props.size}` : '';

  const classNames = [type];
  if (props.className) classNames.push(props.className);
  if (size) classNames.push(size);

  return (
    <div className={toString([...classNames])}>
      {props.children}
    </div>
  );
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['btn'];
    this.childrens = props.children;
    this.attributes = { ...props };

    const type = props.type;
    const outline = props.outline;
    const disabled = props.disabled ? 'disabled' : '';
    const size = props.size ? `btn-${props.size}` : '';

    if (props.className) this.classNames.push(props.className);
    if (disabled) this.classNames.push(disabled);
    if (size) this.classNames.push(size);
    if (type) {
      if (outline) {
        this.classNames.push(`btn-outline-${type}`);
      } else {
        this.classNames.push(`btn-${type}`);
      }
    }

    delete this.attributes.type;
    delete this.attributes.disabled;
    delete this.attributes.size;
    delete this.attributes.outline;
  }

  render() {
    return (
      <button {...this.attributes} className={toString([...this.classNames])}>
        {this.childrens}
      </button>
    );
  }
}
