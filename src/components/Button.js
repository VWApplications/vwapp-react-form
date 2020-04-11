import React from 'react';
import { toString } from '../constants';

export const ButtonGroup = props => {
  const type = props.vertical ? 'btn-group-vertical' : 'btn-group';
  const size = props.size ? `btn-group-${props.size}` : '';

  const classNames = [type];
  if (props.className) classNames.push(props.className);
  if (size) classNames.push(size);

  return (
    <div className={toString([...classNames])}>
      {props.children}
    </div>
  );
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;
    this.className = props.className;

    this.type = props.type;
    this.outline = props.outline;
    this.disabled = props.disabled ? 'disabled' : '';
    this.size = props.size ? `btn-${props.size}` : '';
    this.dropdown = props.dropdown;

    this.classNames = ['btn'];
    if (this.className) this.classNames.push(this.className);
    if (this.disabled) this.classNames.push(this.disabled);
    if (this.size) this.classNames.push(this.size);
    if (this.type) {
      if (this.outline) {
        this.classNames.push(`btn-outline-${this.type}`);
      } else {
        this.classNames.push(`btn-${this.type}`);
      }
    }

    delete this.attributes.type;
    delete this.attributes.disabled;
    delete this.attributes.size;
    delete this.attributes.outline;
    delete this.attributes.dropdown;
  }

  render() {
    let btn = (
      <button {...this.attributes} className={toString([...this.classNames])}>
        {this.childrens}
      </button>
    );

    if (this.dropdown) {
      const menuClassNames = ['dropdown-menu'];
      if (this.dropdown.className) menuClassNames.push(this.dropdown.className);

      const menuAttributes = { ...this.dropdown };
      delete menuAttributes.items;

      btn = (
        <div className='btn-group'>
          <button
            {...this.attributes}
            className={toString([...this.classNames, 'dropdown-toggle', 'dropdown-toggle-split'])}
            data-toggle='dropdown'
          />
          <div {...menuAttributes} className={toString([...menuClassNames])}>
            {this.dropdown.items.map((item, index) => {
              const classNames = ['btn', 'btn-link', 'dropdown-item'];
              if (item.className) classNames.push(item.className);

              const attributes = { ...item };
              delete attributes.title;

              return (
                <button key={index} {...attributes} className={toString([...classNames])}>
                  {item.title}
                </button>
              )
            })}
          </div>
        </div>
      )
    }

    return btn;
  }
}
