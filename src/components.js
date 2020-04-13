import React from 'react';
import { CustomJson, CustomFieldset } from './styles';

export const Json = props => <CustomJson {...props}>{JSON.stringify(props.values, 0, 2)}</CustomJson>;

export const Fieldset = ({ children, title, show = true }) => (
  <CustomFieldset show={show}>
    <legend style={{ paddingLeft: '5px' }}>{title}</legend><br />
    {children}
  </CustomFieldset>
)
