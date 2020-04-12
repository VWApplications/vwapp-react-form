import React, { Component } from 'react';
import { toString } from '../constants';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.classList = ['btn', 'dropdown-toggle'];
    this.group = props.group ? 'btn-group' : 'dropdown';
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { type, outline, disabled, size } = this.props;

    this.type = type;
    this.outline = outline;
    this.disabled = disabled ? 'disabled' : '';
    this.size = size ? `btn-${size}` : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.disabled) this.classList.push(this.disabled);
    if (this.size) this.classList.push(this.size);
    if (this.type) {
      if (this.outline) {
        this.classList.push(`btn-outline-${this.type}`);
      } else {
        this.classList.push(`btn-${this.type}`);
      }
    }

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.type;
    delete this.attributes.disabled;
    delete this.attributes.size;
    delete this.attributes.outline;
    delete this.attributes.attrMenu;
    delete this.attributes.title;
    delete this.attributes.group;
  }

  render() {
    const { children, title, attrMenu } = this.props;

    return (
      <div className={this.group}>
        <button {...this.attributes} className={toString([...this.classList])} data-toggle='dropdown'>
          {title}
        </button>
        <div {...attrMenu} className={toString(['dropdown-menu', attrMenu ? attrMenu.className : ''])}>
          {children}
        </div>
      </div>
    );
  }
}

export const DropDivider = props => <div {...props} className={toString(['dropdown-divider', props.className || ''])} />;

export const DropHeader = props => <div {...props} className={toString(['dropdown-header', props.className || ''])}>{props.children}</div>;

export const DropText = props => <span {...props} className={toString(['dropdown-item-text', props.className || ''])}>{props.children}</span>;

export class DropLink extends Component {
  constructor(props) {
    super(props);
    this.classList = ['btn', 'btn-link', 'dropdown-item'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { disabled, actived } = this.props;

    this.disabled = disabled ? 'disabled' : '';
    this.actived = actived ? 'active' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.disabled) this.classList.push(this.disabled);
    if (this.actived) this.classList.push(this.actived);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.disabled;
    delete this.attributes.actived;
    delete this.attributes.onClick;
  }

  render() {
    const { children, onClick } = this.props;

    return (
      <button {...this.attributes} className={toString([...this.classList])} onClick={onClick}>
        {children}
      </button>
    );
  }
}
