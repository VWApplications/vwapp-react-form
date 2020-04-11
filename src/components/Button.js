import React from 'react';
import style from '../constants';

export const ButtonGroup = props => {
  const type = props.vertical ? 'btn-group-vertical' : 'btn-group';
  const size = props.size ? `btn-group-${props.size}` : '';
  const styles = [];
  if (props.className) styles.push(props.className);
  if (size) styles.push(size);

  return (
    <div className={style([type, ...styles])}>
      {props.children}
    </div>
  );
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.childrens = props.children;
    this.className = props.className;

    this.type = props.type;
    this.outline = props.outline;
    this.disabled = props.disabled ? 'disabled' : '';
    this.size = props.size ? `btn-${props.size}` : '';
    this.dropdown = props.dropdown;

    this.styles = [];
    if (this.className) this.styles.push(this.className);
    if (this.disabled) this.styles.push(this.disabled);
    if (this.size) this.styles.push(this.size);
    if (this.type) {
      if (this.outline) {
        this.styles.push(`btn-outline-${this.type}`);
      } else {
        this.styles.push(`btn-${this.type}`);
      }
    }

    delete this.state.type;
    delete this.state.disabled;
    delete this.state.size;
    delete this.state.outline;
    delete this.state.dropdown;
  }

  render() {
    let btn = (
      <button {...this.state} className={style(['btn', ...this.styles])}>
        {this.childrens}
      </button>
    );

    if (this.dropdown) {
      const styles = [];
      if (this.dropdown.className) styles.push(this.dropdown.className);
      const attributes = { ...this.dropdown };
      delete attributes.items;

      btn = (
        <div className='btn-group'>
          <button
            {...this.state}
            className={style(['btn', ...this.styles, 'dropdown-toggle dropdown-toggle-split'])}
            data-toggle='dropdown'
          />
          <div {...this.attributes} className={style(['dropdown-menu', ...styles])}>
            {this.dropdown.items.map((item, index) => {
              const styles = [];
              if (item.className) styles.push(item.className);

              const attributes = { ...item };
              delete attributes.title;

              return (
                <button key={index} {...attributes} className={style(['btn', 'btn-link', 'dropdown-item', ...styles])}>
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
