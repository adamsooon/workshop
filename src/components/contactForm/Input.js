import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputItem = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
`;

const Input = props =>
  <InputItem
    id={props.id}
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
};

Input.defaultProps = {
  type: 'text',
  value: '',
  id: '',
  name: ''
};

export default Input;
