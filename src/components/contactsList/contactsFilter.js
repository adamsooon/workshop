/**
 * Created by adampowalisz on 7/5/18.
 */
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  searchContacts,
  changeCountryAndFetch,
  changeGenderAndFetch
} from "../../actions";

const ContactFiltersWrapper = styled.div`
  display: flex;
  justify-content: center
  margin: 0 0 30px;
`;

const Input = styled.input`
  width: 100%
  height: 40px;
  margin: 0 0 20px;
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
        <ContactFiltersWrapper>
          <select
            onChange={this.handleOptionChange("changeCountryAndFetch")}
            value={this.props.country}
          >
            <option value="">All Countries</option>
            <option value="us">USA</option>
            <option value="gb">Great Britain</option>
          </select>
          <select
            onChange={this.handleOptionChange("changeGenderAndFetch")}
            value={this.props.gender}
          >
            <option value="">All genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </ContactFiltersWrapper>
      </div>
    );
  }

  handleSearchChange = evt => {
    this.props.searchContacts(evt.currentTarget.value);
  };

  handleOptionChange = option => evt => {
    this.props[option](evt.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    contactsSearch: state.contactsSearch,
    country: state.country,
    gender: state.gender
  };
};

const mapDispatchToProps = {
  searchContacts,
  changeCountryAndFetch,
  changeGenderAndFetch
};

const ContactsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsFilter);

export default ContactsFilterContainer;
