import React from 'react';
import style from '../constants';

export const ProgressBar = props => {
  const styles = {
    boxShadow: '1px 1px 5px inset grey',
    border: '1px solid #bfbfd6',
    margin: '3px'
  }

  const classNames = ['progress'];
  if (props.className) classNames.push(props.className);

  return (
    <div
      {...props}
      className={style([...classNames])}
      style={styles}>
      {props.children}
    </div>
  )
}

export class ProgressBarSlice extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.childrens = props.children;
    this.className = props.className;
    this.type = props.type ? `bg-${props.type}` : '';
    this.progress = props.progress;

    this.classNames = ['progress-bar', 'progress-bar-striped', 'progress-bar-animated'];
    if (this.type) this.classNames.push(this.type);
    if (this.className) this.classNames.push(this.className);

    delete this.attributes.type;
    delete this.attributes.progress;
  }

  render() {
    return (
      <span
        {...this.attributes}
        className={style([...this.classNames])}
        style={{ width: `${this.progress}%` }}>
        {this.childrens}
      </span>
    )
  }
}
