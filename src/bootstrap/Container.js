import React from 'react';

export const Container = props => {
  const attributes = { ...props };

  const screen = props.screen ? `-${props.screen}` : '';
  const fluid = props.fluid && !props.screen ? '-fluid' : '';
  const className = props.className ? ` ${props.className}` : '';

  delete attributes.screen;
  delete attributes.fluid;
  delete attributes.className;

  return (
    <main {...attributes} className={`container${screen}${fluid}${className}`}>
      {props.children}
    </main>
  );
}
