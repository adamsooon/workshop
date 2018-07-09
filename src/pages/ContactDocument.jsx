import React, { Component } from 'react';
import SyncValidationForm from "../components/contactForm/Form"

class ContactDocument extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <section className="contact-page">
        <SyncValidationForm onSubmit={this.onSubmit}/>
      </section>
    );
  }
}

export default ContactDocument;
