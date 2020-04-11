import React, { Component } from 'react';
import styled from 'styled-components';
import { toString } from '../constants';

export const BreadCrumb = props => {
  const classNames = ['breadcrumb'];
  if (props.className) classNames.push(props.className);

  const attributes = { ...props };

  return (
    <ul {...attributes} className={toString([...classNames])}>
      {props.children}
    </ul>
  );
}

export class BreadCrumbItem extends Component {
  constructor(props) {
    super(props);
    this.childrens = props.children;
    this.classNames = ['btn', 'btn-link'];
    if (props.className) this.classNames.push(this.className);

    this.attributes = { ...props };
    delete this.attributes.url;
    delete this.attributes.state;
    delete this.attributes.redirectFunction;
  }

  render() {
    const { redirect, url, state } = this.props;

    if (!redirect || !url) return null;

    return (
      <li className='breadcrumb-item'>
        <ButtonLink
          {...this.attributes}
          type='button'
          className={toString([...this.classNames])}
          onClick={() => redirect(url, state)}>
          {this.childrens}
        </ButtonLink>
      </li>
    )
  }
}

const ButtonLink = styled.button`
  padding-left: 0;
  padding-right: 0;

  :hover, :focus {
    text-decoration: none;
  }
`;
