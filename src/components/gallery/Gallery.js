import React, { Component } from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';

import './Gallery.css';

class Gallery extends Component {

  render() {
    return (
      <div className="gallery-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">Gallery</Header>
            <p className="gallery-sub">Before & After</p>
          </div>

          <Image.Group size='medium' className="gallery-container">
            <Image className="gallery-before" src={require('../../resources/before1.jpeg')} rounded/>
            <Image className="gallery-after" src={require('../../resources/fix1.jpeg')} rounded />

            <Image className="gallery-before" src={require('../../resources/before2.jpeg')} rounded/>
            <Image className="gallery-after" src={require('../../resources/fix2.jpeg')} rounded />
          </ Image.Group>

          <Image.Group size='medium' className="gallery-container">
            <Image className="gallery-before" src={require('../../resources/before3.jpeg')} rounded/>
            <Image className="gallery-after" src={require('../../resources/fix3.jpeg')} rounded />

            <Image className="gallery-before" src={require('../../resources/before4.jpeg')} rounded/>
            <Image className="gallery-after" src={require('../../resources/fix4.jpeg')} rounded />
          </ Image.Group>

          <Image.Group size='medium' className="gallery-container">
            <Image className="gallery-before" src={require('../../resources/before5.jpeg')} rounded/>
            <Image className="gallery-after" src={require('../../resources/fix5.jpeg')} rounded />
          </ Image.Group>

        </Container>
      </div>
    );
  }
}

export default Gallery;
