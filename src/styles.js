import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CustomJson = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px 0;
`;

export const CustomFieldset = styled.fieldset`
    padding: 0 20px;
    margin: 10px;
    border: 1px solid #ccc;
    margin-bottom: 30px;
    > legend {
        margin-bottom: 0;
    }
    display: ${props => props.show ? 'block' : 'none'};
`;

export const ImageLabel = styled(Form.Label)`
  width: 100%;
  text-align: center;
`;
