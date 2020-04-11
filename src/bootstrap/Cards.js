import React from 'react';
import { toString } from '../constants';

export const CardGroup = props => {
  const attributes = { ...props };
  delete attributes.spaces;

  const spaces = props.spaces ? 'card-deck' : 'card-group';

  const classNames = [spaces];
  if (props.className) classNames.push(props.className);

  return <div {...attributes} className={toString([...classNames])}>{props.children}</div>;
}

export const Card = props => {
  const attributes = { ...props };
  const classNames = ['card', 'text-dark'];
  if (props.className) classNames.push(props.className);

  return <div {...attributes} className={toString([...classNames])}>{props.children}</div>;
}

export const CardHeader = props => {
  const attributes = { ...props };
  const classNames = ['card-header'];
  if (props.className) classNames.push(props.className);

  return <div {...attributes} className={toString([...classNames])}>{props.children}</div>;
}

export const CardBody = props => {
  const attributes = { ...props };
  const classNames = ['card-body'];
  if (props.className) classNames.push(props.className);

  return <div {...attributes} className={toString([...classNames])}>{props.children}</div>;
}

export const CardFooter = props => {
  const attributes = { ...props };
  const classNames = ['card-footer'];
  if (props.className) classNames.push(props.className);

  return <div {...attributes} className={toString([...classNames])}>{props.children}</div>;
}
