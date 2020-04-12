import React, { Component } from 'react';
import { toString } from '../constants';

export const TableLine = props => <tr {...props}>{props.children}</tr>;

export class TableCol extends Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };

    this.__deleteAttributes();
  }

  __deleteAttributes = () => {
    delete this.attributes.bold;
  }

  render() {
    const { bold, children } = this.props;

    if (bold) {
      return <th {...this.attributes}>{children}</th>;
    }

    return <td {...this.attributes}>{children}</td>;
  }
}

export class Table extends Component {
  constructor(props) {
    super(props);
    this.classList = ['table'];
    this.attrTHeader = props.attrTHeader;
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { striped, bordered, borderless, hover, dark, headerDark, small } = this.props;

    this.striped = striped ? 'table-striped' : '';
    this.bordered = bordered ? 'table-bordered' : '';
    this.borderless = borderless ? 'table-borderless' : '';
    this.hover = hover ? 'table-hover' : '';
    this.dark = dark ? 'table-dark' : '';
    this.headerDark = headerDark ? 'thead-dark' : '';
    this.small = small ? 'table-sm' : '';

    if (this.headerDark) {
      if (!this.attrTHeader) { this.attrTHeader = {} };

      this.attrTHeader.className = toString([this.headerDark, this.attrTHeader.className || '']);
    }
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.striped) this.classList.push(this.striped);
    if (this.bordered) this.classList.push(this.bordered);
    if (this.borderless) this.classList.push(this.borderless);
    if (this.hover) this.classList.push(this.hover);
    if (this.dark) this.classList.push(this.dark);
    if (this.small) this.classList.push(this.small);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.headers;
    delete this.attributes.striped;
    delete this.attributes.bordered;
    delete this.attributes.borderless;
    delete this.attributes.hover;
    delete this.attributes.dark;
    delete this.attributes.headerDark;
    delete this.attributes.small;
    delete this.attributes.attrTHeader;
    delete this.attributes.attrHeaderLine;
    delete this.attributes.attrHeaderItens;
    delete this.attributes.attrTBody;
  }

  render() {
    const { attrHeaderLine, headers, attrHeaderItens, attrTBody, children } = this.props;

    return (
      <div className='table-responsive'>
        <table {...this.attributes} className={toString([...this.classList])}>
          <thead {...this.attrTHeader}>
            <tr {...attrHeaderLine}>
              {headers.map((header, index) => (
                <th key={index} {...attrHeaderItens}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody {...attrTBody}>
            {children}
          </tbody>
        </table>
      </div>
    );
  }
}
