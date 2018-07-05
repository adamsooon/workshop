import React from 'react';
import PropTypes from 'prop-types';

const name = contact =>`${contact.name.first} ${contact.name.last}`;

const Contact = ({contact}) =>
  <li className="contact-item">
    <figure>
      <img
        className="contact-item-photo"
        src={contact.picture.large}
        alt={name(contact)}
      />
    </figure>
    <span className="contact-item-name">{name(contact)}</span>
    <a href={`tel:${contact.cell}`} className="contact-item-data">Cell: {contact.cell}</a>
    <a href={`mailto:${contact.email}`} className="contact-item-data">{contact.email}</a>
  </li>;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;