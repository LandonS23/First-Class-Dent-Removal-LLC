import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Header
} from 'semantic-ui-react';

import './FAQ.css';

class FAQ extends Component {

  render() {
    return (
      <div className="faq-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">Frequently Asked Questions</Header>
            <p className="faq-sub">Paintless Dent Removal</p>
          </div>

          <div className="faq-container">
            <p className="faq-question">How does it work?</p>
            <p className="faq-answer">We take a set of specialized tools to the backside of the metal, and gently massage the dented metal back in it's original place without disturbing the factory finish. Always making sure your vehicle is treated like First Class!</p>

            <p className="faq-question">What kind of dents can be repaired using PDR?</p>
            <p className="faq-answer">
              Damage caused by hail stones, door dings, shopping carts, golf balls, and many other kinds of minor dents as long as the paint is not damaged.
              If you are not sure if PDR is the right option for repairing your car, please&nbsp;&nbsp;
              <Link to="/contact" className="faq-link" onClick={e => this.props.handleItemClick(e, "contact")}>
                Contact Us
              </Link>
              &nbsp;&nbsp;for a free quote!
            </p>

            <p className="faq-question">Will the dent return?</p>
            <p className="faq-answer">Once the dent is repaired your factory finish will be kept in pristine condition, and the dent will never return. This is why we offer a 100% satisfaction guarantee.</p>

            <p className="faq-question">Do you work with Insurance Companies?</p>
            <p className="faq-answer">Yes! We can help guide you through the entire claim process.</p>

          </div>
        </Container>
      </div>
    );
  }
}

export default FAQ;
