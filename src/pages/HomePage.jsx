import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchContacts } from "../actions";
import GetFiltredContacts from "../selectors/GetFiltredContacts";
import Container from "../components/wrappers/container"
import ContactsList from "../components/contactsList/contactsList"
import ContactsFilterContainer from "../components/contactsList/contactsFilter"

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
     <Container>
       <ContactsFilterContainer/>
       <ContactsList contacts={contacts}/>
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

const mapDispatchToProps = { fetchContacts };

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;