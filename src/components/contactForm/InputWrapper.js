import React from "react";
import Label from './Label';
import Input from './Input';
import styled from "styled-components";
// import PropTypes from "prop-types";

const InputWrapperStyles = styled.div`
  margin-bottom: 20px;
`;

const InputWrapper = ({
  input,
  label,
  type,
  id,
  meta: { touched, error, warning }
}) =>
  <InputWrapperStyles>
    <Label id={id}>
      {label}
    </Label>
    <div>
      <Input id={id} {...input} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </InputWrapperStyles>;

export default InputWrapper;
