import React from 'react';

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.text = props.children;
    this.size = props.size;
    this.subtitle = props.subtitle;

    delete this.state.size;
    delete this.state.subtitle;
  }

  __getElement = () => {
    switch (this.size) {
      case 'xs':
        return <h5 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h5>;
      case 'sm':
        return <h4 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h4>;
      case 'md':
        return <h3 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h3>;
      case 'lg':
        return <h2 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h2>;
      case 'xl':
        return <h1 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h1>;
      default:
        return <h1 {...this.state}>{this.text} {this.subtitle ? <small>{this.subtitle}</small> : ''}</h1>;
    }
  }

  render() {
    return this.__getElement();
  }
}

export const BlockQuote = props => <blockquote {...props} className='blockquote-footer'>{props.children}</blockquote>;
export const Box = props => <kbd {...props}>{props.children}</kbd>;
export const Json = props => {
  const state = { ...props };
  delete state.values;
  return <pre {...state}>{JSON.stringify(props.values, undefined, 2)}</pre>
}
export const Line = props => (<hr {...props} />)
export const BreakLine = props => (<br {...props} />)
