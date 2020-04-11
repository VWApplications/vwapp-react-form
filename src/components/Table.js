import React from 'react';
import style from '../constants';

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
    this.headers = props.headers;
    this.className = props.className || '';
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
    this.childrens = props.children;

    if (this.headerDark) {
      if (!this.attrTHeader) { this.attrTHeader = {} };

      this.attrTHeader.className = style([this.headerDark, this.attrTHeader.className ? this.attrTHeader.className : '']);
    }

    this.styles = [];
    if (this.striped) this.styles.push(this.striped);
    if (this.bordered) this.styles.push(this.bordered);
    if (this.borderless) this.styles.push(this.borderless);
    if (this.hover) this.styles.push(this.hover);
    if (this.dark) this.styles.push(this.dark);
    if (this.small) this.styles.push(this.small);
    if (this.className) this.styles.push(this.className);

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
        <table {...this.attributes} className={style(['table', ...this.styles])}>
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