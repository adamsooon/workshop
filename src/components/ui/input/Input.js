import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputItem = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 16px;
  border: 1px solid ${props => props.error ? 'red' : 'black'};
  &:focus {
    border: 1px solid rgba(81, 203, 238, 1);
  }
  
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Input = props =>
  <InputItem
    id={props.id}
    error={props.error}
    name={props.name}
    onChange={props.onChange}
    value={props.value}
    type={props.type}
    placeholder={props.placeholder}
  />;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.any,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  value: '',
  id: '',
  name: '',
  error: false,
  placeholder: ''
};

export default Input;
