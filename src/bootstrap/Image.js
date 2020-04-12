import React, { Component } from 'react';
import { toString } from '../constants';

export class Image extends Component {
  constructor(props) {
    super(props);
    this.classList = ['img-fluid'];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { rounded, circle, thumbnail, center } = this.props;

    this.rounded = rounded ? 'rounded' : '';
    this.circle = circle ? 'rounded-circle' : '';
    this.thumbnail = thumbnail ? 'img-thumbnail' : '';
    this.center = center ? 'mx-auto d-block' : '';
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (this.rounded) this.classList.push(this.rounded);
    if (this.circle) this.classList.push(this.circle);
    if (this.thumbnail) this.classList.push(this.thumbnail);
    if (this.center) this.classList.push(this.center);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.rounded;
    delete this.attributes.circle;
    delete this.attributes.thumbnail;
    delete this.attributes.center;
  }

  render() {
    const { children } = this.props;

    if (children) {
      return <img {...this.attributes} className={toString([...this.classList])}>{children}</img>;
    } else {
      return <img {...this.attributes} className={toString([...this.classList])} />;
    }
  }
}
