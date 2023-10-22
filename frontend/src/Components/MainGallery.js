import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import PopUp from './PopUp';
import ReactCardSlider from 'react-card-slider-component';
import games1 from './images/iloveimg-converted/IMG_6334.jpg'
import games2 from './images/iloveimg-converted/IMG_6334.jpg'
import games3 from './images/iloveimg-converted/IMG_6334.jpg'
import games4 from './images/iloveimg-converted/IMG_6334.jpg'
import games5 from './images/iloveimg-converted/IMG_6334.jpg'
import games6 from './images/iloveimg-converted/IMG_6334.jpg'
import fes1 from './images/iloveimg-converted/IMG_6977.jpg'
import fes2 from './images/iloveimg-converted/IMG_6981.jpg'
import fes3 from './images/iloveimg-converted/IMG_4974.jpg'
import fes4 from './images/iloveimg-converted/IMG_5020.jpg'
import fes5 from './images/iloveimg-converted/IMG_6964.jpg'
import fes6 from './images/iloveimg-converted/IMG_5029.jpg'
import con1 from './images/iloveimg-converted/IMG_2648.jpg'
import con2 from './images/iloveimg-converted/IMG_2611.jpg'
import con3 from './images/iloveimg-converted/IMG_5511.jpg'
import con4 from './images/iloveimg-converted/redhouse.JPG'
import con5 from './images/iloveimg-converted/bluehouse.JPG'
import con6 from './images/iloveimg-converted/yellowhouse.JPG'
import ReactImageSlider from './ReactImageSlider';
const council = [con1, con2 ,con3 ,con4 ,con5 ,con6]

const sports = [games1,games2,games3,games4,games5,games6]
const festival = [fes1,fes2,fes3,fes4,fes5,fes6]

export default function MainGallery() {

  return (
    <div>
       <div className='bg-all'>
       <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
            <h1 ><span>Gallery</span></h1>
                    <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                        
        </div>
    </div>
    <h1 style={{textAlign:'center' , margin:'1vw'}}>Gallery</h1>
    <div style={{padding:'2vw 5vw'}}>
    <div className='mg-div'>
    <h2>Council</h2>
    <ReactImageSlider image={council}/>
    </div>
   
    <div className='mg-div'>
    <h2>Sports</h2>
    <ReactImageSlider image={sports}/>
    </div>

    <div className='mg-div'>
    <h2>Festivals</h2>
    <ReactImageSlider image={festival}/>
    </div>
    
       
    </div>
    
    </div>
    
  );
}