import React, { Component } from 'react';
import Container from "../components/wrappers/container"
import ContactForm from "../components/contactForm"

class ContactDocument extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <section className="contact-page">
        <Container>
          <ContactForm onSubmit={this.onSubmit}/>
        </Container>
      </section>
    );
  }
}

export default ContactDocument;
