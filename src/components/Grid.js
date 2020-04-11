import React from 'react';
import style from '../constants';

export const Row = props => (
  <div
    {...props}
    className={style(['row', props.className ? props.className : ''])}>
    {props.children}
  </div>
);

export const Col = props => {
  const attributes = { ...props };
  delete attributes.screens;
  delete attributes.sizes;

  if (!props.screens || !props.sizes) {
    return <div {...attributes} className={style(['col', props.className || ''])}>{props.children}</div>;
  }

  if (props.screens.length !== props.sizes.length) {
    return <div {...attributes} className={style(['col', props.className || ''])}>{props.children}</div>;
  }

  let className = '';
  let firstScreen = props.screens[0];
  for (let i = 0; i < props.screens.length; i++) {
    if (props.screens[i] === firstScreen) {
      if (i !== 0) { className += ' '; }
      if (props.screens[i] === 'xs') {
        className += `col-${props.sizes[i]}`;
      } else {
        className += `col-${props.screens[i]}-${props.sizes[i]}`;
      }
    }

    firstScreen = props.screens[i + 1];
  }

  return <div {...attributes} className={style([className, props.className || ''])}>{props.children}</div>;
}
