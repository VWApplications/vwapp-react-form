import React from 'react';
import { toString } from '../constants';

export const TableLine = props => <tr {...props}>{props.children}</tr>;

export const TableCol = props => {
  const attributes = { ...props };
  delete attributes.bold;

  if (props.bold) {
    return <th {...attributes}>{props.children}</th>;
  }

  return <td {...attributes}>{props.children}</td>;
}

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.className = props.className || '';
    this.childrens = props.children;

    this.headers = props.headers;
    this.striped = props.striped ? 'table-striped' : '';
    this.bordered = props.bordered ? 'table-bordered' : '';
    this.borderless = props.borderless ? 'table-borderless' : '';
    this.hover = props.hover ? 'table-hover' : '';
    this.dark = props.dark ? 'table-dark' : '';
    this.headerDark = props.headerDark ? 'thead-dark' : '';
    this.small = props.small ? 'table-sm' : '';
    this.attrTHeader = props.attrTHeader;
    this.attrHeaderLine = props.attrHeaderLine;
    this.attrHeaderItens = props.attrHeaderItens;
    this.attrTBody = props.attrTBody;

    if (this.headerDark) {
      if (!this.attrTHeader) { this.attrTHeader = {} };

      this.attrTHeader.className = toString([this.headerDark, this.attrTHeader.className || '']);
    }

    this.classNames = ['table'];
    if (this.striped) this.classNames.push(this.striped);
    if (this.bordered) this.classNames.push(this.bordered);
    if (this.borderless) this.classNames.push(this.borderless);
    if (this.hover) this.classNames.push(this.hover);
    if (this.dark) this.classNames.push(this.dark);
    if (this.small) this.classNames.push(this.small);
    if (this.className) this.classNames.push(this.className);

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
    return (
      <div className='table-responsive'>
        <table {...this.attributes} className={toString([...this.classNames])}>
          <thead {...this.attrTHeader}>
            <tr {...this.attrHeaderLine}>
              {this.headers.map((header, index) => (
                <th key={index} {...this.attrHeaderItens}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody {...this.attrTBody}>
            {this.childrens}
          </tbody>
        </table>
      </div>
    );
  }
}
