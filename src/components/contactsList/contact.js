import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const name = contact =>`${contact.name.first} ${contact.name.last}`;

const ContactItem = styled.li`
  padding: 20px;
  border-radius: 8px;
  background: #f6f6f6;
  list-style-type: none;
`;

const Image = styled.img `
  display: block;
  width: 100%;
  max-width: 128px;
  margin: 0 auto 10px;
  border-radius: 100%;
`;

const Name = styled.span `
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  color: #414141;
  word-break: break-word;
`;

const Data = styled.a `
  display: block;
  margin-bottom: 5px;
  color: #414141;
  word-break: break-word;
`;

const Contact = ({contact}) =>
  <ContactItem>
    <figure>
      <Image
        src={contact.picture.large}
        alt={name(contact)}
      />
    </figure>
    <Name>{name(contact)}</Name>
    <Data href={`tel:${contact.cell}`}>Cell: {contact.cell}</Data>
    <Data href={`mailto:${contact.email}`}>{contact.email}</Data>
  </ContactItem>;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }),
    email: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired
  }).isRequired,
};

export default Contact;