import React from 'react';

export const Container = props => {
  const state = { ...props };

  const screen = props.screen ? `-${props.screen}` : '';
  delete state.screen;

  const fluid = props.fluid && !props.screen ? '-fluid' : '';
  delete state.fluid;

  const className = props.className ? ` ${props.className}` : '';
  delete state.className;

  return (
    <div {...state} className={`container${screen}${fluid}${className}`}>
      {props.children}
    </div>
  );
}
