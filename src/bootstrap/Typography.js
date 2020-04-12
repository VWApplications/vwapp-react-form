import React, { Component } from 'react';
import { toString } from '../constants';

export class Title extends Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };

    this.__deleteAttributes();
  }

  __deleteAttributes = () => {
    delete this.attributes.size;
    delete this.attributes.subtitle;
  }

  __getElement = () => {
    const { children, size, subtitle } = this.props;

    switch (size) {
      case 'xs':
        return <h5 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h5>;
      case 'sm':
        return <h4 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h4>;
      case 'md':
        return <h3 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h3>;
      case 'lg':
        return <h2 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h2>;
      case 'xl':
        return <h1 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h1>;
      default:
        return <h1 {...this.attributes}>{children} {subtitle ? <small>{subtitle}</small> : ''}</h1>;
    }
  }

  render() {
    return this.__getElement();
  }
}

export const BlockQuote = props => (
  <blockquote {...props} className={toString(['blockquote-footer', props.className || ''])}>
    {props.children}
  </blockquote>
);

export const Box = props => <kbd {...props}>{props.children}</kbd>;

export const Json = props => {
  const attributes = { ...props };
  delete attributes.values;

  return <pre {...attributes}>{JSON.stringify(props.values, undefined, 2)}</pre>
}

export const Line = props => <hr {...props} />;

export const BreakLine = props => <br {...props} />;
