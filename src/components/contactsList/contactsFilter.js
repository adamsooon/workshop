/**
 * Created by adampowalisz on 7/5/18.
 */
import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { searchContacts } from "../../actions";

const Input = styled.input `
  width: 100%
  height: 40px;
  margin: 0 0 30px;
  padding: 0 20px;
  border: 1px solid #414141;
  border-radius: 16px;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
  
  @media (min-width: 767px) {
    display: block;
    max-width: 320px;
    margin: 0 auto 30px;
  }
`;

class ContactsFilter extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="Search contact..."
          value={this.props.contactsSearch}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }

  handleSearchChange = evt => {
    this.props.searchContacts(evt.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    contactsSearch: state.contactsSearch
  };
};

const mapDispatchToProps = { searchContacts };

const ContactsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsFilter);

export default ContactsFilterContainer;
