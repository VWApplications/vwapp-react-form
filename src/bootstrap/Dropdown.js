import React from 'react';
import { toString } from '../constants';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['btn', 'dropdown-toggle'];
    this.childrens = props.children;
    this.attrMenu = props.attrMenu;
    this.title = props.title;
    this.group = props.group ? 'btn-group' : 'dropdown';
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
    delete this.attributes.attrMenu;
    delete this.attributes.title;
    delete this.attributes.group;
  }

  render() {
    return (
      <div className={this.group}>
        <button {...this.attributes} className={toString([...this.classNames])} data-toggle='dropdown'>
          {this.title}
        </button>
        <div {...this.attrMenu} className={toString(['dropdown-menu', this.attrMenu ? this.attrMenu.className : ''])}>
          {this.childrens}
        </div>
      </div>
    );
  }
}

export const DropDivider = props => <div {...props} className={toString(['dropdown-divider', props.className || ''])} />;

export const DropHeader = props => <div {...props} className={toString(['dropdown-header', props.className || ''])}>{props.children}</div>;

export const DropText = props => <span {...props} className={toString(['dropdown-item-text', props.className || ''])}>{props.children}</span>;

export class DropLink extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['btn', 'btn-link', 'dropdown-item'];
    this.childrens = props.children;
    this.onClick = props.onClick;
    this.attributes = { ...props };
    delete this.attributes.disabled;
    delete this.attributes.actived;
    delete this.attributes.onClick;

    const className = props.className;
    const disabled = props.disabled ? 'disabled' : '';
    const actived = props.actived ? 'active' : '';

    if (className) this.classNames.push(className);
    if (disabled) this.classNames.push(disabled);
    if (actived) this.classNames.push(actived);
  }

  render() {
    return (
      <button {...this.attributes} className={toString([...this.classNames])} onClick={this.onClick}>
        {this.childrens}
      </button>
    );
  }
}
