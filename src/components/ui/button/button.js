import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonsStyles = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 30px;
  background: black;
  color: white;
  border: 1px solid #414141;
  transition: 0.3s;
  
  &:hover {
    color: ${props => props.secondary ? 'white' : '#414141'}
    background: ${props => props.secondary ? '#414141' : 'white'};
    border: 1px solid #414141;
  }
  
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Button = ({id, onClick, disabled, type, children, secondary}) =>
  <ButtonsStyles
    id={id}
    onClick={onClick}
    disabled={disabled}
    type={type}
    secondary={secondary}
  >
    {children}
  </ButtonsStyles>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  disabled: false,
  onClick: () => null,
  type: 'button'
};

export default Button;
