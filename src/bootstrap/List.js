import React from 'react';
import { toString } from '../constants';

var link = false;

export const List = props => {
  const attributes = { ...props };

  const clean = props.clean ? 'list-group-flush' : '';
  const horizontal = props.horizontal ? 'list-group-horizontal' : '';
  link = props.link;

  const classNames = ['list-group'];
  if (clean) classNames.push(clean);
  if (horizontal) classNames.push(horizontal);
  if (props.className) classNames.push(props.className);

  delete attributes.clean;
  delete attributes.horizontal;
  delete attributes.link;

  if (link) {
    return (
      <div {...attributes} className={toString([...classNames])}>
        {props.children}
      </div>
    )
  }

  return <ul {...attributes} className={toString([...classNames])}>{props.children}</ul>
}

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;

    if (link) {
      this.classNames = ['btn', 'btn-link', 'list-group-item', 'list-group-item-action', 'text-dark'];
    } else {
      const actived = props.actived ? 'active' : '';
      this.classNames = ['list-group-item', 'text-dark'];
      if (actived) this.classNames.push(actived);
    }

    const disabled = props.disabled ? 'disabled' : '';
    const className = props.className;

    if (disabled) this.className.push(disabled);
    if (className) this.classNames.push(className);

    delete this.attributes.actived;
    delete this.attributes.disabled;
    delete this.attributes.handleClick;
  }

  render() {
    const { handleClick } = this.props;

    if (link) {
      if (!handleClick) return null;

      return (
        <button
          {...this.attributes}
          className={toString([...this.classNames])}
          onClick={handleClick}>
          {this.childrens}
        </button>
      )
    }

    return <li {...this.attributes} className={toString([...this.classNames])}>{this.childrens}</li>;
  }
}
