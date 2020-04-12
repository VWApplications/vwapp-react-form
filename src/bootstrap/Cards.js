import React, { Component } from 'react';
import { toString } from '../constants';

export class CardGroup extends Component {
  constructor(props) {
    super(props);
    this.classList = [];
    this.attributes = { ...props };

    this.__setAttributes();
    this.__populateClassList();
    this.__deleteAttributes();
  }

  __setAttributes = () => {
    const { spaces } = this.props;

    this.spaces = spaces ? 'card-deck' : 'card-group';
  }

  __populateClassList = () => {
    const { className } = this.props;

    this.classList.push(this.spaces);
    if (className) this.classList.push(className);
  }

  __deleteAttributes = () => {
    delete this.attributes.spaces;
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}

export class Card extends Component {
  constructor(props) {
    super(props);
    this.classList = ['card', 'text-dark'];
    this.attributes = { ...props };

    this.__populateClassList();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}

export class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.classList = ['card-header'];
    this.attributes = { ...props };

    this.__populateClassList();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}

export class CardBody extends Component {
  constructor(props) {
    super(props);
    this.classList = ['card-body'];
    this.attributes = { ...props };

    this.__populateClassList();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}

export class CardFooter extends Component {
  constructor(props) {
    super(props);
    this.classList = ['card-footer'];
    this.attributes = { ...props };

    this.__populateClassList();
  }

  __populateClassList = () => {
    const { className } = this.props;

    if (className) this.classList.push(className);
  }

  render() {
    const { children } = this.props;

    return (
      <div {...this.attributes} className={toString([...this.classList])}>
        {children}
      </div>
    );
  }
}
