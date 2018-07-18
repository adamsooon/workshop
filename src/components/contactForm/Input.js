import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputItem = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  border-color: ${props => props.error ? 'red' : 'black'};
  
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
  error: PropTypes.any.isRequired,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  id: '',
  name: ''
};

export default Input;
