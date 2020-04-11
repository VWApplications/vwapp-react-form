import React from 'react';
import { toString } from '../constants';

export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = ['img-fluid'];
    this.childrens = props.children;
    this.attributes = { ...props };

    const rounded = props.rounded ? 'rounded' : '';
    const circle = props.circle ? 'rounded-circle' : '';
    const thumbnail = props.thumbnail ? 'img-thumbnail' : '';
    const center = props.center ? 'mx-auto d-block' : '';

    if (rounded) this.classNames.push(rounded);
    if (circle) this.classNames.push(circle);
    if (thumbnail) this.classNames.push(thumbnail);
    if (center) this.classNames.push(center);
    if (props.className) this.classNames.push(props.className);

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
