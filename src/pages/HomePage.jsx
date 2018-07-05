import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsFetched } from "../actions";
import Contact from "../components/contactsList/contact"

class HomePage extends Component {
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=15")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results));
  }
  render() {
    return (
     <div className="container">
       <ul className="contact-list">
         {this.props.contacts.map(contact =>
           <Contact contact={contact} key={contact.email}/>
         )}
       </ul>
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