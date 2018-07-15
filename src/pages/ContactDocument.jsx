import React, { Component } from 'react';
import Container from "../components/wrappers/container"
import SyncValidationForm from "../components/contactForm/Form"

class ContactDocument extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <section className="contact-page">
        <Container>
          <SyncValidationForm onSubmit={this.onSubmit}/>
        </Container>
      </section>
    );
  }
}

export default ContactDocument;
