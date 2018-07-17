import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import RFReactSelect from "./Select";
import Message from "./Message";
import styled from "styled-components";

const SelecttWrapperStyles = styled.div`
  margin-bottom: 20px;
  
  & .Select {
    width: 100%;
  
    @media (min-width: 767px) {
      width: 300px;
    }
  }
`;

const SelectWrapper = ({
  input,
  label,
  id,
  meta: { touched, error, warning },
  multi,
  options
}) => (
  <SelecttWrapperStyles>
    <Label id={id}>{label}</Label>
    <div>
      <RFReactSelect input={input} options={options} multi={multi}/>
      {touched &&
        ((error && <Message error>{error}</Message>) ||
          (warning && <Message warning>{warning}</Message>))}
    </div>
  </SelecttWrapperStyles>
);

SelectWrapper.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  multi: PropTypes.bool,
};

SelectWrapper.defaultProps = {
  multi: false
};

export default SelectWrapper;
