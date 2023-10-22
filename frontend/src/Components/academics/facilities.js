import React from 'react'
import lecture from '../images/iloveimg-converted/769137f2-4653-41f8-8cd6-931e19405b57.JPG'
import activityroom from '../images/iloveimg-converted/IMG_4385.jpg'
import transport from '../images/iloveimg-converted/IMG_6285.PNG'

function facilities() {
  return (
    <div>
    <div className='bg-all'>
      <div style={{padding:'10vw',fontSize:'1.2vw', color:'white', }}>
              <h1 ><span>Facilities</span></h1>
                      <p >We believe in holistic development of each child and aim to nurture all the students<br />to excel in academics, co-curricular and extra-curricular activities.</p>
                          
      </div>
    </div>
   
    <div className='infra-div'>
    <h1 style={{textAlign:'center', paddingBottom:'3vw'}}>Facility</h1>
    <div>
    <div className='infra-div1-img'>
          <img src={activityroom} alt="" />
      </div>
      <div><h1>Activity Room</h1>
      <p style={{padding:'1vw 3vw'}}>It is the place where the world of dreams is painted, moulded and given a shape through the medium of artful handwork of fine arts The attractive ambience of the Activity room draws the youngsters to diverse art and craft activities which help the little minds to bloom and grow At Hillwoods Academy, regular weekly activities like clay modelling, vegetable painting, origami and theatre are scheduled as a step towards the holistic development of the minds of the children, and give wings to their imaginations and its practical expressions</p></div>
     
    </div>
    <br />
    <br />
    <div>
    <div className='infra-div2-img'>
          <img src={transport} alt="" />
      </div>
      <h1>Transport Facility</h1>
      <p style={{padding:'2vw'}}>To overcome the arduousness, bus service is available for the scholars of our school. Our buses have a caretaker and a teacher to pick and drop children safely from their designated bus stops to the school and back</p>

    </div>
    <br />
    <br />
    <div>
    <div className='infra-div1-img'>
          <img src={lecture} alt="" />
      </div>
      <h1>Infirmary</h1>
      <p style={{padding:'2vw'}}>We meet the needs of preliminary medical help. Our school has a well-equipped 2-bed medical room Medical camps are organised on a regular basis in each term by the expert medical practitioners. Basic medical aids including a stretcher, wheel chair, oxygen cylinder and first-aid are available in the infirmary.</p>
    </div>
    <br />
    <br />
   
    <div>
    </div>
    </div>
  </div>
  )
}

export default facilities
