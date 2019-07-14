import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css';

class Gallery extends Component {
  state = { width: 0 }

  updateDimensions = () => this.setState({width: window.innerWidth});

  componentDidMount () {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width } = this.state;

    return (
      <div className="gallery-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">Gallery</Header>
            <p className="gallery-sub">Before & After</p>
          </div>

        <Carousel className="gallery-carousel" autoPlay centerMode={width > 700} centerSlidePercentage={50} emulateTouch showThumbs={false}>
              <div>
                  <img src={require('../../resources/before1.jpeg')} alt='before1' />
                  <p className="legend">Before</p>
              </div>
              <div>
                  <img src={require('../../resources/fix1.jpeg')} alt='fix1' />
                  <p className="legend">After</p>
              </div>
              <div>
                  <img src={require('../../resources/before2.jpeg')} alt='before2' />
                  <p className="legend">Before</p>
              </div>
              <div>
                  <img src={require('../../resources/fix2.jpeg')} alt='fix2' />
                  <p className="legend">After</p>
              </div>
              <div>
                  <img src={require('../../resources/before3.jpeg')} alt='before3' />
                  <p className="legend">Before</p>
              </div>
              <div>
                  <img src={require('../../resources/fix3.jpeg')} alt='fix3' />
                  <p className="legend">After</p>
              </div>
              <div>
                  <img src={require('../../resources/before4.jpeg')} alt='before4' />
                  <p className="legend">Before</p>
              </div>
              <div>
                  <img src={require('../../resources/fix4.jpeg')} alt='fix4' />
                  <p className="legend">After</p>
              </div>
              <div>
                  <img src={require('../../resources/before6.jpeg')} alt='before6' />
                  <p className="legend">Before</p>
              </div>
              <div>
                  <img src={require('../../resources/fix6.jpeg')} alt='fix6' />
                  <p className="legend">After</p>
              </div>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Gallery;
