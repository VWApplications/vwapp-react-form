import React, { Component, Children, cloneElement } from 'react';
import { toString } from '../constants';

export class List extends Component {
  constructor(props) {
    super(props);
    this.classList = ['list-group'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { clean, horizontal } = this.props;

    this.clean = clean ? 'list-group-flush' : '';
    this.horizontal = horizontal ? 'list-group-horizontal' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.clean) this.classList.push(this.clean);
    if (this.horizontal) this.classList.push(this.horizontal);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.clean;
    delete this.attributes.horizontal;
    delete this.attributes.link;
  }

  __passAttrToChildren = () => {
    const { children, link } = this.props;

    return Children.map(children, (child, index) => {
      return cloneElement(child, { index, link });
    });
  }

  render() {
    const { link } = this.props;

    const children = this.__passAttrToChildren();

    if (link) {
      return (
        <div {...this.attributes} className={toString([...this.classList])}>
          {children}
        </div>
      )
    }

    return <ul {...this.attributes} className={toString([...this.classList])}>{children}</ul>
  }
}

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.classList = ['list-group-item', 'text-dark'];
    this.attributes = { ...props };

    if (props.link) {
      this.classList = ['btn', 'btn-link', 'list-group-item', 'list-group-item-action', 'text-dark'];
    }

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { disabled, actived } = this.props;

    this.actived = actived ? 'active' : '';
    this.disabled = disabled ? 'disabled' : '';
  }

  __populateClassList = () => {
    const { className, link } = this.props;

    if (!link) {
      if (this.actived) this.classList.push(this.actived);
    }

    if (this.disabled) this.classList.push(this.disabled);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.actived;
    delete this.attributes.disabled;
    delete this.attributes.handleClick;
    delete this.attributes.link;
  }

  render() {
    const { handleClick, children, link } = this.props;

    if (link) {
      if (!handleClick) return null;

      return (
        <button
          {...this.attributes}
          className={toString([...this.classList])}
          onClick={handleClick}>
          {children}
        </button>
      )
    }

    return <li {...this.attributes} className={toString([...this.classList])}>{children}</li>;
  }
}
