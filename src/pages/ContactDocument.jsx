import React, { Component } from 'react';
import SimpleForm from "../components/contactForm/Form"

class ContactDocument extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <section className="contact-page">
        <SimpleForm onSubmit={this.onSubmit}/>
      </section>
    );
  }
}

export default ContactDocument;
