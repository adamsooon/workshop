import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsFetched } from "../actions";
import GetFiltredContacts from "../selectors/GetFiltredContacts";
import Container from "../components/wrappers/container"
import ContactsList from "../components/contactsList/contactsList"
import ContactsFilterContainer from "../components/contactsList/contactsFilter"
import axios from 'axios';

class HomePage extends Component {
  componentDidMount() {
    axios.get('https://randomuser.me/api/?format=json&results=15&inc=name,picture,email, cell')
      .then(res => this.props.contactsFetched(res.data.results));
  }
  render() {
    return (
     <Container>
       <ContactsFilterContainer/>
       <ContactsList contacts={this.props.contacts}/>
     </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: GetFiltredContacts(state.contacts, state.contactsSearch),
    search: state.contactsSearch
  };
};

const mapDispatchToProps = { contactsFetched };

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;