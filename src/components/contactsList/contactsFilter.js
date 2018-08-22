/**
 * Created by adampowalisz on 7/5/18.
 */
import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { searchContacts, changeCountryAndFetch } from "../../actions";

const Input = styled.input `
  width: 100%
  height: 40px;
  margin: 0 0 30px;
  padding: 0 20px;
  border: 1px solid #414141;
  border-radius: 16px;
  &:focus {
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
        <select
          onChange={this.handleCountryChange}
          value={this.props.country}
        >
          <option value="">All</option>
          <option value="us">USA</option>
          <option value="gb">Great Britain</option>
        </select>
      </div>
    );
  }

  handleSearchChange = evt => {
    this.props.searchContacts(evt.currentTarget.value);
  };

  handleCountryChange = evt => {
    this.props.changeCountryAndFetch(evt.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    contactsSearch: state.contactsSearch,
    country: state.country
  };
};

const mapDispatchToProps = { searchContacts, changeCountryAndFetch };

const ContactsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsFilter);

export default ContactsFilterContainer;
