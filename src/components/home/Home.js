import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Container text className="body-container home-container">
          <div className="header-text">
            <Header as='h1' className="white">First Class Dent Removal, LLC</Header>
            <p className="mission">Paintless Dent Removal</p>
          </div>

          <div className="home-image-mobile" />

          <p className="quote">"We Treat Your Vehicle Like First Class"</p>

          <div className="quick-links">
            <Link to="/contact" className="quick-link" onClick={e => this.props.handleItemClick(e, "contact")}>
              <Icon name='car' size='big'/>Free Quote
            </Link>
            <Link to="/gallery" className="quick-link" onClick={e => this.props.handleItemClick(e, "gallery")}>
              <Icon name='camera' size='big'/>Gallery
            </Link>
            <Link to="/about" className="quick-link" onClick={e => this.props.handleItemClick(e, "about")}>
              <Icon name='info circle' size='big'/>About Us
            </Link>
            <Link to="/faq" className="quick-link" onClick={e => this.props.handleItemClick(e, "faq")}>
              <Icon name='question' size='big'/>FAQ
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
