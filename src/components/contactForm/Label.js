import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelItem = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Label = props => 
<LabelItem htmlFor={props.id} >
  {props.children}
</LabelItem>

Label.propTypes = { 
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Label;
