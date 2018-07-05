import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsFetched } from "../actions";
import ContactsList from "../components/contactsList/contactsList"
import axios from 'axios';

class HomePage extends Component {
  componentDidMount() {
    axios.get('https://randomuser.me/api/?format=json&results=15')
      .then(res => this.props.contactsFetched(res.data.results));
  }
  render() {
    return (
     <div className="container">
       <ContactsList contacts={this.props.contacts}/>
     </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = { contactsFetched };

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;