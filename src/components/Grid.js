import React from 'react';

export const Row = props => <div {...props} className='row'>{props.children}</div>;

export const Col = props => {
  const state = { ...props };
  delete state.screens;
  delete state.sizes;

  if (!props.screens || !props.sizes) {
    return <div {...state} className='col'>{props.children}</div>;
  }

  if (props.screens.length !== props.sizes.length) {
    return <div {...state} className='col'>{props.children}</div>;
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

  return <div {...state} className={className}>{props.children}</div>;
}
