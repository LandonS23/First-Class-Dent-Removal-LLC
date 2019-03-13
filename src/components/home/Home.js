import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Container text className="body-container">
          <h3>Paintless Dent Removal</h3>
          <Header as='h1' className="white">First Class Dent Removal, LLC</Header>
          <p className="mission">"We Treat Your Vehicle Like First Class"</p>
        </Container>
      </div>
    );
  }
}

export default Home;
