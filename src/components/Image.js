import React from 'react';
import style from '../constants';

export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.className = props.className || '';
    this.rounded = props.rounded ? 'rounded' : '';
    this.circle = props.circle ? 'rounded-circle' : '';
    this.thumbnail = props.thumbnail ? 'img-thumbnail' : '';
    this.center = props.center ? 'mx-auto d-block' : '';
    this.childrens = props.children;

    this.styles = [];
    if (this.rounded) this.styles.push(this.rounded);
    if (this.circle) this.styles.push(this.circle);
    if (this.thumbnail) this.styles.push(this.thumbnail);
    if (this.center) this.styles.push(this.center);

    delete this.state.rounded;
    delete this.state.circle;
    delete this.state.thumbnail;
    delete this.state.center;
  }

  render() {
    if (this.childrens) {
      return <img {...this.state} className={style(['img-fluid', ...this.styles, this.className])}>{this.childrens}</img>;
    } else {
      return <img {...this.state} className={style(['img-fluid', ...this.styles, this.className])} />;
    }
  }
}
