import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import Input from "../ui/input/Input";
import Message from "./Message";
import styled from "styled-components";

const InputWrapperStyles = styled.div`
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputWrapper = ({
  input,
  label,
  type,
  id,
  meta: { touched, error, warning }
}) => (
  <InputWrapperStyles>
    <Label id={id}>{label}</Label>
    <div>
      <Input
        id={id}
        error={touched && error !== undefined}
        type={type}
        {...input}
      />
      {touched &&
        ((error && <Message error>{error}</Message>) ||
          (warning && <Message warning>{warning}</Message>))}
    </div>
  </InputWrapperStyles>
);

InputWrapper.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default InputWrapper;
