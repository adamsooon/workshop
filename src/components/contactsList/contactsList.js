import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Contact from './contact';

const List = styled.ul`
  display: grid;
  grid-gap: 15px 0;
  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 240px);
    grid-gap: 15px;
    justify-content: center;
    padding: 0;
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(4, 260px);
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
