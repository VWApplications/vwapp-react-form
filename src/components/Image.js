import React from 'react';
import { toString } from '../constants';

export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.className = props.className || '';
    this.childrens = props.children;

    this.rounded = props.rounded ? 'rounded' : '';
    this.circle = props.circle ? 'rounded-circle' : '';
    this.thumbnail = props.thumbnail ? 'img-thumbnail' : '';
    this.center = props.center ? 'mx-auto d-block' : '';

    this.classNames = ['img-fluid'];
    if (this.rounded) this.classNames.push(this.rounded);
    if (this.circle) this.classNames.push(this.circle);
    if (this.thumbnail) this.classNames.push(this.thumbnail);
    if (this.center) this.classNames.push(this.center);
    if (this.className) this.classNames.push(this.className);

    delete this.attributes.rounded;
    delete this.attributes.circle;
    delete this.attributes.thumbnail;
    delete this.attributes.center;
  }

  render() {
    if (this.childrens) {
      return <img {...this.attributes} className={toString([...this.classNames])}>{this.childrens}</img>;
    } else {
      return <img {...this.attributes} className={toString([...this.classNames])} />;
    }
  }
}
