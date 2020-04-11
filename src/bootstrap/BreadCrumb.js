import React, { Component } from 'react';
import styled from 'styled-components';
import { toString } from '../constants';

export class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.classNames = ['breadcrumb'];
    if (props.className) this.classNames.push(this.className);

    this.attributes = { ...props };
    delete this.attributes.navigation;
    delete this.attributes.redirectFunction;
  }

  render() {
    const { navigation, redirectFunction } = this.props;

    return (
      <ul {...this.attributes} className={toString([...this.classNames])}>
        {navigation.map((item, index) => {
          const linkClassNames = ['btn', 'btn-link'];
          if (item.className) linkClassNames.push(item.className);
          const linkAttributes = { ...item };
          delete linkAttributes.title;

          return (
            <li key={index} className='breadcrumb-item'>
              <ButtonLink
                {...linkAttributes}
                type='button'
                className={toString([...linkClassNames])}
                onClick={() => redirectFunction(item.url, item.state)}>
                {item.title}
              </ButtonLink>
            </li>
          )
        })}
      </ul>
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
