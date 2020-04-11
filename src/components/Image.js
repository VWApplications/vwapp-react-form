import React from 'react';
import style from '../constants';

export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
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
    if (this.className) this.styles.push(this.className);

    delete this.attributes.rounded;
    delete this.attributes.circle;
    delete this.attributes.thumbnail;
    delete this.attributes.center;
  }

  render() {
    if (this.childrens) {
      return <img {...this.attributes} className={style(['img-fluid', ...this.styles])}>{this.childrens}</img>;
    } else {
      return <img {...this.attributes} className={style(['img-fluid', ...this.styles])} />;
    }
  }
}
