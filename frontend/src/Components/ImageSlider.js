// // src/components/ImageSlider.js
// import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';
import photo1 from  './images/main_photo1.JPG'
import sciencepark from './images/iloveimg-converted/IMG_6534.jpg'
import curr3 from './images/iloveimg-converted/IMG_2647.jpg'
import photo2 from './images/iloveimg-converted/IMG_2623.jpg'
import photo3 from './images/iloveimg-converted/IMG_6178.jpg'
import curr2 from './images/iloveimg-converted/IMG_5511.jpg'
import curr1 from './images/iloveimg-converted/IMG_3549.jpg'
import games from './images/iloveimg-converted/IMG_6334.jpg'

import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={photo3}
        alt='...'
      />
      <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={curr3}
          alt='...'
        />
      <MDBCarouselItem
        className='w-100  d-block'
        itemId={3}
        src={photo1}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={curr1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={sciencepark}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={curr2}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={games}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src={photo2}
        alt='...'
      />

    </MDBCarousel>
  );
}