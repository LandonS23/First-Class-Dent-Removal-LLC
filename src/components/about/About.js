import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import './About.css';

class About extends Component {

  render() {
    return (
      <div className="about-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">About Us</Header>
            <p className="about-sub">Dent Removal Specialists</p>
          </div>

          <div className="about-container">
            <div className="about-container-col about-image" />

            <div className="about-container-col">
              <p className="about-detail">
                My name is Zach Mullen and I come from a background in Collision Repair.
                I took my skills to the next level by learning paintless dent removal.
                I was fascinated by the ability to repair large and small dents very quickly without damaging the factory finish.
                <br/><br/>
                Since then I have been fixing hail damaged cars as well as door dings and other minor dents.
                My knowledge of automobiles and dedication to performing high quality work has allowed me to excel in the industry.
                <br/><br/>
                We are committed to taking care of our customers and their vehicles at the highest standard.
                That is why at First Class Dent Removal LLC “We Treat Your Vehicle Like First Class.”
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
