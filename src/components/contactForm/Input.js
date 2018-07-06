import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBox = styled.input`
  width: 200px;
  height: 40px;
`;

const Input = props =>
  <InputBox
    id={props.id}
    name={props.name}
    onChange={props.onChange}
    value={props.value}
    type={props.type}
  />;

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};

InputBox.defaultProps = {
  type: 'text',
  value: '',
  id: '',
  name: ''
};

export default Input;
