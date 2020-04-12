import React, { Component } from 'react';
import { BreadCrumbLink } from '../styles';
import { toString } from '../constants';

export class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.classList = ['breadcrumb'];
    this.attributes = { ...props };

    this.__populateClassList();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

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
    this.childrens = props.children;
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
    delete this.attributes.redirectFunction;
  }

  render() {
    const { redirect, url, state } = this.props;

    if (!redirect || !url) return null;

    return (
      <li className='breadcrumb-item'>
        <BreadCrumbLink
          {...this.attributes}
          type='button'
          className={toString([...this.classList])}
          onClick={() => redirect(url, state)}>
          {this.childrens}
        </BreadCrumbLink>
      </li>
    )
  }
}
