import React from 'react';
import PropTypes from 'prop-types';
import Contact from "./contact"

const ContactsList = props => {
  if (props.contacts === 0) {
    return null;
  }
  return (
    <ul className="contact-list">
      {props.contacts.map(contact =>
        <Contact contact={contact} key={contact.email}/>
      )}
    </ul>
    )
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

ContactsList.defautProps = {
  contacts: [],
};

export default ContactsList;