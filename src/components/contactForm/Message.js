import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MessageStyles = styled.span`
  display: block;
  padding: 10px 0 0;
  font-size: 12px;
`;

const ErrorStyles = MessageStyles.extend`
  color: red;
`;

const WarningStyles = MessageStyles.extend`
  color: yellow;
`;

const Message = props => {
  if(props.error) return <ErrorStyles>{props.children}</ErrorStyles>;
  else if (props.warning) return <WarningStyles>{props.children}</WarningStyles>
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  warning: PropTypes.node
};

Message.defaultProps = {
  error: false,
  warning: false
}

export default Message;
