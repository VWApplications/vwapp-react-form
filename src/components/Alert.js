import React from 'react';
import style from '../constants';

export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.childrens = props.children;
    this.className = props.className;
    this.type = props.type;
    this.dismissible = props.dismissible ? 'alert-dismissible fade show' : '';

    this.styles = [];
    this.closeButton = null;
    if (this.className) this.styles.push(this.className);
    if (this.dismissible) {
      this.closeButton = <button type='button' className='close' data-dismiss='alert'>&times;</button>;
      this.styles.push(this.dismissible);
    }

    delete this.state.type;
    delete this.state.dismissible;
  }

  render() {
    return (
      <div {...this.state} className={style(['alert', `alert-${this.type}`, ...this.styles])}>
        {this.closeButton}
        {this.childrens}
      </div>
    )
  }
}
