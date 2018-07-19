import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Container from "../components/wrappers/container"
import ContactForm from "../components/contactForm"

class ContactDocument extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    const Header = styled.header`
      width: 100%;
      height: 150px;
      background: url('/img/contact-header.jpg');
      background-size: cover;

      @media (min-width: 767px) {
        height: 250px;
      }

      @media (min-width: 1240px) {
        height: 400px;
      }
    `;
    return (
      <section>
        <Header/>
        <Container>
          <Link to="/">Home</Link>
          <ContactForm onSubmit={this.onSubmit}/>
        </Container>
      </section>
    );
  }
}

export default ContactDocument;
