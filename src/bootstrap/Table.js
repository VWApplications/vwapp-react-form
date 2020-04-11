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
    this.classNames = ['table'];
    this.childrens = props.children;
    this.attrTHeader = props.attrTHeader;
    this.attrHeaderLine = props.attrHeaderLine;
    this.attrHeaderItens = props.attrHeaderItens;
    this.attrTBody = props.attrTBody;
    this.headers = props.headers;
    this.attributes = { ...props };

    const striped = props.striped ? 'table-striped' : '';
    const bordered = props.bordered ? 'table-bordered' : '';
    const borderless = props.borderless ? 'table-borderless' : '';
    const hover = props.hover ? 'table-hover' : '';
    const dark = props.dark ? 'table-dark' : '';
    const headerDark = props.headerDark ? 'thead-dark' : '';
    const small = props.small ? 'table-sm' : '';

    if (headerDark) {
      if (!this.attrTHeader) { this.attrTHeader = {} };

      this.attrTHeader.className = toString([headerDark, this.attrTHeader.className || '']);
    }

    if (striped) this.classNames.push(striped);
    if (bordered) this.classNames.push(bordered);
    if (borderless) this.classNames.push(borderless);
    if (hover) this.classNames.push(hover);
    if (dark) this.classNames.push(dark);
    if (small) this.classNames.push(small);
    if (props.className) this.classNames.push(props.className);

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
