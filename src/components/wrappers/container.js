import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = ({children}) =>
  <Wrapper>{children}</Wrapper>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;