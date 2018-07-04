import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsFetched } from "../actions";

class HomePage extends Component {
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results));
  }
  render() {
    const name = contact =>`${contact.name.title} ${contact.name.first} ${contact.name.last}`
    return (
     <div className="container">
       <ul className="contact-list">
         {this.props.contacts.map(contact =>
           <li className="contact-list-item" key={name(contact)}>
             <span>{name(contact)}</span>
           </li>
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