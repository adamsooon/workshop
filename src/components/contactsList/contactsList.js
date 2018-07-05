import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Contact from './contact';

const List = styled.ul`
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 240px 240px 240px;
    grid-gap: 15px;
    justify-content: center;
    padding: 0;
  }
  @media (min-width: 1240px) {
    grid-template-columns: 260px 260px 260px 260px;
  }
`;

const ContactsList = props => {
  if (props.contacts === 0) {
    return null;
  }
  return (
    <List>
      {props.contacts.map(contact =>
        <Contact contact={contact} key={contact.email} />
      )}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array
};

ContactsList.defautProps = {
  contacts: []
};

export default ContactsList;
