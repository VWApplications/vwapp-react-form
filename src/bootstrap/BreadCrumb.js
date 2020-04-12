import React, { Component, Children, cloneElement } from 'react';
import { BreadCrumbLink } from '../styles';
import { toString } from '../constants';

export class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.classList = ['breadcrumb'];
    this.attributes = { ...props };

    this.__populateClassList();
    this.__deleteAttributes();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.redirect;
  }

  __passAttrToChildren = () => {
    const { children, redirect } = this.props;

    return Children.map(children, (child, index) => {
      return cloneElement(child, { index, redirect });
    });
  }

  render() {
    const children = this.__passAttrToChildren();

    return (
      <ul {...this.attributes} className={toString([...this.classList])}>
        {children}
      </ul>
    );
  }
}

export class BreadCrumbItem extends Component {
  constructor(props) {
    super(props);
    this.classList = ['btn', 'btn-link'];
    this.attributes = { ...props };

    this.__populateClassList();
    this.__deleteAttributes();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.url;
    delete this.attributes.state;
    delete this.attributes.redirect;
  }

  render() {
    const { redirect, url, state, children } = this.props;

    if (!redirect || !url) return null;

    return (
      <li className='breadcrumb-item'>
        <BreadCrumbLink
          {...this.attributes}
          type='button'
          className={toString([...this.classList])}
          onClick={() => redirect(url, state)}>
          {children}
        </BreadCrumbLink>
      </li>
    )
  }
}
