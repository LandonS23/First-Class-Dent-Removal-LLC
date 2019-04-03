import React, { Component } from 'react';
import {
  Container,
  Header,
  List
} from 'semantic-ui-react';

import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact-view">
        <Container text className="body-container">
          <div className="contact-image-mobile" />

          <div className="header-text">
            <Header as='h1' className="white">Contact Us</Header>
            <p className="contact-sub">Zach Mullen</p>
          </div>

          <div className="contact-container">
            <div className="contact-container-col contact-image" />

            <List className="contact-container-col">
              <List.Item icon='phone' content={<a href='tel:1-712-303-9044'>(712) 303-9044</a>} />
              <List.Item
                icon='mail'
                content={<a href='mailto:firstclassdentremoval@gmail.com'>firstclassdentremoval@gmail.com</a>}
              />
              <List.Item icon='facebook messenger' content={<a href='https://m.me/firstclassdentremovalllc?fbclid=IwAR26X9dSwYDbBcjAoGIVT0L8rZ00Ako1gmujaxxg3S3E2Sm9rNb2v2zavrQ' target="_blank" rel="noopener noreferrer">Facebook Messenger</a>} />
              <List.Item icon='facebook' content={<a href='https://www.facebook.com/firstclassdentremovalllc/' target="_blank" rel="noopener noreferrer">Visit us on Facebook</a>} />
              <List.Item icon='twitter' content={<a href='https://twitter.com/FirstClassDent' target="_blank" rel="noopener noreferrer">Follow us on Twitter</a>} />
            </List>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
